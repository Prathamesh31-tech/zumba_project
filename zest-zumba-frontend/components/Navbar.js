import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setMobileDropdownOpen(false);
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Packages", link: "#packages" },
    {
      name: "Gallery",
      link: "#gallery",
      isDropdown: true,
      subItems: [
        { name: "Image Gallery", link: "#gallery" },
        { name: "Video Gallery", link: "#video-gallery" },
        { name: "Testimonials", link: "#testimonials" },
      ],
    },
    { name: "Contact", link: "#contact" },
  ];

  const handleDropdownClick = (e, isDropdown) => {
    if (window.innerWidth <= 768 && isDropdown) {
      e.preventDefault();
      setMobileDropdownOpen(!mobileDropdownOpen);
    } else {
      if (!isDropdown) setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* ===== DESKTOP LOGO ===== */}
        <a href="#home" className="brand" onClick={() => setIsOpen(false)}>
          <img src="logo.png" alt="Zest Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">
              Z<span>EST</span>
            </span>
            <span className="brand-subtitle">Zumba Studio</span>
          </div>
        </a>

        {/* ===== MENU ===== */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* ===== MOBILE LOGO INSIDE MENU ===== */}
          <div className="mobile-menu-logo">
            <a href="#home" className="brand" onClick={() => setIsOpen(false)}>
              <img src="logo.png" alt="Zest Logo" className="brand-logo" />
              <div className="brand-text">
                <span className="brand-title">
                  Z<span>EST</span>
                </span>
                <span className="brand-subtitle">Zumba Studio</span>
              </div>
            </a>
          </div>

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
                {item.isDropdown && <span className="dropdown-arrow">▼</span>}
              </a>

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
                        onClick={() => setIsOpen(false)}
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

        {/* ===== HAMBURGER ===== */}
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
