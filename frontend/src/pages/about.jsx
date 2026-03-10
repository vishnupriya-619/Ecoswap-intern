import React from "react";
import { Leaf, Recycle, Users } from "lucide-react";
import "../styles/about.css";
import Navbar from "../components/navbar";

function About() {
  return (
    <>
    <Navbar/>
    <section className="about-page">
      {/* Top Banner */}
      <div className="about-hero">
        <h1>About <span>EcoSwap</span></h1>
        <p>Together, we grow greener — one swap at a time.</p>
      </div>

      {/* Intro Section */}
      <div className="about-intro">
        <p>
          <strong>EcoSwap</strong> is a sustainable platform that connects individuals and
          organizations to promote resource sharing, recycling, and eco-friendly
          practices. Our mission is to reduce waste and encourage communities to
          collaborate for a cleaner, greener planet.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="about-mission-vision">
        <div className="about-card">
          <Leaf className="about-icon" />
          <h2>Our Mission</h2>
          <p>
            To empower people and organizations to minimize waste through
            resource sharing, promoting a culture of sustainability and
            responsibility.
          </p>
        </div>

        <div className="about-card">
          <Recycle className="about-icon" />
          <h2>Our Vision</h2>
          <p>
            To build a global network where sustainable living becomes a way of
            life — making reuse and recycling easy, accessible, and rewarding.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="about-how">
        <h2>How EcoSwap Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <Users className="how-icon" />
            <h3>Connect</h3>
            <p>Join our growing community of users and organizations.</p>
          </div>
          <div className="how-step">
            <Recycle className="how-icon" />
            <h3>Exchange</h3>
            <p>Share or swap reusable items and reduce landfill waste.</p>
          </div>
          <div className="how-step">
            <Leaf className="how-icon" />
            <h3>Impact</h3>
            <p>Together, we create measurable change for our planet.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
