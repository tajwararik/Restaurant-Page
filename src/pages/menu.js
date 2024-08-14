import firstImg from "../../images/firstImage.jpg";
import secondImg from "../../images/secondImage.jpeg";
import thirdImg from "../../images/thirdImage.jpg";
import fourthImg from "../../images/fourthImage.jpg";

export const loadMenuPage = () => {
  const content = document.querySelector("#content");
  
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  heading.style.textAlign = "center";

  const firstItem = document.createElement("div");
  const firstSubHeading = document.createElement("h3");
  firstSubHeading.textContent = "Grilled Salmon with Saffron Cream Sauce";
  firstSubHeading.style.textAlign = "center";

  const firstImage = document.createElement("img");
  firstImage.src = firstImg;
  firstImage.style.width = "300px";
  firstImage.style.height = "300px";
  firstImage.style.display = "block";
  firstImage.style.marginLeft = "auto";
  firstImage.style.marginRight = "auto";

  const firstPara = document.createElement("p");
  firstPara.textContent =
    "Freshly grilled salmon fillet topped with a rich saffron cream sauce, served with roasted asparagus and wild rice.";
  firstPara.style.textAlign = "center";

  const secondItem = document.createElement("div");
  const secondSubHeading = document.createElement("h3");
  secondSubHeading.textContent = "Herb-Crusted Rack of Lamb";
  secondSubHeading.style.textAlign = "center";

  const secondImage = document.createElement("img");
  secondImage.src = secondImg;
  secondImage.style.width = "300px";
  secondImage.style.height = "300px";
  secondImage.style.display = "block";
  secondImage.style.marginLeft = "auto";
  secondImage.style.marginRight = "auto";

  const secondPara = document.createElement("p");
  secondPara.textContent =
    "Juicy rack of lamb coated in a blend of herbs and spices, served with a garlic mashed potato and a side of sautéed green beans.";
  secondPara.style.textAlign = "center";

  const thirdItem = document.createElement("div");
  const thirdSubHeading = document.createElement("h3");
  thirdSubHeading.textContent = "Vegetarian Saffron Paella";
  thirdSubHeading.style.textAlign = "center";

  const thirdImage = document.createElement("img");
  thirdImage.src = thirdImg;
  thirdImage.style.width = "300px";
  thirdImage.style.height = "300px";
  thirdImage.style.display = "block";
  thirdImage.style.marginLeft = "auto";
  thirdImage.style.marginRight = "auto";

  const thirdPara = document.createElement("p");
  thirdPara.textContent =
    "Freshly grilled salmon fillet topped with a rich saffron cream sauce, served with roasted asparagus and wild rice.";
  thirdPara.style.textAlign = "center";

  const fourthItem = document.createElement("div");
  const fourthSubHeading = document.createElement("h3");
  fourthSubHeading.textContent = "Filet Mignon with Truffle Butter";
  fourthSubHeading.style.textAlign = "center";

  const fourthImage = document.createElement("img");
  fourthImage.src = fourthImg;
  fourthImage.style.width = "300px";
  fourthImage.style.height = "300px";
  fourthImage.style.display = "block";
  fourthImage.style.marginLeft = "auto";
  fourthImage.style.marginRight = "auto";

  const fourthPara = document.createElement("p");
  fourthPara.textContent =
    "Freshly grilled salmon fillet topped with a rich saffron cream sauce, served with roasted asparagus and wild rice.";
  fourthPara.style.textAlign = "center";

  firstItem.append(firstSubHeading);
  firstItem.append(firstImage);
  firstItem.append(firstPara);

  secondItem.append(secondSubHeading);
  secondItem.append(secondImage);
  secondItem.append(secondPara);

  thirdItem.append(thirdSubHeading);
  thirdItem.append(thirdImage);
  thirdItem.append(thirdPara);

  fourthItem.append(fourthSubHeading);
  fourthItem.append(fourthImage);
  fourthItem.append(fourthPara);

  content.append(heading);
  content.append(firstItem);
  content.append(secondItem);
  content.append(thirdItem);
  content.append(fourthItem);
};
