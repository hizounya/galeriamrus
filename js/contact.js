// ============================================
// Contact form — submit ke backend FastAPI
// ============================================

const API_URL = 'http://127.0.0.1:8001/api/contact';

document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.form-submit');
        const originalHTML = submitBtn.innerHTML;

        const payload = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim(),
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Mengirim...</span>';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Gagal mengirim pesan');
            }

            submitBtn.innerHTML = '<span>✓ Pesan Terkirim</span>';
            submitBtn.style.background = 'var(--accent-gold)';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                alert(data.message || 'Terima kasih! Pesan Anda telah terkirim.');
            }, 1500);

        } catch (err) {
            console.error('Submit error:', err);

            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.background = '';

            alert('Gagal mengirim pesan: ' + err.message + '\n\nPastikan server backend berjalan di ' + API_URL);
        }
    });

});
