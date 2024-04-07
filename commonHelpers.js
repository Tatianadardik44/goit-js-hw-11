import{S as m,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api/",s="43257905-28a3b58ba6106b31a5e4f67d7",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>alert(t))}const l=document.querySelector(".gallery-nav");function h(o){const r=o.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:c,comments:u,downloads:d})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${i}"
        alt="${t}"/>
        <div class="image-information">
        <p>Likes: ${a}</p>
        <p>Views: ${c}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${d}</p>
        </div>
        
        </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const n=document.querySelector(".loader"),g=document.querySelector(".input-field");g.addEventListener("submit",y);function y(o){o.preventDefault(),l.innerHTML="",n.classList.remove(".hidden");const r=o.target.elements.designation.value.trim();p(r).then(s=>{r===""?(n.classList.add(".hidden"),f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})):(n.classList.add(".hidden"),h(s))}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
