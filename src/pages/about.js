export const loadAboutPage = () => {
  const content = document.querySelector("#content");
  
  const heading = document.createElement("h1");
  heading.textContent = "About";
  heading.style.textAlign = "center";

  const para = document.createElement("p");
  para.innerHTML = `At <b><i>The Saffron Spoon</i></b>, we blend tradition with innovation to create unforgettable dining experiences. Our menu showcases the finest ingredients, with a special focus on saffron-infused dishes that highlight global flavors. Whether you're here for a quick bite or a special occasion, we promise warm hospitality and delicious food that will keep you coming back. Join us and savor the unique taste of The Saffron Spoon.`;
  para.style.textAlign = "center";
  para.style.fontSize = "18px";

  content.append(heading);
  content.append(para);
};
