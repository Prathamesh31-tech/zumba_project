import React, { useState, useEffect, useRef } from "react";

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // 1. Ref banayein container ke liye
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const trainers = [
    {
      id: 4,
      name: "Megha Sardeshmukh",
      image: "/trainers/H-trainer.png",
      specialty: "Founder & Head Choreographer",
      color: "#9b59b6",
      description:
        "Rhythmic, fast, and fun. Riya specializes in aerobics and flexibility.",
    },
    {
      id: 1,
      name: "Sonia Patel",
      image: "/trainers/trainer1.png",
      specialty: "Zumba Expert",
      color: "#ff6b81",
      description:
        "Sonia turns fitness into a party! A certified Zumba specialist who helps you burn calories.",
    },
    {
      id: 2,
      name: "Mohit Sharma",
      image: "/trainers/trainer2.png",
      specialty: "HIIT Coach",
      color: "#f39c12",
      description:
        "Push your limits with Mohit. He focuses on core strength and endurance.",
    },
    {
      id: 3,
      name: "Abhay Deshmukh",
      image: "/trainers/trainer3.png",
      specialty: "Yoga Master",
      color: "#2ecc71",
      description:
        "Find your balance. Abhay combines ancient Yoga traditions with modern flexibility.",
    },
  ];

  // Logic: Duplicate list for infinite scrolling illusion
  // Kam se kam itna duplicate karein ki screen bhar jaye (e.g., 6-8 times if list is small)
  const marqueeList = [
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
    ...trainers,
  ];

  // --- AUTO SCROLL ENGINE ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scrollStep = () => {
      // Agar PAUSED nahi hai, tabhi auto-scroll karein
      if (!isPaused) {
        // Scroll speed control (1 = normal, 0.5 = slow, 2 = fast)
        scrollContainer.scrollLeft += 0.5;

        // Infinite Loop Logic:
        // Agar scroll aadhe se zyada ho gaya, to wapas start (0) par jump karein
        // Taaki user ko lage list kabhi khatam nahi ho rahi
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Start Animation
    animationFrameId = requestAnimationFrame(scrollStep);

    // Cleanup when component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]); // Depend on isPaused state

  const handleTrainerChange = (index) => {
    // Real index nikalna zaroori hai kyunki list duplicated hai
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
      <div className="about-title">Trainers</div>

      {/* 1. SCROLLING MARQUEE */}
      {/* Ref aur Mouse Events yahan lagayein */}
      <div
        className="top-marquee-container"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)} // Mouse enter -> Stop Auto Scroll
        onMouseLeave={() => setIsPaused(false)} // Mouse leave -> Resume Auto Scroll
        onTouchStart={() => setIsPaused(true)} // Finger touch -> Stop
        onTouchEnd={() => setIsPaused(false)} // Finger lift -> Resume
      >
        <div className="marquee-track">
          {/* Note: Label ko ab track ke bahar rakhna behtar hoga, 
                ya phir use scroll ka hissa bana dein. 
                Yahan maine label hata diya hai taaki flow smooth rahe, 
                aap chahein to 'marquee-label' ko 'trainers-immersive' ke top par fix kar sakte hain. */}

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
      </div>

      {/* 2. BACKGROUND GLOW */}
      <div
        className="bg-glow-spot"
        style={{
          background: `radial-gradient(circle, ${activeTrainer.color}40 0%, transparent 70%)`,
        }}
      ></div>

      {/* 3. MAIN DETAILS */}
      <div className="container immersive-container">
        <div className={`info-side ${animate ? "fade-out" : "fade-in"}`}>
          <h1 className="trainer-name">{activeTrainer.name}</h1>
          <p className="trainer-desc">{activeTrainer.description}</p>
          <button
            className="book-btn"
            style={{
              backgroundColor: activeTrainer.color,
              boxShadow: `0 10px 25px ${activeTrainer.color}88`,
            }}
          >
            {activeTrainer.specialty}
          </button>
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

      <button className="nav-arrow left-arrow" onClick={prevTrainer}>
        ❮
      </button>
      <button className="nav-arrow right-arrow" onClick={nextTrainer}>
        ❯
      </button>
    </section>
  );
}
