import React from "react";
import "./Apply.css";

const applyData = [
 
  {
    heading: "Apply Online",
    content: "Complete our simple application in just 5 minutes. Money is your",
  },
  {
    heading: "Share Documents",
    content:
      "Complete our simple application in just 5 minutes. paperwork required.",
  },
  {
    heading: "Get Approved",
    content:
      "Receive your loan decision within 24 hours. Most applications are approved instantly.",
  },
  {
    heading: "Receive Funds",
    content:
      "Funds are deposited directly into your account as soon as the next business day.",
  },
];

const Apply = () => {
  return (
    <section id="process" class="process">
      <div class="container flex">
        <div class="section-header">
          <h2>Simple 4-Step Process</h2>
          <p>Getting your loan has never been easier</p>
        </div>

        <div class="process-grid">
          {applyData.map((data, index) => (
            <div class="process-step" key={index}>
              <div class="step-number">{index+1}</div>
              <h3>{data.heading}</h3>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Apply;
