import React from "react";
import "./WhyWeChose.css";


const whyWeChose = [
  { id: "fast-approval", icon: "⚡", heading: "Fast Approval", content: "Get approved in as little as 24 hours with our streamlined digital application process." },
  { id: "secure-trusted", icon: "🛡️", heading: "Secure & Trusted", content: "Bank-level security and 15+ years of trusted service to protect your financial information." },
  { id: "competitive-rates", icon: "💎", heading: "Competitive Rates", content: "Enjoy some of the most competitive interest rates in the market with flexible terms." },
];


const WhyWeChose = () => {
  return (
    <section id="about" className="benefits">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose PossibleMoney?</h2>
          <p>We're committed to making your financial goals a reality</p>
        </div>

{/*         
            <div className="benefits-grid">
                <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <h3>Fast Approval</h3>
                    <p>Get approved in as little as 24 hours with our streamlined digital application process.</p>
                </div> */}

        <div className="benefits-grid">
  {whyWeChose.map((data) => (
    <div className="process-step" key={data.id}>
      <div className="benefit-icon">{data.icon}</div>
      <h3>{data.heading}</h3>
      <p>{data.content}</p>
    </div>
  ))}
</div>



        {/* <div class="benefit-item">
                    <div class="benefit-icon">🛡️</div>
                    <h3>Secure & Trusted</h3>
                    <p>Bank-level security and 15+ years of trusted service to protect your financial information.</p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">💎</div>
                    <h3>Competitive Rates</h3>
                    <p>Enjoy some of the most competitive interest rates in the market with flexible terms.</p>
                </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhyWeChose;
