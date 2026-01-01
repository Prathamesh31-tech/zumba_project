export default function Achievements() {
  const stats = [
    { number: "300+", label: "Happy Clients", icon: "💃" },
    { number: "1500+", label: "Classes Conducted", icon: "🏋️‍♀️" },
    { number: "15+", label: "Certified Zumba Trainers", icon: "🎵" },
  ];

  return (
    <section className="section" id="achievements">
      <div className="container text-center">
        <h2 className="section-title">Our Zumba Achievements</h2>
      </div>

      <div className="achievements-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="achievement-card">
            <div className="icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
