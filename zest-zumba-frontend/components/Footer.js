import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-compact">
      <div className="container">
        <div className="footer-wrapper">
          {/* Left Side: Logo */}
          <div className="footer-logo">
            <img src="/logo.png" alt="Zest Zumba" />
            <span>Zest Zumba Studio</span>
          </div>

          {/* Right Side: Social Icons */}
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img src="/app/facebook.png" alt="FB" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src="/app/instagram.png" alt="Insta" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <img src="/app/youtube.png" alt="YT" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Copyright */}
        <p className="copyright-text">
          &copy; {currentYear} Zest Zumba Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
