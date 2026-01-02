import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const aboutData = [
    {
      id: 0,
      tabTitle: "Our Vibe",
      title: "Party, Not Workout! 🎵",
      text: "Zest Zumba Studio is not a boring gym. We blend high-energy dance with fitness. You won't even realize you are exercising because you'll be too busy having fun!",
      extra: "Custom playlists & Themed Weekends included.",
      icon: "💃",
    },
    {
      id: 1,
      tabTitle: "Workouts",
      title: "Sweat & Smile 🔥",
      text: "Say goodbye to treadmills. Our routines mix Latin rhythms, Bollywood beats, and Cardio intervals. It's designed to burn 800+ calories per session.",
      extra: "Perfect for weight loss & flexibility.",
      icon: "🔥",
    },
    {
      id: 2,
      tabTitle: "Community",
      title: "Family First 🤝",
      text: "Beginner or Pro, everyone is welcome here. We are a non-judgmental family that grows together. Post-workout selfies and monthly challenges keep us connected.",
      extra: "Join our exclusive WhatsApp group for diet tips.",
      icon: "❤️",
    },
  ];

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Us</h2>
      <p className="about-tagline">Why Choose Zest Studio?</p>

      {/* TABS NAVIGATION (Buttons) */}
      <div className="tabs-nav">
        {aboutData.map((item, index) => (
          <button
            key={item.id}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item.tabTitle}
          </button>
        ))}
      </div>

      {/* CONTENT DISPLAY AREA (No Cards) */}
      <div className="content-display">
        {/* Left Side: Big Icon */}
        <div className="content-visual">
          <div className="big-icon-circle">{aboutData[activeTab].icon}</div>
        </div>

        {/* Right Side: Text */}
        <div className="content-text">
          <h3>{aboutData[activeTab].title}</h3>
          <p>{aboutData[activeTab].text}</p>

          <div className="highlight-box">
            <span>✨</span> {aboutData[activeTab].extra}
          </div>
        </div>
      </div>
    </section>
  );
}
