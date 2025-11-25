import{a as d,S as g,i as c}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="53389893-16eb2ee6e433eb21b924fd0ec",y="https://pixabay.com/api/";function b(i){const o={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),r})}const p=document.querySelector(".gallery"),n=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const o=i.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a href="${a}">
         <img src="${r}" alt="${e.split(",").slice(0,3).join(", ")}" />


        </a>
         <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",o),L.refresh()}function S(){p.innerHTML=""}function w(){n==null||n.classList.add("is-active")}function u(){n==null||n.classList.remove("is-active")}const l={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]')};l.form.addEventListener("submit",i=>{i.preventDefault();const o=l.input.value.trim();if(!o){c.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}S(),w(),l.input.value="",b(o).then(r=>{if(u(),r.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(r=>{u(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
