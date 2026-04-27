"""
Backend Amrus Natalsya — Contact Form API
"""

import os
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Amrus Natalsya Archive API",
    description="Backend untuk contact form arsip Amrus Natalsya",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "arsip@amrusnatalsya.id")

SUBJECT_LABELS = {
    "koleksi": "Pertanyaan Koleksi",
    "pameran": "Permintaan Pinjam Karya",
    "riset": "Riset Akademik",
    "pers": "Wawancara / Pers",
    "pembelian": "Pembelian Karya",
    "lainnya": "Lainnya",
}


class ContactPayload(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., pattern="^(koleksi|pameran|riset|pers|pembelian|lainnya)$")
    message: str = Field(..., min_length=10, max_length=5000)


class ContactResponse(BaseModel):
    success: bool
    message: str


def build_email_body(payload: ContactPayload) -> str:
    subject_label = SUBJECT_LABELS.get(payload.subject, payload.subject)
    timestamp = datetime.now().strftime("%d %B %Y, %H:%M WIB")

    return f"""\
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: 'Segoe UI', Roboto, sans-serif; background: #f4ead5; padding: 2rem;">
  <div style="max-width: 600px; margin: 0 auto; background: #faf3e0; padding: 2rem; border-radius: 8px; border-top: 4px solid #8b2e1f;">
    <h2 style="color: #2b1810; font-family: Georgia, serif; margin-top: 0;">
      Pesan Baru dari Website Amrus Natalsya
    </h2>
    <p style="color: #5c3a1e; font-size: 14px;">{timestamp}</p>
    <hr style="border: none; border-top: 1px solid #c9a876; margin: 1.5rem 0;">
    <table style="width: 100%; color: #2b1810;">
      <tr><td style="padding: 8px 0; font-weight: bold;">Nama</td><td>{payload.name}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Surel</td><td>{payload.email}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Perihal</td><td>{subject_label}</td></tr>
    </table>
    <hr style="border: none; border-top: 1px solid #c9a876; margin: 1.5rem 0;">
    <h3 style="color: #2b1810; font-family: Georgia, serif;">Pesan</h3>
    <p style="color: #2b1810; line-height: 1.7; white-space: pre-wrap;">{payload.message}</p>
    <hr style="border: none; border-top: 1px solid #c9a876; margin: 1.5rem 0;">
    <p style="color: #5c3a1e; font-size: 12px; font-style: italic;">
      Pesan ini dikirim otomatis dari form kontak website resmi Arsip Amrus Natalsya.
      Untuk membalas, silakan langsung kirim email ke <strong>{payload.email}</strong>.
    </p>
  </div>
</body>
</html>
"""


def send_email(payload: ContactPayload) -> None:
    if not SMTP_USER or not SMTP_PASSWORD:
        raise RuntimeError("SMTP_USER atau SMTP_PASSWORD belum di-set di .env")

    subject_label = SUBJECT_LABELS.get(payload.subject, payload.subject)

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Amrus Natalsya] {subject_label} — {payload.name}"
    msg["From"] = SMTP_USER
    msg["To"] = RECIPIENT_EMAIL
    msg["Reply-To"] = payload.email

    body_html = build_email_body(payload)
    body_plain = (
        f"Pesan baru dari website Amrus Natalsya\n\n"
        f"Nama: {payload.name}\n"
        f"Surel: {payload.email}\n"
        f"Perihal: {subject_label}\n\n"
        f"Pesan:\n{payload.message}\n"
    )

    msg.attach(MIMEText(body_plain, "plain"))
    msg.attach(MIMEText(body_html, "html"))

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(msg)


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "Amrus Natalsya Archive API",
        "smtp_configured": bool(SMTP_USER and SMTP_PASSWORD),
    }


@app.post("/api/contact", response_model=ContactResponse)
def submit_contact(payload: ContactPayload):
    logger.info(f"Pesan baru dari {payload.email} | perihal: {payload.subject}")

    try:
        send_email(payload)
    except RuntimeError as e:
        logger.error(f"Config error: {e}")
        raise HTTPException(
            status_code=500,
            detail="Server belum dikonfigurasi dengan benar. Hubungi admin."
        )
    except smtplib.SMTPAuthenticationError:
        logger.error("SMTP authentication gagal")
        raise HTTPException(
            status_code=500,
            detail="Gagal mengirim pesan. Hubungi admin."
        )
    except Exception as e:
        logger.exception(f"Gagal kirim email: {e}")
        raise HTTPException(
            status_code=500,
            detail="Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti."
        )

    return ContactResponse(
        success=True,
        message="Pesan berhasil dikirim. Kami akan membalas dalam 3–5 hari kerja."
    )