import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section class="hero">
      <div class="container flex-row">
        <div class="hero1" role="region" aria-label="Loan Journey Introduction">
          <h2>Your Loan Journey Made Simple</h2>
          <p>
            Compare, apply, and track personal, business, and mortgage loans
            with ease.
          </p>
          <button aria-label="Check Your Eligibility">
            Check Your Eligibility
          </button>
        </div>
        <div class="calculator-card" role="region" aria-label="Loan Calculator">
          <h2>EMI Calculator</h2>
          <div class="calculate">
            <label for="loanAmount">Loan Amount (₹):</label>
            <input
              type="number"
              id="loanAmount"
              min="1000"
              step="1000"
              value="50000"
            />

            <label for="interestRate">Annual Interest Rate (%):</label>
            <input
              type="number"
              id="interestRate"
              min="0"
              step="0.1"
              value="12"
            />

            <label for="tenure">Tenure (Years):</label>
            <input type="number" id="tenure" min="1" step="1" value="5" />

            <button onclick="calculateEMI()">Calculate EMI</button>
            <div class="result" id="result"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
