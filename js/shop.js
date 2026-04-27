// ============================================
// Shop — render cards dari data + WA links
// ============================================
// Butuh shop-products.js di-load duluan (define WA_NUMBER & SHOP_PRODUCTS)

document.addEventListener('DOMContentLoaded', function() {

    // Generate WA link dengan pesan otomatis
    function buildWaLink(productTitle) {
        const message = `Halo, saya tertarik untuk memesan: ${productTitle}. Mohon info lebih lanjut, terima kasih.`;
        return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    // Render satu card
    function renderCard(product) {
        const badgeHTML = product.badge
            ? `<div class="shop-card-badge">${product.badge}</div>`
            : '';

        return `
            <div class="shop-card">
                ${badgeHTML}
                <div class="shop-card-image">
                    ${product.svg}
                </div>
                <div class="shop-card-info">
                    <span class="shop-card-category">${product.category}</span>
                    <h3 class="shop-card-title">${product.title}</h3>
                    <p class="shop-card-desc">${product.description}</p>
                    <div class="shop-card-footer">
                        <div class="shop-card-price">${product.price}</div>
                        <a href="${buildWaLink(product.title)}"
                           target="_blank"
                           rel="noopener"
                           class="shop-btn"
                           style="text-decoration:none;display:inline-block;">
                           ${product.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Inject ke .shop-grid
    const shopGrid = document.getElementById('shopGrid');
    if (shopGrid && typeof SHOP_PRODUCTS !== 'undefined') {
        shopGrid.innerHTML = SHOP_PRODUCTS.map(renderCard).join('');
    }

    // Hubungi Kurator button (banner)
    const kuratorBtn = document.getElementById('kuratorBtn');
    if (kuratorBtn) {
        const message = 'Halo Kurator, saya ingin bertanya tentang koleksi karya Amrus Natalsya.';
        kuratorBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    }

});
