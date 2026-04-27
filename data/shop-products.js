// ============================================
// Data Produk Toko Amrus Natalsya
// ============================================
// Edit nomor WA di sini kalo mau ganti
const WA_NUMBER = '6285280094466';

const SHOP_PRODUCTS = [
    {
        id: 1,
        badge: 'Edisi Terbatas',
        category: 'Patung Kayu · Replika Resmi',
        title: 'Orang Buta yang Terlupakan',
        description: 'Replika resmi patung legendaris karya Amrus 1955. Kayu jati pilihan, dikerjakan oleh pemahat tersertifikasi. Edisi 25 buah.',
        price: 'Rp 45.000.000',
        buttonText: 'Pesan Karya',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#a87c52"/>
                    <stop offset="1" stop-color="#3d2817"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s1)"/>
            <g transform="translate(200,210)">
                <ellipse cx="0" cy="150" rx="80" ry="14" fill="#2b1810" opacity="0.5"/>
                <path d="M -50 130 L -40 30 Q -25 15, 0 15 Q 25 15, 40 30 L 50 130 Z" fill="#8b5e3c"/>
                <ellipse cx="0" cy="-25" rx="28" ry="34" fill="#a87c52"/>
                <path d="M -28 -45 Q -20 -65, 0 -65 Q 20 -65, 28 -45 L 28 -25 Q 0 -32, -28 -25 Z" fill="#2b1810"/>
                <line x1="-12" y1="-30" x2="-6" y2="-30" stroke="#2b1810" stroke-width="2"/>
                <line x1="6" y1="-30" x2="12" y2="-30" stroke="#2b1810" stroke-width="2"/>
            </g>
        </svg>`
    },
    {
        id: 2,
        badge: 'Best Seller',
        category: 'Cetak Edisi Terbatas',
        title: 'Pecinan — Print A1',
        description: 'Reproduksi cukil kayu fenomenal "Pecinan" pada kertas archival giclée 310gsm. Bertanda tangan keluarga & bernomor seri (1/100).',
        price: 'Rp 3.500.000',
        buttonText: 'Pesan Karya',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#6b1e12"/>
                    <stop offset="1" stop-color="#2b1810"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s2)"/>
            <g fill="#d4a437">
                <circle cx="80" cy="80" r="18" opacity="0.8"/>
                <circle cx="200" cy="60" r="20" opacity="0.85"/>
                <circle cx="320" cy="80" r="18" opacity="0.8"/>
            </g>
            <g fill="#8b5e3c">
                <circle cx="100" cy="220" r="22"/>
                <rect x="78" y="235" width="44" height="100" rx="8"/>
                <circle cx="200" cy="215" r="24"/>
                <rect x="176" y="232" width="48" height="105" rx="8"/>
                <circle cx="300" cy="220" r="22"/>
                <rect x="278" y="235" width="44" height="100" rx="8"/>
            </g>
            <g fill="#d4a437" opacity="0.5">
                <circle cx="100" cy="220" r="6"/>
                <circle cx="200" cy="215" r="7"/>
                <circle cx="300" cy="220" r="6"/>
            </g>
        </svg>`
    },
    {
        id: 3,
        badge: null,
        category: 'Buku · Hardcover',
        title: 'Sang Pematung Bumi Tarung',
        description: 'Monografi resmi 320 halaman, full color, mendokumentasikan perjalanan dan karya Amrus dari 1933 hingga 2024. Edisi pertama.',
        price: 'Rp 850.000',
        buttonText: 'Pesan Buku',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#ebd9b4"/>
                    <stop offset="1" stop-color="#5c3a1e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s3)"/>
            <g transform="translate(200,200)">
                <rect x="-110" y="-140" width="220" height="280" fill="#5c3a1e"/>
                <rect x="-100" y="-130" width="200" height="260" fill="#8b2e1f"/>
                <rect x="-90" y="-120" width="180" height="240" fill="none" stroke="#d4a437" stroke-width="2"/>
                <text x="0" y="-30" text-anchor="middle" fill="#d4a437" font-family="Playfair Display, serif" font-size="22" font-weight="700" font-style="italic">AMRUS</text>
                <text x="0" y="0" text-anchor="middle" fill="#d4a437" font-family="Playfair Display, serif" font-size="22" font-weight="700" font-style="italic">NATALSYA</text>
                <line x1="-50" y1="20" x2="50" y2="20" stroke="#d4a437" stroke-width="1"/>
                <text x="0" y="60" text-anchor="middle" fill="#f4ead5" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic">Sang Pematung Bumi Tarung</text>
                <circle cx="0" cy="100" r="10" fill="none" stroke="#d4a437" stroke-width="1"/>
            </g>
        </svg>`
    },
    {
        id: 4,
        badge: 'Karya Asli',
        category: 'Lukisan Asli · Bertanda Tangan',
        title: 'Pasar Pagi — Karya Asli',
        description: 'Lukisan cat minyak asli ukuran sedang (60×80cm) bertanda tangan asli sang maestro. Disertai sertifikat keaslian dan bingkai kayu jati.',
        price: 'Rp 175.000.000',
        buttonText: 'Pesan Karya',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#d4a437"/>
                    <stop offset="0.5" stop-color="#8b5e3c"/>
                    <stop offset="1" stop-color="#3d2817"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s4)"/>
            <rect x="40" y="40" width="320" height="320" fill="none" stroke="#d4a437" stroke-width="3"/>
            <g>
                <ellipse cx="120" cy="220" rx="18" ry="25" fill="#a87c52"/>
                <rect x="105" y="240" width="30" height="65" fill="#6b1e12"/>
                <ellipse cx="200" cy="215" rx="20" ry="27" fill="#a87c52"/>
                <rect x="183" y="237" width="34" height="68" fill="#2b1810"/>
                <ellipse cx="280" cy="220" rx="18" ry="25" fill="#a87c52"/>
                <rect x="265" y="240" width="30" height="65" fill="#6b1e12"/>
            </g>
            <rect y="305" width="400" height="60" fill="#3d2817"/>
            <text x="60" y="350" fill="#d4a437" font-family="Playfair Display, serif" font-size="11" font-style="italic">Pasar Pagi · 2008 · Cat Minyak</text>
        </svg>`
    },
    {
        id: 5,
        badge: null,
        category: 'Buku Puisi · Cetakan Ulang',
        title: 'Puisi-Puisi Amrus Natalsya',
        description: 'Kumpulan puisi sang maestro yang diterbitkan Tahura Media (2015). Cetakan ulang resmi dengan kata pengantar baru dari kurator.',
        price: 'Rp 195.000',
        buttonText: 'Pesan Buku',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#5c3a1e"/>
                    <stop offset="1" stop-color="#2b1810"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s5)"/>
            <g transform="translate(200,200)">
                <rect x="-90" y="-120" width="180" height="240" fill="#3d2817"/>
                <rect x="-80" y="-110" width="160" height="220" fill="#8b2e1f"/>
                <rect x="-70" y="-100" width="140" height="200" fill="none" stroke="#d4a437" stroke-width="1"/>
                <text x="0" y="-40" text-anchor="middle" fill="#d4a437" font-family="Cormorant Garamond, serif" font-size="20" font-weight="600" font-style="italic">Puisi-Puisi</text>
                <text x="0" y="-15" text-anchor="middle" fill="#d4a437" font-family="Cormorant Garamond, serif" font-size="20" font-weight="600" font-style="italic">Amrus</text>
                <text x="0" y="10" text-anchor="middle" fill="#d4a437" font-family="Cormorant Garamond, serif" font-size="20" font-weight="600" font-style="italic">Natalsya</text>
                <line x1="-30" y1="30" x2="30" y2="30" stroke="#d4a437" stroke-width="1"/>
                <text x="0" y="55" text-anchor="middle" fill="#f4ead5" font-family="Plus Jakarta Sans, sans-serif" font-size="9" letter-spacing="2">2015</text>
                <path d="M 0 75 L 5 85 L 15 85 L 7 92 L 11 102 L 0 95 L -11 102 L -7 92 L -15 85 L -5 85 Z" fill="#d4a437"/>
            </g>
        </svg>`
    },
    {
        id: 6,
        badge: null,
        category: 'Merchandise · Tote Bag',
        title: 'Tote Bag "Bumi Tarung"',
        description: 'Tote bag kanvas tebal premium dengan sablon archival. Tersedia dalam dua warna: krem gading dan tanah liat.',
        price: 'Rp 245.000',
        buttonText: 'Pesan',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s6" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#a87c52"/>
                    <stop offset="1" stop-color="#5c3a1e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s6)"/>
            <g transform="translate(200,200)">
                <path d="M -80 -80 L -80 100 L 80 100 L 80 -80 Z" fill="#f4ead5"/>
                <path d="M -50 -80 Q -50 -120, -25 -120 L 25 -120 Q 50 -120, 50 -80" fill="none" stroke="#5c3a1e" stroke-width="6"/>
                <text x="0" y="-30" text-anchor="middle" fill="#8b2e1f" font-family="Playfair Display, serif" font-size="22" font-weight="700" font-style="italic">AMRUS</text>
                <text x="0" y="0" text-anchor="middle" fill="#8b2e1f" font-family="Playfair Display, serif" font-size="14" font-weight="600">NATALSYA</text>
                <line x1="-30" y1="15" x2="30" y2="15" stroke="#8b2e1f" stroke-width="1"/>
                <text x="0" y="35" text-anchor="middle" fill="#8b2e1f" font-family="Cormorant Garamond, serif" font-size="11" font-style="italic">Sang Pematung</text>
                <text x="0" y="50" text-anchor="middle" fill="#8b2e1f" font-family="Cormorant Garamond, serif" font-size="11" font-style="italic">Bumi Tarung</text>
                <path d="M -30 70 L 30 70" stroke="#d4a437" stroke-width="2"/>
                <circle cx="0" cy="80" r="3" fill="#d4a437"/>
            </g>
        </svg>`
    },
    {
        id: 7,
        badge: 'Karya Asli',
        category: 'Patung Asli · Bertanda Tangan',
        title: 'Ibu dan Anak — Patung Asli',
        description: 'Patung kayu mahoni asli karya Amrus dari periode 1980-an. Berasal dari koleksi keluarga dengan sertifikat keaslian lengkap.',
        price: 'Rp 125.000.000',
        buttonText: 'Pesan Karya',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s7" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#8b6f4a"/>
                    <stop offset="1" stop-color="#3d2817"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s7)"/>
            <g transform="translate(200,210)">
                <ellipse cx="0" cy="160" rx="90" ry="15" fill="#2b1810" opacity="0.5"/>
                <path d="M -55 140 Q -65 40, -35 15 L 35 15 Q 65 40, 55 140 Z" fill="#a87c52"/>
                <ellipse cx="0" cy="-30" rx="32" ry="38" fill="#a87c52"/>
                <path d="M -32 -50 Q -25 -68, 0 -68 Q 25 -68, 32 -50 L 32 -25 Q 0 -32, -32 -25 Z" fill="#3d2817"/>
                <ellipse cx="-15" cy="60" rx="18" ry="22" fill="#8b6f4a"/>
                <ellipse cx="-15" cy="35" rx="13" ry="16" fill="#a87c52"/>
            </g>
        </svg>`
    },
    {
        id: 8,
        badge: null,
        category: 'Poster Cetak · Edisi Pameran',
        title: 'Poster "Terakhir, Selamat Tinggal"',
        description: 'Reproduksi poster pameran tunggal di Galeri Cipta II Taman Ismail Marzuki, 2019. Cetak archival 70×100cm.',
        price: 'Rp 650.000',
        buttonText: 'Pesan',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="s8" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#3d2817"/>
                    <stop offset="1" stop-color="#5c3a1e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#s8)"/>
            <g transform="translate(200,200)">
                <rect x="-100" y="-130" width="200" height="260" fill="#f4ead5"/>
                <text x="0" y="-80" text-anchor="middle" fill="#8b2e1f" font-family="Playfair Display, serif" font-size="14" font-weight="700">PAMERAN</text>
                <text x="0" y="-55" text-anchor="middle" fill="#8b2e1f" font-family="Playfair Display, serif" font-size="14" font-weight="700">TUNGGAL</text>
                <line x1="-40" y1="-40" x2="40" y2="-40" stroke="#8b2e1f" stroke-width="1"/>
                <text x="0" y="-15" text-anchor="middle" fill="#3d2817" font-family="Cormorant Garamond, serif" font-size="13" font-style="italic">Terakhir,</text>
                <text x="0" y="0" text-anchor="middle" fill="#3d2817" font-family="Cormorant Garamond, serif" font-size="13" font-style="italic">Selamat Tinggal</text>
                <text x="0" y="15" text-anchor="middle" fill="#3d2817" font-family="Cormorant Garamond, serif" font-size="13" font-style="italic">dan Terima Kasih</text>
                <circle cx="0" cy="40" r="20" fill="#8b2e1f"/>
                <text x="0" y="46" text-anchor="middle" fill="#f4ead5" font-family="Playfair Display, serif" font-size="14" font-weight="700" font-style="italic">A</text>
                <text x="0" y="80" text-anchor="middle" fill="#3d2817" font-family="Plus Jakarta Sans, sans-serif" font-size="9" letter-spacing="2">14 — 23 JULI 2019</text>
                <text x="0" y="95" text-anchor="middle" fill="#3d2817" font-family="Plus Jakarta Sans, sans-serif" font-size="8" letter-spacing="1">GALERI CIPTA II · TIM</text>
            </g>
        </svg>`
    }
];
