import { bro } from "./bro";
import "../styles/main.scss";

console.log(bro("dude"));

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav-mobile");

hamburger.addEventListener("click", e => {
  hamburger.classList.toggle("hamburger--isActive");
  nav.classList.toggle("header__nav-mobile--isActive");
});

window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("preload");
});

const anime = document.querySelectorAll(".anime");

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add("animated", "fadeInDown");
    }
  });
});

anime.forEach(item => {
  observer.observe(item);
});
