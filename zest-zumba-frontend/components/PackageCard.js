export default function PackageCard({ title, price, features, highlight }) {
  return (
    <div className={`package-card ${highlight ? "popular" : ""}`}>
      {/* बॅज आता टॉप कॉर्नरला आहे (CSS मध्ये सेट केले आहे) */}
      {highlight && <span className="badge">Best Value</span>}

      <h3>{title}</h3>
      <h2 className="price">₹{price}</h2>
      <p className="duration">per month</p>

      <ul>
        {features.map((feat, idx) => (
          <li key={idx}>
            {/* चेक मार्क आयकॉन */}
            {highlight ? "✨" : "✅"} {feat}
          </li>
        ))}
      </ul>

      <button className="package-btn">Enroll Now</button>
    </div>
  );
}
