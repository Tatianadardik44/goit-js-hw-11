import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { objGallery } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { list } from "./js/render-functions";
const loaderElement = document.querySelector(".loader");
const formGallery = document.querySelector(".input-field");
formGallery.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    list.innerHTML = "";
    loaderElement.classList.remove(".hidden")
    const names = event.target.elements.designation.value.trim();
    objGallery(names)
        .then(data => {
            if (data.totalHits === 0 ||names === '') {
                loaderElement.classList.add(".hidden");
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'bottomCenter'

                });
            } else {
                  loaderElement.classList.add(".hidden");
                createMarkup(data);  
            }
        });
    event.target.reset();
}