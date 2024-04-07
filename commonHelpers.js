import{i as u}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){const r="https://pixabay.com/api",s="43257905-28a3b58ba6106b31a5e4f67d7",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>alert(t))}const c=document.querySelector(".gallery-nav");function m(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:l})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${s}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${i}"
        <div class="image-information">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${l}</p>

        </div>
        </a>
        </li>`).join("")}const a=document.querySelector(".loader"),f=document.querySelector(".input-field");f.addEventListener("submit",p);function p(o){o.preventDefault(),c.innerHTML="",a.classList.remove(".hidden");const r=o.target.elements.designation.value.trim();d(r).then(s=>{r===""?(a.classList.add(".hidden"),u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})):(a.classList.add(".hidden"),c.insertAdjacentHTML("beforeend",m(s.hits)))}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
