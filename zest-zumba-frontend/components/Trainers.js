import React, { useState, useEffect, useRef } from "react";

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  const marqueeList = [
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scrollStep = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 0.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleTrainerChange = (index) => {
    const realIndex = index % trainers.length;

    if (realIndex === activeIndex) return;

    setAnimate(true);
    setTimeout(() => {
      setActiveIndex(realIndex);
      setAnimate(false);
    }, 400);
  };

  const activeTrainer = trainers[activeIndex];

  const nextTrainer = () => handleTrainerChange(activeIndex + 1);
  const prevTrainer = () =>
    handleTrainerChange(activeIndex - 1 + trainers.length);

  return (
    <section className="trainers-immersive">
      <div className="about-title">Trainer Profile</div>
      {/* <div
        className="top-marquee-container"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="marquee-track">
          {marqueeList.map((trainer, idx) => {
            const isActive = idx % trainers.length === activeIndex;

            return (
              <div
                key={`marquee-${idx}`}
                className={`marquee-item ${isActive ? "active" : ""}`}
                onClick={() => handleTrainerChange(idx)}
                style={isActive ? { borderColor: trainer.color } : {}}
              >
                <img src={trainer.image} alt={trainer.name} />
                <span className="thumb-name">{trainer.name}</span>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* 2. BACKGROUND GLOW */}
      <div
        className="bg-glow-spot"
        style={{
          background: `radial-gradient(circle, ${activeTrainer.color}40 0%, transparent 70%)`,
        }}
      ></div>

      {/* 3. MAIN DETAILS */}
      <div className=" immersive-container" style={{ marginTop: "5rem" }}>
        <div className={`info-side ${animate ? "fade-out" : "fade-in"}`}>
          <h1 className="trainer-name">{activeTrainer.name}</h1>
          <h2>{activeTrainer.specialty}</h2>
          <p style={{ marginBottom: "10px" }}>5+ Year Experience</p>
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

      {/* <button className="nav-arrow left-arrow" onClick={prevTrainer}>
        ❮
      </button>
      <button className="nav-arrow right-arrow" onClick={nextTrainer}>
        ❯
      </button> */}
    </section>
  );
}
