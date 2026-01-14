import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCalendarAlt,
  FaClock,
  FaDumbbell,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className=" contact-container">
        {/* --- Left Side: Contact Info --- */}
        <div className="contact-info">
          <h4 className="sub-heading">Join the Movement</h4>
          <h2 className="heading">
            Ready to Sweat? <br />
            Book Your Spot!
          </h2>
          <p className="description">
            Whether you are a beginner or a pro, we have a spot for you. Fill
            out the form to schedule your first session or give us a call
            directly.
          </p>

          <div className="info-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h5>Studio Location</h5>
              <p>Opp Hotel Rangoli Pearl, Nawathe Square, Amravati 444607</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <div>
              <h5>Call for Enquiry</h5>
              <div className="phone-grid">
                <span>+91 9876543210</span>
                <span>+91 9123456789</span>
              </div>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <FaClock />
            </div>
            <div>
              <h5>Studio Hours</h5>
              <p>Mon - Sat: 6:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* --- Right Side: Modern Registration Form --- */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Book appointment</h3>

            {/* Name */}
            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Full Name</label>
            </div>

            {/* Mobile */}
            <div className="input-group">
              <input type="tel" required placeholder=" " pattern="[0-9]{10}" />
              <label>Mobile Number</label>
            </div>

            {/* Row for Date & Shift */}
            <div className="form-row">
              <div className="input-group">
                {/* Date Input */}
                <input type="date" required className="has-content" />
                <label className="static-label">Appointment Date</label>
              </div>
            </div>

            {/* Class Type Selection */}
            <div className="input-group">
              <select required className="has-content">
                <option value="" disabled selected hidden></option>
                <option value="zumba-fitness">Zumba Female</option>
                <option value="strong">Zumba Male</option>
                <option value="aqua">Zumba Kids</option>
                <option value="kids">personalized Diets Plans</option>
                <option value="kids">Book Consultation</option>
              </select>
              <label className="static-label">Class Category</label>
              <FaDumbbell className="field-icon" />
            </div>

            {/* Message */}
            <div className="input-group">
              <textarea rows="3" required placeholder=" "></textarea>
              <label>Any specific goals or health conditions?</label>
            </div>

            <button type="submit" className="btn-submit">
              Send Request <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </div>
      </div>

      <div className="connnect">
        <h1 style={{ marginBottom: "10px" }}>Connect with Us</h1>
        <p style={{ marginBottom: "30px" }}>
          Follow us on social media for the latest updates, promotions, and
          more.
        </p>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img src="/app/facebook.png" alt="FB" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src="/app/instagram.png" alt="Insta" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <img src="/app/youtube.png" alt="YT" />
          </a>
        </div>
      </div>
    </section>
  );
}
