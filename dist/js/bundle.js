!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7)},function(e,t,n){},function(e,t){new Swiper(".brand-swiper",{cssMode:"true",pagination:{el:".brand-pagination",clickable:!0},breakpoints:{320:{enabled:!0,slidesPerView:1.15,spaceBetween:16},768:{enabled:!1,slidesPerView:"auto",spaceBetween:"auto"}}}),new Swiper(".repair-swiper",{cssMode:"true",pagination:{el:".pagination-repair",clickable:!0},breakpoints:{320:{enabled:!0,slidesPerView:1.15,spaceBetween:16},768:{enabled:!1,slidesPerView:"auto",spaceBetween:"auto"}}}),new Swiper(".price-swiper",{cssMode:"true",pagination:{el:".pagination-price",clickable:!0},breakpoints:{320:{enabled:!0,slidesPerView:1.15,spaceBetween:16},768:{enabled:!1,slidesPerView:"auto",spaceBetween:"auto"}}})},function(e,t){var n=document.querySelector(".toggle-button"),o=document.querySelector(".brand-wrapper"),c=document.querySelector(".toogle-button--name"),s=document.querySelector(".toogle-button--icon"),r=document.querySelector(".button-repair"),i=document.querySelector(".repair-wrapper"),l=document.querySelector(".button-repair--name"),a=document.querySelector(".button-repair--icon"),u=document.querySelector(".main-next"),d=document.querySelector(".main-wrapper-descrition"),p=document.querySelector(".button-text"),m=document.querySelector(".button-icon");n.addEventListener("click",(function(){o.classList.toggle("open"),o.classList.contains("open")?(c.textContent="Скрыть",s.classList.toggle("flipped")):(c.textContent="Показать все",s.classList.toggle("flipped"))})),r.addEventListener("click",(function(){i.classList.toggle("open"),i.classList.contains("open")?(l.textContent="Скрыть",a.classList.toggle("flipped")):(l.textContent="Показать все",a.classList.toggle("flipped"))})),u.addEventListener("click",(function(){d.classList.toggle("open"),d.classList.contains("open")?(p.textContent="Скрыть",m.classList.toggle("flipped")):(p.textContent="Читать далее",m.classList.toggle("flipped"))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header-button--burger"),t=document.querySelector(".sidebar"),n=document.querySelector(".page-main"),o=document.querySelector(".overlay"),c=document.querySelector(".menu-button--burger");function s(){t.classList.remove("open"),n.classList.remove("open"),o.classList.remove("open")}e.addEventListener("click",(function(){t.classList.toggle("open"),n.classList.toggle("open"),o.classList.toggle("open")})),o.addEventListener("click",s),document.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Esc"!==e.key||s()})),c.addEventListener("click",(function(){t.classList.remove("open"),n.classList.remove("open"),o.classList.remove("open")}))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-button--chat"),t=document.querySelector(".header-button--chat"),n=document.querySelector(".feedBack"),o=document.querySelector(".page-main"),c=document.querySelector(".overlay"),s=document.querySelector(".feedBack__button"),r=document.querySelector(".sidebar");function i(){n.classList.remove("open"),o.classList.remove("open"),c.classList.remove("open")}e.addEventListener("click",(function(){n.classList.toggle("open"),o.classList.toggle("open"),r.classList.remove("open"),c.classList.remove("open"),c.classList.toggle("open")})),t.addEventListener("click",(function(){n.classList.toggle("open"),o.classList.toggle("open"),c.classList.toggle("open")})),c.addEventListener("click",i),document.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Esc"!==e.key||i()})),s.addEventListener("click",(function(){n.classList.remove("open"),o.classList.remove("open"),c.classList.remove("open")}))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-button--call"),t=document.querySelector(".header-button--phone"),n=document.querySelector(".modalCall"),o=document.querySelector(".page-main"),c=document.querySelector(".overlay"),s=document.querySelector(".modalCall__button"),r=document.querySelector(".sidebar");function i(){n.classList.remove("open"),o.classList.remove("open"),c.classList.remove("open")}e.addEventListener("click",(function(){n.classList.toggle("open"),o.classList.toggle("open"),r.classList.remove("open"),c.classList.remove("open"),c.classList.toggle("open")})),t.addEventListener("click",(function(){n.classList.toggle("open"),o.classList.toggle("open"),c.classList.toggle("open")})),c.addEventListener("click",i),document.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Esc"!==e.key||i()})),s.addEventListener("click",(function(){n.classList.remove("open"),o.classList.remove("open"),c.classList.remove("open")}))}))}]);
//# sourceMappingURL=bundle.js.map