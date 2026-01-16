import React from "react";
import PackageCard from "./PackageCard";

export default function Packages() {
  const packages = [
    {
      title: "Monthly Plan",
      subTitle: "",
      price: 1000,
      period: "/month",
      features: [
        "Daily Workout Session",
        "Cardio + Zumba",
        "personilized Diet Plans",
        "BMI Checkup",
        "Personal Guide",
      ],
      highlight: false,
    },
    {
      title: "6 Months Plan",
      subTitle: "",
      price: 5500, // (1500 * 6 = 9000, here 7500 means save 1500)
      period: "/6 months",
      features: [
        "Daily Workout Session",
        "Cardio + Zumba",
        "personilized Diet Plans",
        "BMI Checkup",
        "Personal Guide",
      ],
      highlight: true, // This will be the Popular GLOW Card
    },
    {
      title: "Yearly Plan",
      subTitle: "",
      price: 10000, // Best Value
      period: "/year",
      features: [
        "Daily Workout Session",
        "Cardio + Zumba",
        "personilized Diet Plans",
        "BMI Checkup",
        "Personal Guide",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="content-wrapper">
        <h2 className="package-title">Membership Plans</h2>
        <p className="section-subtitle text-center">
          Invest in your health. Choose the rhythm that fits you.
        </p>

        {/* --- CARDS GRID (Direct Display) --- */}
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <PackageCard
              key={idx}
              {...pkg}
              // Price and Period directly passed from object
            />
          ))}
        </div>
      </div>
    </section>
  );
}
