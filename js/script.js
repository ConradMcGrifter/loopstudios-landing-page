const mobileNavButton = document.getElementById("hamburger-btn");
const navUlWrap = document.querySelector(".nav-ul--wrap");
const navUl = document.querySelector(".nav__ul");
const BODY = document.querySelector("body");

mobileNavButton.addEventListener("click", () => {
    navUlWrap.classList.toggle("active");
    navUl.classList.toggle("active");
    BODY.classList.toggle("display");
});
