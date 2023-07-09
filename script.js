const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("Button clicked");

  btnHamburger.classList.add("open");

  mobileMenu.classList.add("active");

  overlay.classList.add("show");

  body.classList.add("no-scroll");
});
