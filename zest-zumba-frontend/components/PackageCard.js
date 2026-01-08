import React from "react";

export default function PackageCard({
  title,
  subTitle,
  price,
  period,
  features,
  highlight,
}) {
  return (
    <div className={`package-card ${highlight ? "popular" : ""}`}>
      {highlight && <div className="badge">MOST POPULAR</div>}

      <div className="card-header">
        <h3>{title}</h3>
        <span className="plan-subtitle">{subTitle}</span>
      </div>

      <div className="divider"></div>

      <div className="price-box">
        <span className="currency">₹</span>
        <span className="price">{price.toLocaleString()}</span>
        <span className="duration">{period}</span>
      </div>

      <ul className="feature-list">
        {features.map((feat, i) => (
          <li key={i}>
            <span className="icon">✓</span> {feat}
          </li>
        ))}
      </ul>

      <button className="package-btn">Join Now</button>
    </div>
  );
}
