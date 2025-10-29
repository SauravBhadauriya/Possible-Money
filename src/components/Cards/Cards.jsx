import React, { useState } from "react";
import "./Cards.css";

const loanDetails = {
  business: {
    title: "Business Loans",
    description:
      "Fuel your business growth with commercial lending solutions designed to meet your capital needs and support expansion.",
    features: [
      "Up to ₹5M funding",
      "5.5% APR starting",
      "25-year terms",
      "Custom loan structuring",
      "Expert business support",
    ],
  },
  home: {
    title: "Home Loans",
    description:
    "Home loans provide financing options to purchase or refinance your dream home with affordable interest rates and long-term payment plans.",
    features: [
      "Up to ₹2M funding",
      "3.2% APR starting",
      "30-year terms",
      "Competitive rates",
      "Support for first-time buyers",
    ],
  },
  auto: {
    title: "Auto Loans",
    description:
    "Drive away today with our quick and easy auto loan approval process tailored to fit your budget and vehicle preferences.",
    features: [
      "Up to ₹100K funding",
      "2.9% APR starting",
      "84-month terms",
      "Low down payment options",
      "Flexible repayment plans",
    ],
  },
  personal: {
    title: "Personal Loans",
    description:
      "Personal loans offer competitive funding for a variety of needs beyond just purchasing or refinancing your home. Eligibility depends on credit and income.",
    features: [
      "Up to ₹2M funding",
      "3.2% APR starting",
      "Flexible terms up to 30 years",
      "Fast approval process",
      "No collateral required",
    ],
  },
  student: {
    title: "Student Loans",
    description:
    "Invest in your future with flexible student loans to cover tuition, books, and other educational expenses at affordable rates.",
    features: [
      "Up to ₹150K funding",
      "4.5% APR starting",
      "20-year terms",
      "Deferment options available",
      "Low upfront costs",
    ],
  },
};

const Cards = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const openModal = (loanType) => {
    setSelectedLoan(loanType);
  };

  const closeModal = () => {
    setSelectedLoan(null);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Loan Solutions for Every Need</h2>
          <p>
            Whether you're buying a home, starting a business, or consolidating
            debt, we have the right loan product for you.
          </p>
        </div>

        <div className="services-grid">
          {Object.entries(loanDetails).map(([key, loan]) => (
            <div key={key} className="service-card">
              <div className={`service-icon ${key}`}>
                {/* Optionally use emojis or icons */}
                {key === "personal" && "💸"}
                {key === "home" && "🏠"}
                {key === "auto" && "🚗"}
                {key === "student" && "🎓"}
                {key === "business" && "🏢"}
              </div>
              <h3>{loan.title}</h3>
              {/* <p>{loanFeaturesSummary(key)}</p> */}
              <ul className="service-features">
                {loan.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => openModal(key)}
                className="service-link"
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#00274d",
                  fontWeight: "bold",
                }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLoan && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              margin: "100px auto",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                border: "none",
                background: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <h2>{loanDetails[selectedLoan].title}</h2>
            <p>{loanDetails[selectedLoan].description}</p>
            <ul>
              {loanDetails[selectedLoan].features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

// Helper to summarize the first 3 features in a short line for the card main area
function loanFeaturesSummary(key) {
  const loan = loanDetails[key];
  if (!loan) return "";
  return `✓ ${loan.features[0]}, ✓ ${loan.features[1]}, ✓ ${loan.features[2]}`;
}

export default Cards;
