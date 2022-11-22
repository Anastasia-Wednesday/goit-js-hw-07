import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery')
const galleryMarkUp = makeGalleryMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp)

function makeGalleryMarkup (galleryItemsEl) {
    
    const markup = galleryItemsEl.map((galleryItem) => {
        return `
            <a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
            </a>
        `
    }).join('')

    return markup
}

new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});