export const loadHomePage = () => {
  const content = document.querySelector("#content");

  // Container for all the elements of home page
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  // div for creating the heading
  const heading = document.createElement("div");
  heading.innerHTML = `<h1>Welcome to <em>The Saffron Spoon</em></h1>`;

  // div for creating the para
  const para = document.createElement("div");
  para.innerHTML = `<p>At <em>The Saffron Spoon</em>, we bring you an exquisite blend of flavors from around the world, crafted with passion and served with love. Come and indulge in a dining experience like no other.</p>`;

  homeContainer.append(heading);
  homeContainer.append(para);

  // Appending the container to the div#content
  content.append(homeContainer);
};
