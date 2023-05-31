import "/output.css";

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

const openNav = function () {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.remove("hidden");
  }, 500);
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("scaleUp");
  mobileNav.classList.remove("scaleDown");
  overlay.classList.add("fadein");
  overlay.classList.remove("fadeout");
  document.querySelector("body").style.overflowY = "hidden";
};

const closeNav = function () {
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
  mobileNav.classList.remove("scaleUp");
  mobileNav.classList.add("scaleDown");
  overlay.classList.remove("fadein");
  overlay.classList.add("fadeout");
  setTimeout(() => {
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 500);
  document.querySelector("body").style.overflowY = "visible";
};

menuOpen.addEventListener("click", openNav);
menuClose.addEventListener("click", closeNav);

window.addEventListener("resize", () => {
  if (window.innerWidth > 768){
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
      mobileNav.classList.add("scaleUp");
      mobileNav.classList.remove("scaleDown");
      mobileNav.classList.add("hidden");
      overlay.classList.add("hidden");
      overlay.classList.add("fadein")
      overlay.classList.remove("fadeout");
  }
})
