import React from "react";

export default function Achievements() {
  const stats = [
    { number: "300+", label: "Happy Clients", icon: "💃" },
    { number: "1500+", label: "Classes Conducted", icon: "🏋️‍♀️" },
    { number: "15+", label: "Certified Trainers", icon: "🎵" },
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones that define our journey</p>
        </div>

        <div className="achievements-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="achievement-card">
              <div className="card-content">
                <div className="icon-wrapper">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
