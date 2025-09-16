import React from "react";
import "./Trust.css";

const Trust = () => {
  return (
        <section class="trust-section">
        <div class="container">
            <div class="trust-grid">
                <div class="trust-item">
                    <div class="trust-icon">👥</div>
                    <div class="trust-number">50K+</div>
                    <div class="trust-label">Happy Customers</div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">💰</div>
                    <div class="trust-number">₹2B+</div>
                    <div class="trust-label">Loans Funded</div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🏆</div>
                    <div class="trust-number">15+</div>
                    <div class="trust-label">Years Experience</div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">📈</div>
                    <div class="trust-number">4.9/5</div>
                    <div class="trust-label">Customer Rating</div>
                </div>
            </div>
        </div>
    </section>


  );
};

export default Trust;
