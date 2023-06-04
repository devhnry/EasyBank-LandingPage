const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const openNav = () => {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  overlay.classList.remove("hidden");
  overlay.classList.remove("fadeout");
  overlay.classList.add("fadein");
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("scaleUp");
  mobileNav.classList.remove("scaleDown");
  body.style.overflowY = "hidden";
};

const closeNav = () => {
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
  mobileNav.classList.remove("scaleUp");
  mobileNav.classList.add("scaleDown");
  overlay.classList.remove("fadein");
  overlay.classList.add("fadeout");
  setTimeout(() => {
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 400);
  body.style.overflowY = "visible";
};

const resetNav = () => {
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("scaleUp");
  mobileNav.classList.remove("scaleDown");
  overlay.classList.add("hidden");
  overlay.classList.remove("fadein");
  overlay.classList.remove("fadeout");
};

const handleWindowResize = () => {
  if (window.innerWidth > 768) {
    resetNav();
  }
};

menuOpen.addEventListener("click", openNav);
menuClose.addEventListener("click", closeNav);
window.addEventListener("resize", handleWindowResize);
