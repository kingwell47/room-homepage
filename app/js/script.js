const btnHamburger = document.querySelector(".header__toggle");
const btnMenu = document.querySelector(".header__menu");

btnHamburger.addEventListener("click", ()=>{
    btnHamburger.classList.toggle("open");
    btnMenu.classList.toggle("open");
})