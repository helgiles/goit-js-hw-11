import{S as u,i as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m=document.querySelector(".search-form"),i=document.querySelector('[type="text"]'),l=document.querySelector(".loader"),c=document.querySelector(".gallery");var p=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const y=n=>`<li class='gallery-item'>
  <a class='gallery-link' href='${n.largeImageURL}'>
    <img
      class='gallery-image'
      src='${n.webformatURL}'
      alt='${n.tags}'
    />
  </a>
  <div class="image-info">
        <div class="info-item">
          <span class="info-name">Likes</span>
          <span class="info-value">${n.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Views</span>
          <span class="info-value">${n.views}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Comments</span>
          <span class="info-value">${n.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Downloads</span>
          <span class="info-value">${n.downloads}</span>
        </div>
      </div>
</li>`;m.addEventListener("submit",n=>{n.preventDefault();const s=i.value.trim();c.innerHTML="",i.value="",l.style.display="block";const a=new URLSearchParams({key:"41579263-ea77ea2d4a90e42f3f0b59371",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${d}?${a}`).then(o=>{if(l.style.display="none",!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040"});return}const e=o.hits.reduce((t,r)=>t+y(r),"");c.innerHTML=e,p.refresh()}).catch(o=>{showAlert(o.toString())})});
//# sourceMappingURL=commonHelpers.js.map
