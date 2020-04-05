import { bro } from "./bro";
import "../styles/main.scss";

console.log(bro("dude"));

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav-mobile");

hamburger.addEventListener("click", e => {
  hamburger.classList.toggle("hamburger--isActive");
  nav.classList.toggle("header__nav-mobile--isActive");
});
