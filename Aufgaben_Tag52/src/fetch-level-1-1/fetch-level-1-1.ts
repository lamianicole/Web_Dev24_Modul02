const BASE_URL = "https://picsum.photos/v2/";
const LIST_URL = BASE_URL + "list";
async function fetchPhotosFromPicsum(url: string) {
    try {
        const response = await fetch(url);

        const result = await response.json();
        console.log(result);
    } catch (error) {
    console.error(error);
    }
}
fetchPhotosFromPicsum(LIST_URL);

