"use strict";var body=document.querySelector("body"),overlay=document.querySelector(".overlay"),btnHamburger=document.querySelector(".header__toggle"),btnMenu=document.querySelector(".header__menu"),slides=document.querySelector(".header__slides"),previousBtn=document.querySelector(".arrow-left"),nextBtn=document.querySelector(".arrow-right");btnHamburger.addEventListener("click",(function(){btnHamburger.classList.toggle("open"),btnMenu.classList.toggle("open"),body.classList.toggle("open"),overlay.classList.toggle("open");var e=btnHamburger.ariaExpanded;e="true"==e?"false":"true",btnHamburger.ariaExpanded=e}));var count=0;function navigateSlides(){count<=2?slides.style.marginLeft=-100*count+"%":count<=0&&(count=0,slides.style.marginLeft="")}previousBtn.addEventListener("click",(function(){count--,console.log(count),count<0&&(count=2),navigateSlides()})),nextBtn.addEventListener("click",(function(){count++,console.log(count),count>2&&(count=0),navigateSlides()}));
//# sourceMappingURL=script.js.map