const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const btnHamburger = document.querySelector(".header__toggle");
const btnMenu = document.querySelector(".header__menu");
const slides = document.querySelector(".header__slides");
const previousBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

btnHamburger.addEventListener("click", ()=>{
    btnHamburger.classList.toggle("open");
    btnMenu.classList.toggle("open");
    body.classList.toggle("open");
    overlay.classList.toggle("open");
})

let count = 0;

previousBtn.addEventListener('click', ()=>{
    count--;
    console.log(count);
    if (count < 0) {
        count = 2;
    }
    navigateSlides();
})

nextBtn.addEventListener('click', ()=>{
    count++;
    console.log(count);
    if (count > 2) {
        count = 0;
    }
    navigateSlides();
})

function navigateSlides() {
    if (count <= 2) {
        slides.style.marginLeft = (count * -100)+ "%";
    } else if (count <= 0) {
        count = 0;
        slides.style.marginLeft = "";
    }
}
