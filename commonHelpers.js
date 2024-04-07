import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api/",s="43257905-28a3b58ba6106b31a5e4f67d7",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>alert(t))}const c=document.querySelector(".gallery-nav");function h(o){const r=o.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:m})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${i}"
        alt="${t}"/>
        <div class="image-information">
        <p>Likes: ${n}</p>
        <p>Views: ${u}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${m}</p>
        </div>
        
        </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".loader"),g=document.querySelector(".input-field");g.addEventListener("submit",y);function y(o){o.preventDefault(),c.innerHTML="",a.classList.remove(".hidden");const r=o.target.elements.designation.value.trim();p(r).then(s=>{s.totalHits===0||r===""?(a.classList.add(".hidden"),l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"})):(a.classList.add(".hidden"),l.success({iconColor:"yellow",message:"Enjoy watching!",position:"topRight",backgroundColor:"blue",messageColor:"yellow"}),h(s))}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
