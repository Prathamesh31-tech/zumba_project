import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-compact">
      <div className="container footer-wrapper">
        {/* LEFT */}
        <div className="footer-left">
          © {currentYear} Zest Zumba Studio. All rights reserved.
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Service</a>
          <span>|</span>
          <a href="/return-policy">Return Policy</a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <span>Developed by</span>
          <img src="/bizonance-logo.jpeg" alt="Bizonance" />
        </div>
      </div>
    </footer>
  );
}
