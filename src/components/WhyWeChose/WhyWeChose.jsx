import React from "react"
import "./WhyWeChose.css"

const WhyWeChose = () =>
{
    return(
<section id="about" class="benefits">
        <div class="container">
            <div class="section-header">
                <h2>Why Choose PossibleMoney?</h2>
                <p>We're committed to making your financial goals a reality</p>
            </div>

            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">⚡</div>
                    <h3>Fast Approval</h3>
                    <p>Get approved in as little as 24 hours with our streamlined digital application process.</p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">🛡️</div>
                    <h3>Secure & Trusted</h3>
                    <p>Bank-level security and 15+ years of trusted service to protect your financial information.</p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">💎</div>
                    <h3>Competitive Rates</h3>
                    <p>Enjoy some of the most competitive interest rates in the market with flexible terms.</p>
                </div>
            </div>
        </div>
    </section>

);};

export default WhyWeChose;