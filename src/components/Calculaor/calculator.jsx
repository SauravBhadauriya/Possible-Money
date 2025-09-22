import React, { useState } from "react";
import "./calculator.css";

function calculateEMI(P, R, N) {
  // P = principal, R = annual interest rate (%), N = tenure (months)
  const r = R / 12 / 100;
  return P && R && N
    ? Math.round((P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1))
    : 0;
}

const EMICalculator = () => {
  // Default values from your reference image
  const [amount, setAmount] = useState(1160000);
  const [rate, setRate] = useState(15);
  const [months, setMonths] = useState(60);

  const emi = calculateEMI(amount, rate, months);

  return (
    <div className="emi-calc-container">
      <div className="emi-box">
        <h3 className="emi-title">
          EMI Calculator for
          <br />
          <span className="emi-loan-type">PERSONAL LOAN</span>
        </h3>
        <div className="emi-input-group">
          <label className="emi-input-label">Loan Amount (₹)</label>
          <input
            className="emi-slider"
            type="range"
            min={50000}
            max={2000000}
            step={10000}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
          <div className="emi-value">{amount.toLocaleString()}</div>
        </div>
        <div className="emi-input-group">
          <label className="emi-input-label">Interest Rate %</label>
          <input
            className="emi-slider"
            type="range"
            min={5}
            max={24}
            step={0.25}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
          <div className="emi-value">{rate} %</div>
        </div>
        <div className="emi-input-group">
          <label className="emi-input-label">Tenure (Months)</label>
          <input
            className="emi-slider"
            type="range"
            min={12}
            max={120}
            step={1}
            value={months}
            onChange={(e) => setMonths(+e.target.value)}
          />
          <div className="emi-value">{months}</div>
        </div>
      </div>

      <div className="emi-result-box">
        <div className="emi-result-label">Monthly EMI</div>
        <div className="emi-result-amount">₹ {emi.toLocaleString()}</div>
        <button className="emi-apply-btn">APPLY NOW</button>
      </div>


      
      <div className="emi-details">

        
        <h1>EMI Calculator</h1>
        <p>
          Measure twice, cut once. You may have a target amount, a target tenure
          or a target EMI. When it comes to loans, no matter how big or small,
          always get an idea how it will affect your monthly finances, before
          you take a decision.
        </p>
        <h4>Personal Loan EMI Calculator</h4>
        <p>Calculate how much it will take to enable short-term liquidity.</p>
        <h4>Home Loan EMI Calculator</h4>
        <p>Calculate how much it will take to enable your dream home</p>
      </div>
    </div>
  );
};

export default EMICalculator;
