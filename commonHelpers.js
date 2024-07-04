import{S as a,N as l,K as u,M as d,a as p}from"./assets/vendor-b7a63458.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new a(".reviews-wrapper",{modules:[l,u,d],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const w="https://portfolio-js.b.goit.study/api",f="/reviews",m=`${w}${f}`;let v=1;const c={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};async function y(i){try{const r=await p.get(m,{params:{id:i}});if(r.status!==200)throw new Error(r.status);return r.data}catch(r){throw new Error(`Fetching reviews failed: ${r.message}`)}}const h=async()=>{try{const r=(await y(v)).map(({_id:o,author:s,avatar_url:e,review:t})=>`
  
  <li class="reviews-item swiper-slide" data="${o}">
  <img class="reviews-img" src="${e}" alt="${s}"/>
  
  <p class="reviews-text">${t}</p>
  <h2 class="reviews-subtitle">${s}</h2>

  </li>
  
  `).join("");c.container.insertAdjacentHTML("beforeend",r)}catch{c.container.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>')}};h();
//# sourceMappingURL=commonHelpers.js.map
