// Lightbox Gallery Funktion
document.addEventListener('DOMContentLoaded', function() {
    // Prüfen ob Lightbox schon existiert
    if (document.getElementById('lightbox')) {
        console.log('Lightbox existiert bereits');
        return;
    }
    
    // Lightbox HTML erstellen
    const lightboxHTML = `
        <div class="lightbox-overlay" id="lightbox">
            <div class="lightbox-container">
                <button class="lightbox-close" id="lightbox-close">✕</button>
                <button class="lightbox-nav prev" id="lightbox-prev">❮</button>
                <button class="lightbox-nav next" id="lightbox-next">❯</button>
                <img class="lightbox-image" id="lightbox-image" src="" alt="">
                <div class="lightbox-caption" id="lightbox-caption"></div>
            </div>
        </div>
    `;
    
    // Lightbox zum Body hinzufügen
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    console.log('Lightbox wurde hinzugefügt');
    
    // Lightbox Elemente holen
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    // Prüfen ob alle Elemente gefunden wurden
    if (!lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext) {
        console.error('Lightbox Elemente nicht gefunden!');
        return;
    }
    
    let currentIndex = 0;
    let galleryItems = [];
    
    // Alle Gallery-Links sammeln
    galleryItems = Array.from(document.querySelectorAll('.gallery-link[data-lightbox="screenshot"]'));
    console.log('Gefundene Gallery-Items:', galleryItems.length);
    
    // Klick-Event für jeden Link
    galleryItems.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Verhindert Event-Bubbling
            console.log('Gallery-Item geklickt:', index);
            
            currentIndex = index;
            
            // Bild und Caption setzen
            lightboxImage.src = this.href;
            lightboxImage.alt = this.dataset.title || 'Screenshot';
            lightboxCaption.textContent = this.dataset.title || '';
            
            // Lightbox anzeigen
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Funktionen
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        console.log('Lightbox geschlossen');
    }
    
    function navigateLightbox(direction) {
        if (!galleryItems.length) return;
        
        currentIndex += direction;
        
        // Wrap around
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }
        
        const item = galleryItems[currentIndex];
        lightboxImage.src = item.href;
        lightboxImage.alt = item.dataset.title || 'Screenshot';
        lightboxCaption.textContent = item.dataset.title || '';
        console.log('Navigiert zu:', currentIndex);
    }

    function openMarkdown(file) {
    // Try multiple approaches to open Markdown files
    
    // Approach 1: Direct link
    window.location.href = file;
    
    // If that doesn't work, the browser might have already handled it
    return false;
    }
    
    // Close-Button
    lightboxClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateLightbox(1);
    });
    
    // Klick auf Overlay (Hintergrund) schließt Lightbox
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Escape-Taste schließt Lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
        
        // Pfeiltasten für Navigation (nur wenn Lightbox aktiv)
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigateLightbox(1);
            }
        }
    });
    
    // Debug: Prüfen ob alles funktioniert
    console.log('Lightbox initialisiert mit', galleryItems.length, 'Bildern');
});