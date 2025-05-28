import React from "react";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <form id="contact-form">
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <textarea id="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;