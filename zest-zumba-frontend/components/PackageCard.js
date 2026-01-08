export default function PackageCard({
  title,
  price,
  features,
  highlight,
  cycle,
}) {
  // कालावधीनुसार Label ठरवा
  let durationLabel = "/ month";
  if (cycle === "sixMonth") durationLabel = "/ 6 months";
  if (cycle === "yearly") durationLabel = "/ year";

  return (
    <div className={`package-card ${highlight ? "popular" : ""}`}>
      {highlight && <span className="badge">MOST POPULAR</span>}

      <div className="card-header">
        <h3>{title}</h3>
        <div className="price-box">
          <h2 className="price">₹{price.toLocaleString()}</h2>
          <span className="duration">{durationLabel}</span>
        </div>
      </div>

      <div className="divider"></div>

      <ul className="feature-list">
        {features.map((feat, idx) => (
          <li key={idx}>
            <span className="icon">{highlight ? "✨" : "✓"}</span>
            {feat}
          </li>
        ))}
      </ul>

      <button className="package-btn">Choose Plan</button>
    </div>
  );
}
