import React, { useState } from "react";
import "./CTA.css";

// Contact popup component
const ContactExpertPopup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button
        onClick={onClose}
        className="popup-close"
        style={{ position: "absolute", right: 16, top: 16, fontSize: 28 }}
      >
        ×
      </button>
      <h2>Contact Us</h2>
      <p>Speak with a PossibleMoney expert:</p>
      <div style={{ lineHeight: "2" }}>
        <strong>Email:</strong> info@possiblemoney.com
        <br />
        <strong>Phone:</strong> +91-9990908775
        <br />
        <strong>Whatsapp:</strong> +91-9990908775
        <br />
        <strong>Office Hours:</strong> Mon-Fri 10am - 7pm
      </div>
    </div>
  </div>
);

const CTA = ({ setOpen }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of satisfied customers who chose PossibleMoney for
            their financial needs.
          </p>

          <div className="cta-buttons">
            {/* ✅ This button will trigger the ApplyFormUi from Home.jsx */}

            <button className="btn btn-secondary" onClick={() => setOpen(true)}>
              Apply Now - Free Quote
            </button>
            <button
              className="btn btn-outline-white"
              onClick={() => setShowContact(true)}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Contact popup logic */}
      {showContact && (
        <div className="popup-background">
          <ContactExpertPopup onClose={() => setShowContact(false)} />
        </div>
      )}
    </section>
  );
};

export default CTA;
