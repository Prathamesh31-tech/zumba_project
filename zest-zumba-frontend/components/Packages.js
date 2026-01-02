import PackageCard from "./PackageCard";

export default function Packages() {
  const packages = [
    {
      title: "Beginner",
      price: 1000,
      features: [
        "3 Classes/Week",
        "Basic Choreography",
        "Health Tips",
        "Community Access",
      ],
      highlight: false,
    },
    {
      title: "Pro Dancer",
      price: 1500,
      features: [
        "5 Classes/Week",
        "Cardio + Zumba",
        "Diet Plan Included",
        "Personal Guide",
      ],
      highlight: true, // हे कार्ड वेगळे दिसेल
    },
    {
      title: "Elite",
      price: 2000,
      features: [
        "Unlimited Access",
        "Advanced Moves",
        "1-on-1 Session",
        "Full Merch Kit",
      ],
      highlight: false,
    },
  ];

  return (
    // इथे क्लास नाव 'packages-section' करा
    <section className="packages-section" id="packages">
      <div className="container text-center">
        <h2>Zumba Packages</h2>
        <p className="section-subtitle">
          Choose the plan that fits your energy 🔥
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </section>
  );
}
