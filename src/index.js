import { loadHomePage } from "./pages/home.js";
import { loadMenuPage } from "./pages/menu.js";
import { loadAboutPage } from "./pages/about.js";
import "./styles.css";

const content = document.querySelector("#content");

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

loadHomePage();

menu.addEventListener("click", () => {
  content.textContent = "";
  loadMenuPage();
});

about.addEventListener("click", () => {
  content.textContent = "";
  loadAboutPage();
});

home.addEventListener("click", () => {
  content.textContent = "";
  loadHomePage();
});
