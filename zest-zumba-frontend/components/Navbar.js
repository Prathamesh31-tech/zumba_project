import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuItems = ["Home", "About", "Packages", "Gallery", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* === BRAND: LOGO + NAME === */}
        <a href="#home" className="brand" onClick={() => setIsOpen(false)}>
          {/* Logo Image */}
          <img src="logo.png" alt="Zest Logo" className="brand-logo" />

          {/* Text Wrapper (Column) */}
          <div className="brand-text">
            <span className="brand-title">
              Z<span>EST</span>
            </span>
            <span className="brand-subtitle">Zumba Studio</span>
          </div>
        </a>

        {/* === DESKTOP MENU === */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* === HAMBURGER === */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
