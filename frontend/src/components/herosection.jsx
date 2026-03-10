import React from "react";
import "../styles/herosection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span>EcoSwap</span></h1>
        <p>
          Join EcoSwap and make a difference — where users and organizations
          collaborate to reduce waste, share resources, and build a sustainable
          community together.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img src="https://kasakata.co.id/wp-content/uploads/2022/03/eco-green-thumbnail-kasakata.jpg" alt="EcoSwap Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
