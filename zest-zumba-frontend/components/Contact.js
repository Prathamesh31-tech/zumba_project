export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container text-center">
        <h2>Contact Us</h2>
      </div>
      <div
        className="container"
        style={{ maxWidth: "600px", marginTop: "2rem" }}
      >
        <form className="contact-form card">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
