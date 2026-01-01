export default function PackageCard({ title, price, features, highlight }) {
  return (
    <div className={`package-card ${highlight ? "popular" : ""}`}>
      {highlight && <span className="badge">Most Popular</span>}

      <h3>{title}</h3>
      <h2 className="price">₹{price}</h2>
      <p className="duration">per month</p>

      <ul>
        {features.map((feat, idx) => (
          <li key={idx}>✔ {feat}</li>
        ))}
      </ul>

      <button className="package-btn">Enroll Now</button>
    </div>
  );
}
