import React from "react";
import PackageCard from "./PackageCard";

export default function Packages() {
  // तीन फिक्स प्लॅन्स (कोणतेही टॉगल बटण नाही)
  const packages = [
    {
      title: "Monthly Plan",
      subTitle: "",
      price: 1500,
      period: "/month",
      features: [
        "3 Classes/Week",
        "Basic Choreography",
        "Health Tips",
        "Community Access",
        "Pay as you go",
      ],
      highlight: false,
    },
    {
      title: "6 Months Plan",
      subTitle: "",
      price: 7500, // (1500 * 6 = 9000, here 7500 means save 1500)
      period: "/6 months",
      features: [
        "5 Classes/Week",
        "Cardio + Zumba",
        "Diet Plan Included",
        "Personal Guide",
        "Save ₹1,500 Flat",
      ],
      highlight: true, // This will be the Popular GLOW Card
    },
    {
      title: "Yearly Plan",
      subTitle: "",
      price: 14000, // Best Value
      period: "/year",
      features: [
        "Unlimited Access",
        "Advanced Moves",
        "1-on-1 Session",
        "Full Merch Kit",
        "Biggest Savings",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="content-wrapper">
        <h2 className="about-title text-center">Membership Plans</h2>
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
