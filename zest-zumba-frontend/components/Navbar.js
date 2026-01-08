import { useState, useEffect } from "react";
// import "./Navbar.css"; // तुमची CSS file import करा

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile साठी Dropdown state (Gallery वर click केल्यावर उघडण्यासाठी)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
      setMobileDropdownOpen(false); // Menu close केल्यावर dropdown पण reset करा
    }
  }, [isOpen]);

  // Menu Items Structure Updated
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Packages", link: "#packages" },

    // Gallery with Dropdown options
    {
      name: "Gallery",
      link: "#gallery", // Default link
      isDropdown: true,
      subItems: [
        { name: "Photo Gallery", link: "#gallery" },
        { name: "Video Gallery", link: "#video-gallery" },
        { name: "Testimonials", link: "#testimonials" },
      ],
    },

    { name: "Contact", link: "#contact" },
  ];

  // Mobile वर Gallery वर click केल्यावर काय व्हावे
  const handleDropdownClick = (e, isDropdown) => {
    if (window.innerWidth <= 768 && isDropdown) {
      e.preventDefault(); // Default link stop करा
      setMobileDropdownOpen(!mobileDropdownOpen); // Toggle
    } else {
      // Desktop वर किंवा Normal link असेल तर Menu close करा
      if (!isDropdown) setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* === BRAND: LOGO + NAME === */}
        <a href="#home" className="brand" onClick={() => setIsOpen(false)}>
          <img src="logo.png" alt="Zest Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">
              Z<span>EST</span>
            </span>
            <span className="brand-subtitle">Zumba Studio</span>
          </div>
        </a>

        {/* === DESKTOP / MOBILE MENU === */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${item.isDropdown ? "dropdown" : ""}`}
            >
              <a
                href={item.link}
                className="nav-link"
                onClick={(e) => handleDropdownClick(e, item.isDropdown)}
              >
                {item.name}
                {/* Arrow Icon only for Dropdown items */}
                {item.isDropdown && <span className="dropdown-arrow">▼</span>}
              </a>

              {/* === DROPDOWN SUB-MENU === */}
              {item.isDropdown && (
                <ul
                  className={`dropdown-menu ${
                    mobileDropdownOpen ? "mobile-open" : ""
                  }`}
                >
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={sub.link}
                        className="dropdown-link"
                        onClick={() => setIsOpen(false)} // Link click केल्यावर पूर्ण menu बंद करा
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
