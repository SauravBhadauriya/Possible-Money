import React from "react"
import "./Cards.css"

const Cards = () => {
return (
<section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2>Loan Solutions for Every Need</h2>
                <p>Whether you're buying a home, starting a business, or consolidating debt, we have the right loan product for you.</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon Personal">💸</div>
                    <h3>Personal Loans</h3>
                    <p>Competitive rates for purchasing or refinancing your dream home.</p>
                    <ul class="service-features">
                        <li>✓ Up to $2M funding</li>
                        <li>✓ 3.2% APR starting</li>
                        <li>✓ 30-year terms</li>
                    </ul>
                    <a href="#" class="service-link">Learn More →</a>
                </div>

                <div class="service-card">
                    <div class="service-icon home">🏠</div>
                    <h3>Home Loans</h3>
                    <p>Competitive rates for purchasing or refinancing your dream home.</p>
                    <ul class="service-features">
                        <li>✓ Up to $2M funding</li>
                        <li>✓ 3.2% APR starting</li>
                        <li>✓ 30-year terms</li>
                    </ul>
                    <a href="#" class="service-link">Learn More →</a>
                </div>

                <div class="service-card">
                    <div class="service-icon auto">🚗</div>
                    <h3>Auto Loans</h3>
                    <p>Drive away today with our fast auto loan approval process.</p>
                    <ul class="service-features">
                        <li>✓ Up to $100K funding</li>
                        <li>✓ 2.9% APR starting</li>
                        <li>✓ 84-month terms</li>
                    </ul>
                    <a href="#" class="service-link">Learn More →</a>
                </div>

                <div class="service-card">
                    <div class="service-icon education">🎓</div>
                    <h3>Student Loans</h3>
                    <p>Invest in your education with flexible student loan options.</p>
                    <ul class="service-features">
                        <li>✓ Up to $150K funding</li>
                        <li>✓ 4.5% APR starting</li>
                        <li>✓ 20-year terms</li>
                    </ul>
                    <a href="#" class="service-link">Learn More →</a>
                </div>

                <div class="service-card">
                    <div class="service-icon business">🏢</div>
                    <h3>Business Loans</h3>
                    <p>Fuel your business growth with our commercial lending solutions.</p>
                    <ul class="service-features">
                        <li>✓ Up to $5M funding</li>
                        <li>✓ 5.5% APR starting</li>
                        <li>✓ 25-year terms</li>
                    </ul>
                    <a href="#" class="service-link">Learn More →</a>
                </div>
            </div>
        </div>
    </section>

  );  };
  export default Cards;