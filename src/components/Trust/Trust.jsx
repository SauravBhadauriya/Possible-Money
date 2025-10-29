import React from "react";
import "./Trust.css";

const whyWeChose = [
  {
    id: "customer",
    icon: "👥",
    heading: "50K+",
    content: "Happy Customers"
  },
  {
    id: "funded",
    icon: "💰",
    heading: "₹2B+",
    content: "Loans Funded",
  },
  {
    id: "years-experience",
    icon: "🏆",
    heading: "15+",
    content: "Years Experience",
  },
  {
    id: "customer-rating",
    icon: "📈",
    heading: "4.9/5",
    content: "Customer Rating",
  },
];

const Trust = () => {
  return (
    <section className="container">
      <div className="trust-grid">
        {whyWeChose.map((data) => (
          <div className="process-step" key={data.id}>
            <div className="benefit-icon">{data.icon}</div>
            <h3>{data.heading}</h3>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
