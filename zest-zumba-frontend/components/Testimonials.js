export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      feedback: "Amazing Zumba classes! Trainers are very supportive.",
      image: "/testimonials/test1.png",
    },
    {
      name: "Amit Deshmukh",
      feedback: "Great energy, fun workouts, highly recommend!",
      image: "/testimonials/test2.png",
    },
    {
      name: "Neha Patil",
      feedback: "I lost weight and enjoyed every session!",
      image: "/testimonials/test3.png",
    },
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container text-center">
        <h2>Testimonials</h2>
        <p className="section-subtitle">What our happy Zumba members say 💖</p>
      </div>

      <div className="container testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-img">
              <img src={t.image} alt={t.name} />
            </div>
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <h3 className="testimonial-name">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
