import React, { useState } from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  // EMI Calculator states
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  // Eligibility form states
  const [employmentType, setEmploymentType] = useState("salaried"); // default to salaried

  const [customerName, setCustomerName] = useState("");
  const [currentcompany, setCurrentCompany] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [Residencecity, setResidenceCity] = useState("");
  const [Salaybank, setSalaryBank] = useState("");
  const [grossanuallincome, setGrossAnnualIncome] = useState("");
  const [annualTurnover, setAnnualTurnover] = useState("");
  const [desireloanamount, setDesireLoanAmount] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");

  // Modal control
  const [activeModal, setActiveModal] = useState(null); // null | "eligibility" | "emi"

  // EMI Calculation function
  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    const months = parseInt(years) * 12;

    if (isNaN(principal) || isNaN(monthlyRate) || isNaN(months)) {
      setEmi(null);
      return;
    }
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emiValue.toFixed(2));
  };

  // Eligibility form submit handler
  const handleEligibilitySubmit = (e) => {
    e.preventDefault();

    if (
      !customerName.trim() ||
      !Residencecity.trim() ||
      !desireloanamount.trim() ||
      !PanNumber.trim() ||
      !MobileNumber.trim() ||
      (employmentType === "salaried" &&
        (!currentcompany.trim() || !Salaybank.trim() || !grossanuallincome.trim())) ||
      (employmentType === "self-employed" &&
        (!businessName.trim() || !annualTurnover.trim()))
    ) {
      setError("All fields are required for your employment type.");
      return;
    }

    setError("");
    alert("Eligibility checked for: " + customerName);
    setActiveModal(null);

    // Clear all input fields
    setCustomerName("");
    setCurrentCompany("");
    setBusinessName("");
    setResidenceCity("");
    setSalaryBank("");
    setGrossAnnualIncome("");
    setAnnualTurnover("");
    setDesireLoanAmount("");
    setPanNumber("");
    setMobileNumber("");
  };

  return (
    <section className="hero">
      <div className="flex-row">
        <div>
          <h2>Your Loan Journey Made Simple</h2>
          <p>
            Compare, apply, and track personal, business, and mortgage loans
            with ease.
          </p>
          <div className="btn">
            <button className="btn btn-primary" onClick={() => setActiveModal("eligibility")}>
              Get Started Today
            </button>
            <button className="btn btn-primary" onClick={() => setActiveModal("emi")}>
              EMI Calculator
            </button>
          </div>
        </div>
      </div>

      {/* EMI Calculator Modal */}
      {activeModal === "emi" && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content calculator-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="Form-btn"
              onClick={() => setActiveModal(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                border: "none",
                background: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <h3>EMI Calculator</h3>
            <label>
              Loan Amount (₹):
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label>
              Annual Interest Rate (%):
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>
            <label>
              Tenure (Years):
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </label>
            <button className="btn-primary btn" onClick={calculateEMI}>
              Calculate EMI
            </button>
            {emi && (
              <div className="result">
                <p className="emi-estimate">Estimated EMI:</p>
                <p className="result-amt">₹ {emi}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Eligibility Modal */}
      {activeModal === "eligibility" && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="Form-btn"
              onClick={() => setActiveModal(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                border: "none",
                background: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <h3>Check Eligibility</h3>

            <form onSubmit={handleEligibilitySubmit}>
              <label>
                Employment Type
                &nbsp;<select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  required
                >
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                </select>
              </label>
              <br></br>

              <label>
                Name As PanCard
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </label>

              <label>
                {employmentType === "salaried" ? "Current Company" : "Business Name"}
                <input
                  type="text"
                  value={employmentType === "salaried" ? currentcompany : businessName}
                  onChange={(e) =>
                    employmentType === "salaried"
                      ? setCurrentCompany(e.target.value)
                      : setBusinessName(e.target.value)
                  }
                  required
                />
              </label>

              <label>
                Residence City
                <input
                  type="text"
                  value={Residencecity}
                  onChange={(e) => setResidenceCity(e.target.value)}
                  required
                />
              </label>

              {employmentType === "salaried" && (
                <>
                  <label>
                    Salary Bank
                    <input
                      type="text"
                      value={Salaybank}
                      onChange={(e) => setSalaryBank(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Gross Annual Income
                    <input
                      type="number"
                      value={grossanuallincome}
                      onChange={(e) => setGrossAnnualIncome(e.target.value)}
                      required
                    />
                  </label>
                </>
              )}

              {employmentType === "self-employed" && (
                <>
                  <label>
                    Annual Business Turnover
                    <input
                      type="number"
                      value={annualTurnover}
                      onChange={(e) => setAnnualTurnover(e.target.value)}
                      required
                    />
                  </label>
                </>
              )}

              <label>
                Desired Loan Amount
                <input
                  type="number"
                  value={desireloanamount}
                  onChange={(e) => setDesireLoanAmount(e.target.value)}
                  required
                />
              </label>

              <label>
                Pan Number
                <input
                  type="text"
                  value={PanNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  required
                />
              </label>

              <label>
                Mobile Number
                <input
                  type="tel"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </label>
              <label>
               Email Address
                <input
                  type="tel"
                  value={EmailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  required
                />
              </label>

              {error && <p style={{ color: "red" }}>{error}</p>}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "16px" }}
              >
                Check Eligibility
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
