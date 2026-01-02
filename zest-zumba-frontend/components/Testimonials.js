import React from "react";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      feedback: "Amazing Zumba classes! Trainers are supportive.",
      image: "/testimonials/test1.png",
      role: "Member",
    },
    {
      name: "Megha Ghosh",
      feedback: "Great energy, fun workouts, highly recommend!",
      image: "/testimonials/test2.png",
      role: "Lover",
    },
    {
      name: "Amit Deshmukh",
      feedback: "I lost weight and enjoyed every session!",
      image: "/testimonials/test3.png",
      role: "Enthusiast",
    },
    // Add more dummy data to test the scroll if needed
    {
      name: "Soham Patil",
      feedback: "Best gym experience ever. Totally worth it.",
      image: "/testimonials/test1.png",
      role: "Member",
    },
    {
      name: "Priya Das",
      feedback: "Music and moves are just perfect!",
      image: "/testimonials/test2.png",
      role: "Dancer",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container header-container">
        <h2>Happy Members</h2>
        <p className="section-subtitle">Join 100+ happy faces! 💖</p>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* We render the list twice to create a seamless infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="compact-card">
              <div className="card-header">
                <img src={t.image} alt={t.name} className="card-avatar" />
                <div>
                  <h4 className="card-name">{t.name}</h4>
                  <span className="card-role">{t.role}</span>
                </div>
              </div>
              <p className="card-feedback">"{t.feedback}"</p>
              <div className="card-rating">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
