import dishImage from "../../images/dish.jpg";

export const loadHomePage = () => {
  const content = document.querySelector("#content");
  
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to The Saffron Spoon";
  heading.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = dishImage;
  img.style.width = "100%";
  img.style.maxWidth = "90vw";
  img.style.height = "500px";
  img.style.display = "block";
  img.style.marginLeft = "auto";
  img.style.marginRight = "auto";

  const para = document.createElement("p");
  para.textContent =
    "At The Saffron Spoon, we bring you an exquisite blend of flavors from around the world, crafted with passion and served with love. Come and indulge in a dining experience like no other.";
  para.style.textAlign = "center";
  para.style.fontSize = "20px";

  content.append(heading);
  content.append(img);
  content.append(para);
};


