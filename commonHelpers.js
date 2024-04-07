import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(o){const r="https://pixabay.com/api",i="43257905-28a3b58ba6106b31a5e4f67d7",s=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>alert(t))}const a=document.querySelector(".gallery-nav");function f(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:c})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${i}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${s}"
        <div class="image-information">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${c}</p>

        </div>
        </a>
        </li>`).join("")}const m=document.querySelector(".input-field");m.addEventListener("submit",d);function d(o){o.preventDefault(),a.innerHTML="";const r=o.target.elements.designation.value.trim();u(r).then(i=>{r===""?l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):a.insertAdjacentHTML("beforeend",f(i.hits))}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
