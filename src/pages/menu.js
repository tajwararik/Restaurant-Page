import firstImg from "../../images/firstImage.jpg";
import secondImg from "../../images/secondImage.jpeg";
import thirdImg from "../../images/thirdImage.jpg";
import fourthImg from "../../images/fourthImage.jpg";

export const loadMenuPage = () => {
  const content = document.querySelector("#content");

  // Container for all the elements of menu page
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // div for creating the heading
  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Menu</h1>";

  // div for creating the first item
  const firstItem = document.createElement("div");
  firstItem.innerHTML = `<h3>1. Grilled Salmon with Saffron Cream Sauce</h3>
  <img src="${firstImg}">
  <p>Freshly grilled salmon fillet topped with a rich saffron cream sauce, served with roasted asparagus and wild rice.</p>`;

  // div for creating the second item
  const secondItem = document.createElement("div");
  secondItem.innerHTML = `<h3>2. Herb-Crusted Rack of Lamb</h3>
  <img src="${secondImg}">
  <p>Juicy rack of lamb coated in a blend of herbs and spices, served with a garlic mashed potato and a side of sautéed green beans.</p>`;

  // div for creating the third item
  const thirdItem = document.createElement("div");
  thirdItem.innerHTML = `<h3>3. Vegetarian Saffron Paella</h3>
  <img src="${thirdImg}">
  <p>Saffron-infused rice cooked with artichokes, bell peppers, peas, and green beans, garnished with fresh parsley and a wedge of lemon.</p>`;

  // div for creating the fourth item
  const fourthItem = document.createElement("div");
  fourthItem.innerHTML = `<h3>4. Filet Mignon with Truffle Butter</h3>
  <img src="${fourthImg}">
  <p>A tender, juicy filet mignon topped with luxurious truffle butter, served with garlic mashed potatoes and sautéed green beans.</p>`;

  menuContainer.append(heading);
  menuContainer.append(firstItem);
  menuContainer.append(secondItem);
  menuContainer.append(thirdItem);
  menuContainer.append(fourthItem);

  // Appending the container to the div#content
  content.append(menuContainer);
};
