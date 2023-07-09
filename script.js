let body = document.querySelector("body");
var overlay = document.getElementById("overlay");
var mobileMenu = document.getElementById("mobile-menu");
var btnHamburger = document.getElementById("btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("Button clicked");

  btnHamburger.classList.toggle("open");

  mobileMenu.classList.toggle("active");
  
  overlay.classList.toggle("show");
  
  body.classList.toggle("no-scroll");

});
