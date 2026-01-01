import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Trainers",
    "Packages",
    "Gallery",
    "Testimonials",
    "Achievements",
    "Contact",
  ];

  return (
    <nav>
      <div className="nav-container">
        <h1>Zest Zumba Studio</h1>

        {/* Menu */}
        <ul className={isMobile ? (open ? "active" : "") : ""}>
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        {isMobile && (
          <div className="nav-toggle" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </div>
        )}
      </div>
    </nav>
  );
}
