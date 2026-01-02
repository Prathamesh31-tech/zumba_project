import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = ["Home", "About", "Packages", "Testimonials", "Contact"];

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          Z<span>EST</span>
        </div>

        {/* Menu */}
        <ul className={isMobile && open ? "active" : ""}>
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        {isMobile && (
          <div className="nav-toggle" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </div>
        )}
      </div>
    </nav>
  );
}
