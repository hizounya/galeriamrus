// ============================================
// Gallery — filter & modal lightbox
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // ---------- Filter ----------
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        setTimeout(() => item.classList.add('visible'), 50);
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ---------- Modal ----------
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalMedium = document.getElementById('modalMedium');
    const modalDimensions = document.getElementById('modalDimensions');
    const modalCollection = document.getElementById('modalCollection');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    const modalClose = document.getElementById('modalClose');

    if (modal && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imageEl = item.querySelector('.gallery-image');
                if (modalImage && imageEl) modalImage.innerHTML = imageEl.innerHTML;
                if (modalTitle) modalTitle.textContent = item.getAttribute('data-title') || '';
                if (modalYear) modalYear.textContent = item.getAttribute('data-year') || '';
                if (modalMedium) modalMedium.textContent = item.getAttribute('data-medium') || '';
                if (modalDimensions) modalDimensions.textContent = item.getAttribute('data-dimensions') || '';
                if (modalCollection) modalCollection.textContent = item.getAttribute('data-collection') || '';
                if (modalDescription) modalDescription.textContent = item.getAttribute('data-description') || '';
                if (modalCategory) modalCategory.textContent = item.getAttribute('data-category') || '';

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (modalClose) modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }

    // ---------- Initial reveal ----------
    if (galleryItems.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        galleryItems.forEach(item => observer.observe(item));
    }

});
