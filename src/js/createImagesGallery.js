export default function createImagesGalleryMarkup(galleryItems) {
        
    return galleryItems.map(({preview, original, description}, index  ) => {
        return `
        <li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
                <img
                    class="gallery__image"
                    data-index="${index}"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    }).join('');

    }