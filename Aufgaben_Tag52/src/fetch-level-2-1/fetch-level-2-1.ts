import { IPhotosPicsum } from './interface/IPhotosPicsum';

const BASE_URL = "https://picsum.photos/v2/";
const LIST_URL = BASE_URL + "list";

async function fetchPhotosFromPicsum(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Die API hat nicht geantwortet');
        }
        const result: IPhotosPicsum[] = await response.json();
        console.log(result);
        displayPhotos(result);
    } catch (error) {
        console.error("Hier ist etwas schiefgelaufen", error);
    }
}

function displayPhotos(photos: IPhotosPicsum[]) {
    const contentDiv = document.getElementById('contentDiv');
    if (!contentDiv) return;

    photos.forEach(photo => {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = photo.download_url;
        img.alt = photo.author;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = photo.author;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        contentDiv.appendChild(figure);
    });
}

fetchPhotosFromPicsum(LIST_URL);
