import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Riya Sharma",
      role: "Zumba Member",
      feedback:
        "The energy here is unmatched! I’ve lost 5kgs in 2 months just by dancing. Best decision ever!",
      image: "/testimonials/test1.png",
    },
    {
      id: 2,
      name: "Megha Ghosh",
      role: "Fitness Enthusiast",
      feedback:
        "Professional trainers who focus on every beat and move. It feels less like a workout and more like a party!",
      image: "/testimonials/test2.png",
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      role: "IT Professional",
      feedback:
        "Great stress buster after a long day at work. The community is super supportive.",
      image: "/testimonials/test3.png",
    },
    {
      id: 4,
      name: "Sneha Patil",
      role: "Dancer",
      feedback:
        "I love the choreography! It's modern, energetic, and beginner-friendly too.",
      image: "/testimonials/test1.png",
    },
    {
      id: 5,
      name: "Priya Das",
      role: "Homemaker",
      feedback:
        "Finally found a gym where I don't feel judged. Love the vibes!",
      image: "/testimonials/test2.png",
    },
  ];

  return (
    <section className="zt-section" id="testimonials">
      <div className="zt-container">
        {/* --- Header & Trust Badge --- */}
        <div className="zt-header-wrapper">
          <span className="zt-tagline">Happy Members</span>
          <h2 className="zt-title">
            What Our Family <span className="zt-highlight">Says</span>
          </h2>

          {/* New Extra Info: Trust Badge */}
          <div className="zt-trust-badge">
            <div className="zt-stars">⭐⭐⭐⭐⭐</div>
            <p className="zt-trust-text">
              Rated <strong>4.9/5</strong> based on 500+ Reviews
            </p>
          </div>
        </div>

        {/* --- Marquee Scrolling Area --- */}
        <div className="zt-marquee-wrapper">
          {/* Gradient Overlay for Fade Effect */}
          <div className="zt-fade zt-fade-left"></div>
          <div className="zt-fade zt-fade-right"></div>

          <div className="zt-marquee-track">
            {/* Render list 3 times for smooth infinite loop */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (t, idx) => (
                <div key={idx} className="zt-card">
                  <div className="zt-quote-icon">❝</div>
                  <p className="zt-feedback">"{t.feedback}"</p>

                  <div className="zt-profile">
                    <img src={t.image} alt={t.name} className="zt-avatar" />
                    <div className="zt-info">
                      <h4 className="zt-name">{t.name}</h4>
                      <span className="zt-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* --- Bottom CTA (Extra Info) --- */}
        <div className="zt-bottom-cta">
          <p>Join the happiest fitness community in town!</p>
          <a href="#contact" className="zt-link">
            Read More Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
