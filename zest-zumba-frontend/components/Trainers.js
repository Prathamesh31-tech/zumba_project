import React, { useState, useEffect, useRef } from "react";

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const trainers = [
    {
      id: 4,
      name: "Seema Behare",
      image: "/trainers/H-trainer.png",
      specialty: "Founder & Head Instructor",
      color: "#9b59b6",
      description:
        "Seema Behare is the Founder and Lead Instructor of Zest Zumba Studio, dedicated to transforming fitness into a fun, energetic, and confidence-boosting experience. With a passion for dance and a strong commitment to health and wellness, she has helped hundreds of students enjoy fitness while achieving their personal goals. Her classes are known for being high-energy, motivating, and suitable for all fitness levels. Seema believes that fitness should not feel like a burden—it should feel like a celebration. Through Zest Zumba Studio, she continues to inspire people to stay active, healthy, and happy every day.",
    },
  ];

  const activeTrainer = trainers[activeIndex];

  return (
    <section className="trainers-immersive">
      <h2 className="trainer-title">Trainer Profile</h2>

      <div
        className="bg-glow-spot"
        style={{
          background: `radial-gradient(circle, ${activeTrainer.color}40 0%, transparent 70%)`,
        }}
      ></div>

      <div className="immersive-container">
        <div className={`info-side ${animate ? "fade-out" : "fade-in"}`}>
          <h1 className="trainer-name">{activeTrainer.name}</h1>
          <h2>{activeTrainer.specialty}</h2>
          <p style={{ marginBottom: "10px", fontWeight: "600" }}>
            5+ Years Experience
          </p>
          <p className="trainer-desc">{activeTrainer.description}</p>
        </div>

        <div className={`image-side ${animate ? "slide-out" : "slide-in"}`}>
          <div className="energy-wrapper">
            <div
              className="energy-circle"
              style={{
                borderTopColor: activeTrainer.color,
                borderBottomColor: activeTrainer.color,
              }}
            ></div>
            <div
              className="energy-circle-inner"
              style={{
                borderLeftColor: activeTrainer.color,
                borderRightColor: activeTrainer.color,
              }}
            ></div>
            <div
              className="glow-aura"
              style={{ backgroundColor: activeTrainer.color }}
            ></div>
            <img
              src={activeTrainer.image}
              alt={activeTrainer.name}
              className="main-trainer-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
