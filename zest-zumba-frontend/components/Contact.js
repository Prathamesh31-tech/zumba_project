export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Us</h2>

      <div className="container contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <p>We are here to assist you. Reach us anytime:</p>

          <ul>
            <li>📞 +91 9876543210</li>
            <li>📞 +91 9123456789</li>
            <li>📞 +91 9988776655</li>
            <li>📞 +91 9001122334</li>
            <li>📞 +91 9112233445</li>
          </ul>

          <p>Email: info@zestzumba.com</p>
          <p>Address: 123, SaiNagar, Amravati, Maharashtra</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form card">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Mobile No" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
