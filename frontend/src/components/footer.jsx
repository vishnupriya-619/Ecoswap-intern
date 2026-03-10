import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1️⃣ Logo + Description */}
        <div className="footer-section">
          <h2 className="footer-logo">EcoSwap</h2>
          <p>
            Building a sustainable future through resource sharing and community collaboration.
          </p>
        </div>

       

        {/* 3️⃣ Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><Mail className="icon" /> ecoswap@gmail.com</p>
          <p><Phone className="icon" /> +91 98765 43210</p>
        </div>

        {/* 4️⃣ Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoSwap. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
