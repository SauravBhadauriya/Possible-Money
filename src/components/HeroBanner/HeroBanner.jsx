import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="container flex-row">
        <div className="hero1" role="region" aria-label="Loan Journey Introduction">
          <h2>Your Loan Journey Made Simple</h2>
          <p>
            Compare, apply, and track personal, business, and mortgage loans
            with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
