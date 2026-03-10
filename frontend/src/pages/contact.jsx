import React, { useState } from "react";
import "../styles/contact.css";
import Navbar from "../components/navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="contact-form-box">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Send us your feedback or questions.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
