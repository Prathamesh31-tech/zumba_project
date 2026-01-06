import { useState } from "react";

function TrainerPopup({ trainer, onClose }) {
  if (!trainer) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>
          ✖
        </span>
        <div className="popup-image-wrapper">
          <img src={trainer.image} alt={trainer.name} />
        </div>
        <h2 style={{ margin: "0.5rem 0", color: "#333" }}>{trainer.name}</h2>
        <h4 style={{ color: "#ff416c", marginBottom: "1rem" }}>
          {trainer.specialty}
        </h4>
        <p style={{ color: "#666", lineHeight: "1.6" }}>
          {trainer.description}
        </p>
      </div>
    </div>
  );
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      name: "Sonia Patel",
      image: "/trainers/trainer1.png",
      specialty: "Zumba Expert",
      description:
        "Sonia is a certified Zumba trainer helping people lose weight with fun dance moves.",
    },
    {
      name: "Mohit Sharma",
      image: "/trainers/trainer2.png",
      specialty: "Fitness Coach",
      description:
        "Mohit focuses on strength training and high-intensity interval training (HIIT).",
    },
    {
      name: "Abhay Deshmukh",
      image: "/trainers/trainer3.png",
      specialty: "Yoga Master",
      description:
        "Abhay brings peace and flexibility to your life with advanced Yoga techniques.",
    },
    {
      name: "Riya Sen",
      image: "/trainers/trainer3.png",
      specialty: "Aerobics",
      description: "Specialist in rhythmic aerobics and flexibility training.",
    },
  ];

  return (
    <section className="trainers-section" id="trainers">
      {/* --- BACKGROUND ANIMATION DIVS --- */}
      {/* हे बॅकग्राउंडसाठी नवीन ॲड केले आहे */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* --------------------------------- */}

      <div
        className="container text-center"
        style={{ marginBottom: "40px", position: "relative", zIndex: 2 }}
      >
        <h2 className="about-title">Trainers</h2>
        <p>Click on a trainer to know more</p>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className="trainer-panel"
            style={{ backgroundImage: `url(${trainer.image})` }}
            onClick={() => setSelectedTrainer(trainer)}
          >
            <div className="overlay-gradient"></div>
            <div className="panel-content">
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <TrainerPopup
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </section>
  );
}
