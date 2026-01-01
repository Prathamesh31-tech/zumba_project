export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Zest Zumba Studio. All rights
        reserved.
      </p>
      <div style={{ marginTop: "0.5rem" }}>
        <a href="#">Facebook</a>|<a href="#">Instagram</a>|
        <a href="#">YouTube</a>
      </div>
    </footer>
  );
}
