import { useState } from "react";

function TrainerCard({ trainer, onClick }) {
  return (
    <div className="trainer-card" onClick={() => onClick(trainer)}>
      <div className="trainer-img">
        <img src={trainer.image} alt={trainer.name} />
      </div>
      <div className="trainer-content">
        <h3>{trainer.name}</h3>
        <p>{trainer.specialty}</p>
      </div>
    </div>
  );
}

function TrainerPopup({ trainer, onClose }) {
  if (!trainer) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <span className="popup-close" onClick={onClose}>
          ✖
        </span>

        <img src={trainer.image} alt={trainer.name} />

        <h2>{trainer.name}</h2>
        <h4>{trainer.specialty}</h4>

        <p>{trainer.description}</p>
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
      specialty: "Zumba & Cardio",
      description:
        "Certified Zumba trainer with 6+ years of experience. Specializes in high-energy cardio sessions.",
    },
    {
      name: "Mohit Sharma",
      image: "/trainers/trainer2.png",
      specialty: "Dance & Fitness",
      description:
        "Professional dancer and fitness coach. Focuses on dance-based fat loss programs.",
    },
    {
      name: "Abhay Deshmukh",
      image: "/trainers/trainer3.png",
      specialty: "Strength & Zumba",
      description:
        "Expert in strength training with Zumba fusion. Helps build stamina and confidence.",
    },
  ];

  return (
    <section className="section" id="trainers">
      <div className="container text-center">
        <h2>Our Trainers</h2>
      </div>

      <div className="container trainers-grid">
        {trainers.map((trainer, idx) => (
          <TrainerCard
            key={idx}
            trainer={trainer}
            onClick={setSelectedTrainer}
          />
        ))}
      </div>

      {/* POPUP */}
      <TrainerPopup
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </section>
  );
}
