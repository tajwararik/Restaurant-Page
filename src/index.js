import { loadHomePage } from "./pages/home.js";
import { loadMenuPage } from "./pages/menu.js";
import { loadAboutPage } from "./pages/about.js";
import { loadContactPage } from "./pages/contact.js";
import "./styles.css";

const content = document.querySelector("#content");

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

loadHomePage();

menu.addEventListener("click", () => {
  content.textContent = "";
  loadMenuPage();
});

about.addEventListener("click", () => {
  content.textContent = "";
  loadAboutPage();
});

contact.addEventListener("click", () => {
  content.textContent = "";
  loadContactPage();
});

home.addEventListener("click", () => {
  content.textContent = "";
  loadHomePage();
});
