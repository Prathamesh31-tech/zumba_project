import React, { useState, useEffect } from "react";

// --- Helper Component: Counter Animation ---
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end.replace(/\D/g, ""));
    const incrementTime = (duration / endValue) * 1.5;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {end.includes("+") ? "+" : ""}
    </span>
  );
};

export default function Achievements() {
  const stats = [
    {
      id: 1,
      number: "300+",
      label: "Happy Clients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: 2,
      number: "1500+",
      label: "Classes Conducted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6.5 6.5 11 11"></path>
          <path d="m21 21-1-1"></path>
          <path d="m3 3 1 1"></path>
          <path d="m18 22 4-4"></path>
          <path d="m2 6 4-4"></path>
          <path d="m3 10 7-7"></path>
          <path d="m14 21 7-7"></path>
        </svg>
      ),
    },
    {
      id: 3,
      number: "15+",
      label: "Certified Trainers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
    },
  ];

  // New Features Data
  const features = [
    "Personalized Diet Plans",
    "Ladies Special Batches",
    "Weekend Power Yoga",
    "Monthly BMI Analysis",
  ];

  return (
    <section className="za-section" id="achievements">
      {/* Background Decorative Shapes */}
      <div className="za-shape za-shape-1"></div>
      <div className="za-shape za-shape-2"></div>

      <div className="za-container">
        {/* Header */}
        <div className="za-header">
          <span className="za-tagline">Achievements</span>
          <h2 className="za-title">
            Making an <span className="za-highlight">Impact</span>
          </h2>
          <p className="za-subtitle">
            Numbers that speak for our dedication, passion, and the energy we
            bring to every session.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="za-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="za-card">
              <div className="za-icon-box">{stat.icon}</div>
              <h3 className="za-number">
                <Counter end={stat.number} />
              </h3>
              <p className="za-label">{stat.label}</p>
              <div className="za-card-decoration"></div>
            </div>
          ))}
        </div>

        {/* --- NEW SECTION: Features & Action Strip --- */}
        <div className="za-bottom-strip">
          <div className="za-bs-content">
            <h3 className="za-bs-title">Why we are growing?</h3>
            <div className="za-features-list">
              {features.map((feat, i) => (
                <div key={i} className="za-feature-item">
                  <span className="za-check">✔</span> {feat}
                </div>
              ))}
            </div>
          </div>

          <div className="za-bs-action">
            <p>Ready to be part of the success story?</p>
            <button className="za-cta-btn">
              Join The Family <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
