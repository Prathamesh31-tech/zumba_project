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
              <p>123, SaiNagar, Amravati, Maharashtra</p>
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
              <p>Mon - Sat: 6:00 AM - 9:00 PM</p>
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
                <label className="static-label">Joining Date</label>
              </div>

              <div className="input-group">
                {/* Shift Selection */}
                <select required className="has-content">
                  <option value="" disabled selected hidden></option>
                  <option value="morning">Morning (6AM - 9AM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                  <option value="weekend">Weekend Batch</option>
                </select>
                <label className="static-label">Preferred Shift</label>
                <FaClock className="field-icon" />
              </div>
            </div>

            {/* Class Type Selection */}
            <div className="input-group">
              <select required className="has-content">
                <option value="" disabled selected hidden></option>
                <option value="zumba-fitness">Zumba Fitness (General)</option>
                <option value="strong">Strong Nation (HIIT)</option>
                <option value="aqua">Aqua Zumba</option>
                <option value="kids">Zumba Kids</option>
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
    </section>
  );
}
