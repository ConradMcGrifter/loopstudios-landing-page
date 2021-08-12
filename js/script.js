const mobileNavButton = document.getElementById("hamburger-btn");
const navUlWrap = document.querySelector(".nav-ul--wrap");
const navUl = document.querySelector(".nav__ul");
const BODY = document.querySelector("body");
const closeImage = document.getElementById("x-img");
const hamburgerImage = document.getElementById("hamburger-img");

mobileNavButton.addEventListener("click", () => {
    hamburgerImage.classList.toggle("display");
    closeImage.classList.toggle("display");
    navUlWrap.classList.toggle("active");
    navUl.classList.toggle("active");
    BODY.classList.toggle("display");
});
