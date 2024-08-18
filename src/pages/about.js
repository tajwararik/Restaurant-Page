export const loadAboutPage = () => {
  const content = document.querySelector("#content");

  // Container for all the elements of about page
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  // div for creating the heading
  const heading = document.createElement("div");
  heading.innerHTML = `<h1>About</h1>`;

  // div for creating the paragraph item
  const para = document.createElement("div");
  para.innerHTML = `<p>Welcome to <em><strong>The Saffron Spoon,</strong></em> where culinary artistry meets the rich traditions of global cuisine. Nestled in the heart of the city, our restaurant is a haven for food enthusiasts seeking a dining experience that transcends the ordinary.</p>

  <p>At <em><strong>The Saffron Spoon,</strong></em> we believe that food is not just sustenance, but an expression of culture, creativity, and passion. Our menu is carefully crafted to offer a diverse selection of dishes, each infused with the warmth and depth of saffron—a spice that symbolizes luxury, tradition, and a touch of the exotic.</p>

  <p>Our chefs are dedicated to bringing you the finest ingredients, sourced from local farmers and sustainable producers. Every dish is prepared with meticulous attention to detail, ensuring that each bite is a celebration of flavor and texture. Whether you’re savoring our signature Grilled Salmon with Saffron Cream Sauce or indulging in our Vegetarian Saffron Paella, you’ll find that every meal at <em><strong>The Saffron Spoon</strong></em> is an unforgettable experience.</p>
  
  <p>But it’s not just about the food. At <em><strong>The Saffron Spoon,</strong></em> we strive to create an atmosphere that is warm, welcoming, and elegant. Our décor is inspired by the rich colors and patterns of traditional spice markets, with a modern twist that reflects our commitment to innovation. Whether you’re joining us for a special occasion or a casual evening out, we want you to feel at home.</p>
  
  <p>Thank you for choosing <strong><em>The Saffron Spoon.</strong></em> We look forward to serving you and making your dining experience truly memorable.</p>`;

  aboutContainer.append(heading);
  aboutContainer.append(para);

  // Appending the container to the div#content
  content.append(aboutContainer);
};
