// show/hide nav menu

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".nav__menu");

const overlay = document.querySelector(".overlay");

openMenu.addEventListener('click', () => {
    mobileMenu.style.display = "block";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
    overlay.style.display = "block";
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    overlay.style.display = "none";

});