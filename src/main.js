import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { objGallery } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { list } from "./js/render-functions";

const formGallery = document.querySelector(".input-field");
formGallery.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    list.innerHTML = "";
    const names = event.target.elements.designation.value.trim();
    objGallery(names)
        .then(data => {
            if (names === '') {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'topRight'

                });
            } else {
                list.insertAdjacentHTML("beforeend", createMarkup(data.hits));  
            }
        });
    event.target.reset();
}