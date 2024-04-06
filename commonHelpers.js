import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api",i="43257905-28a3b58ba6106b31a5e4f67d7",s=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>alert(t))}const n=document.querySelector(".gallery-nav");function d(o){const r=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:l,comments:c,downloads:u})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${s}"
        alt="${t}"
        <div class="image-information">
        <p>Likes: ${a}</p>
        <p>Views: ${l}</p>
        <p>Comments: ${c}</p>
        <p>Downloads: ${u}</p>

        </div>
        </a>
        </li>`).join("");n.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector(".input-field");h.addEventListener("submit",g);function g(o){o.preventDefault(),n.innerHTML="";const r=o.target.elements.designation.value.trim();p(r).then(i=>{r===""?m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):d(i.hits)}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
