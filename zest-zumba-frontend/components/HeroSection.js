import React from "react";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Background Overlay for color tinting */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          FEEL THE <span className="highlight">RHYTHM</span>
        </h1>
        <p className="hero-subtitle">
          Dance. Sweat. Repeat. Join the most energetic Zumba community in town!
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Book Your Spot
          </a>
          <a href="#packages" className="btn-secondary">
            View Packages
          </a>
        </div>
      </div>

      {/* Decorative floating elements for "Modern" vibe */}
      <div className="shape circle-1"></div>
      <div className="shape circle-2"></div>
    </section>
  );
}
