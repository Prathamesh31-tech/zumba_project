export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Zest Zumba Studio" />
          <span>Zest Zumba Studio</span>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/app/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/app/instagram.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/app/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Zest Zumba Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
