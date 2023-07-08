const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("Button clicked");

  btnHamburger.classList.toggle("open");

  mobileMenu.classList.toggle("active");

  overlay.classList.toggle("active");

  body.classList.toggle("no-scroll");
});
