import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      {/* Decorative Background Elements */}

      <div className="container contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h4 className="sub-heading">Get in Touch</h4>
          <h2 className="heading">
            Let's Chat, <br />
            Reach Out to Us!
          </h2>
          <p className="description">
            Have questions about our Zumba classes? We are here to assist you.
            Visit us or give us a call!
          </p>

          <div className="info-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h5>Visit Us</h5>
              <p>123, SaiNagar, Amravati, Maharashtra</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div>
              <h5>Email Us</h5>
              <p>info@zestzumba.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <div>
              <h5>Call Us</h5>
              <div className="phone-grid">
                <span>+91 9876543210</span>
                <span>+91 9123456789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send a Message</h3>

            <div className="input-group">
              <input type="text" required />
              <label>Full Name</label>
            </div>

            <div className="input-group">
              <input type="tel" required />
              <label>Mobile Number</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="btn-submit">
              Send Message <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
