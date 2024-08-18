export function loadContactPage() {
  const content = document.querySelector("#content");

  // Container for all the elements of contact page
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  // div for creating the heading
  const heading = document.createElement("div");
  heading.innerHTML = `<h1>Contact Us</h1>`;

  // div for creating the para
  const para = document.createElement("div");
  para.innerHTML = `<p>We’d love to hear from you! Whether you have a question, want to make a reservation, or just want to share your experience at <em><strong>The Saffron Spoon,</strong></em> we’re here to help.</p>`;

  // div for creating the address and all other information
  const address = document.createElement("div");
  address.innerHTML = `<address>
  <h4>Location:</h4>
  <p>456 Gourmet Street,<br>
Flavor Town, FT 12345</p>

<h4>Phone:</h4>
  <p><a href="tel:1123456-7890">+1 (123) 456-7890</a></p>

  <h4>Email:</h4>
  <p><a href="mailto:contact@thesaffronspoon.fake">contact@thesaffronspoon.fake</a></p>

  <h4>Hours of Operation:</h4>
  <p>Monday to Thursday: 11:00 AM - 10:00 PM<br>
    Friday to Saturday: 11:00 AM - 11:00 PM<br>
    Sunday: 12:00 PM - 9:00 PM</p>

<h4>Follow Us on Social Media:</h4>
<p>Stay connected with us for the latest updates, special offers, and a peek behind the scenes.</p>
<p><a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a></p>

<h4>Reservations:</h4>
<p>For reservations, please call us or use our online booking system. We recommend booking in advance, especially for weekends and special occasions.</p>
<p>We look forward to welcoming you to <em><strong>The Saffron Spoon!</strong></em></p>
</address>`;

  contactContainer.append(heading);
  contactContainer.append(para);
  contactContainer.append(address);

  // Appending the container to the div#content
  content.append(contactContainer);
}
