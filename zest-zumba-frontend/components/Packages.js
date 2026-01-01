import PackageCard from "./PackageCard";

export default function Packages() {
  const packages = [
    {
      title: "Beginner",
      price: 1000,
      features: ["3 classes/week", "Basic Zumba moves"],
      highlight: false,
    },
    {
      title: "Intermediate",
      price: 1500,
      features: ["5 classes/week", "Cardio & Zumba"],
      highlight: true,
    },
    {
      title: "Advanced",
      price: 2000,
      features: ["Unlimited classes", "Advanced choreography"],
      highlight: false,
    },
  ];

  return (
    <section className="section" id="packages">
      <div className="container text-center">
        <h2>Zumba Packages</h2>
        <p className="section-subtitle">
          Choose the plan that fits your energy 🔥
        </p>
      </div>

      <div className="container packages-grid">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </section>
  );
}
