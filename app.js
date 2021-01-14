let menuLinks = document.querySelector(".menu-links ul");
let bgDark = document.querySelector(".bg-dark");
let hamberger = document.querySelectorAll(".hamburger");

function myFunction(x) {
    x.classList.toggle("change");
    bgDark.classList.toggle("active");
    menuLinks.classList.toggle("active");
}
