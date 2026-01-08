import React from "react";

export default function About() {
  return (
    <section className="about-section-full" id="about">
      {/* --- NEW ADDITION: Main Section Title --- */}
      <div className="section-header-center">
        <h2 className="about-title">About Us</h2>
      </div>

      <div className="about-container">
        {/* --- LEFT SIDE: Studio Info --- */}
        <div className="about-left">
          <h4 className="sub-heading">Welcome to Zest Studio</h4>
          <h2 className="content-heading">
            More Than Just a <span className="highlight">Workout.</span>
          </h2>

          <p className="about-description">
            At <strong>Zest Zumba Studio</strong>, we believe fitness should be
            a celebration, not a chore. Our classes are designed to bring people
            together through high-energy music and easy-to-follow dance moves.
            Whether you are a beginner taking your first step or a pro dancer,
            our studio vibe is inclusive, supportive, and absolutely electric!
          </p>

          <p className="about-description">
            We focus on <strong>Mental Happiness</strong> along with Physical
            Fitness. Join us to burn calories, relieve stress, and make lifelong
            friends in a judgment-free environment. Let's dance our way to
            fitness!
          </p>

          <div className="features-list">
            <div className="feature-item">✅ Certified Instructors</div>
            <div className="feature-item">✅ 800+ Calories Burn</div>
            <div className="feature-item">✅ Non-Stop Bollywood & Latin</div>
            <div className="feature-item">✅ AC Studio & Premium Sound</div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Trainer, Stats & More --- */}
        <div className="about-right">
          {/* 1. Trainer Card */}
          <div className="trainer-card">
            <div className="trainer-img-holder">
              <img
                src="trainers/H-trainer.png"
                alt="megha"
                className="trainer-img"
              />
            </div>
            <div className="trainer-info">
              <h3>Megha Sardeshmukh</h3>
              <span className="designation">Founder & Head Choreographer</span>
              <p>"Making fitness fun, one beat at a time!"</p>
            </div>
          </div>

          {/* 2. Impact Stats */}
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">5+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">50+</span>
              <span className="stat-label">Events Done</span>
            </div>
          </div>

          {/* 3. Certifications */}
          <div className="cert-section">
            <h4>Certifications & Awards</h4>
            <div className="cert-grid">
              <span className="cert-badge">ZIN™ Certified </span>
              <span className="cert-badge">Strong Nation™</span>
              <span className="cert-badge">Nutri-Coach</span>
            </div>
          </div>

          {/* 4. Specialties */}
          <div className="specialties-section">
            <h4>We Also Offer:</h4>
            <div className="tags-container">
              <span className="tag">Wedding Sangeet</span>
              <span className="tag">Corporate Events</span>
              <span className="tag">Kids Batches</span>
              <span className="tag">Garba Workshops</span>
              <span className="tag">Wedding Sangeet</span>
              <span className="tag">Corporate Events</span>
              <span className="tag">Kids Batches</span>
              <span className="tag">Garba Workshops</span>
              <span className="tag">Wedding Sangeet</span>
              <span className="tag">Corporate Events</span>
              <span className="tag">Kids Batches</span>
              <span className="tag">Garba Workshops</span>
              <span className="tag">Wedding Sangeet</span>
              <span className="tag">Corporate Events</span>
              <span className="tag">Kids Batches</span>
              <span className="tag">Garba Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
