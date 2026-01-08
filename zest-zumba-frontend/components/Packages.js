import React, { useState } from "react";
import PackageCard from "./PackageCard";

export default function Packages() {
  // स्टेट: सध्या कोणता प्लान ॲक्टिव्ह आहे (monthly, sixMonth, yearly)
  const [billingCycle, setBillingCycle] = useState("monthly");

  // पॅकेज डेटा स्ट्रक्चर अपडेट केले आहे
  const packages = [
    {
      title: "Beginner",
      // प्रत्येक कालावधीसाठी वेगळी किंमत
      prices: {
        monthly: 1000,
        sixMonth: 5000, // 1000 सूट (Save ₹1000)
        yearly: 9000, // 3000 सूट (Save ₹3000)
      },
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
      prices: {
        monthly: 1500,
        sixMonth: 7500,
        yearly: 14000,
      },
      features: [
        "5 Classes/Week",
        "Cardio + Zumba",
        "Diet Plan Included",
        "Personal Guide",
      ],
      highlight: true, // Popular Card
    },
    {
      title: "Elite",
      prices: {
        monthly: 2000,
        sixMonth: 10000,
        yearly: 18000,
      },
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
    <section className="packages-section" id="packages">
      {/* Background Shapes */}

      <div className=" text-center content-wrapper">
        <h2 className="about-title">Membership Plans</h2>
        <p className="section-subtitle">
          Invest in your health. Choose the plan that fits your rhythm.
        </p>

        {/* --- DURATION TOGGLE SWITCH --- */}
        <div className="billing-toggle">
          <button
            className={billingCycle === "monthly" ? "active" : ""}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={billingCycle === "sixMonth" ? "active" : ""}
            onClick={() => setBillingCycle("sixMonth")}
          >
            6 Months
          </button>
          <button
            className={billingCycle === "yearly" ? "active" : ""}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly <span className="save-badge">Save 20%</span>
          </button>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <PackageCard
              key={idx}
              {...pkg}
              price={pkg.prices[billingCycle]} // स्टेटनुसार किंमत पाठवा
              cycle={billingCycle} // कालावधी पाठवा (Label साठी)
            />
          ))}
        </div>
      </div>
    </section>
  );
}
