import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery')
galleryContainer.addEventListener('click', galleryClick)
const galleryMarkUp = makeGalleryMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp)


function makeGalleryMarkup (galleryItemsEl) {
    
    const markup = galleryItemsEl.map((galleryItem) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${galleryItem.original}">
                    <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                    />
                </a>
            </div>
        `
    }).join('')

    return markup
}

makeGalleryMarkup(galleryItems)
console.log(galleryMarkUp);

function galleryClick (event) {
    event.preventDefault()

    if (event.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    galleryContainer.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close()
        }
    })
}