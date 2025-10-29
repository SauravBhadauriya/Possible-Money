// components/ContactExpertPopup.jsx
import React from "react";

const ContactExpertPopup = ({ onClose }) => (
  <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-lg max-h-[80vh] overflow-y-auto">
    <button
      onClick={onClose}
      className="absolute top-3 right-4 text-2xl font-bold"
    >
      ×
    </button>
    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
    <div className="space-y-4">
      <p className="text-gray-700">Speak with a PossibleMoney expert to discuss your financial needs or get assistance:</p>
      <div>
        <strong>Email:</strong> info@possiblemoney.com
      </div>
      <div>
        <strong>Phone:</strong> +91-9990908775
      </div>
      <div>
        <strong>Whatsapp:</strong> +91-9990908775
      </div>
      <div>
        <strong>Office Hours:</strong> Mon-Fri 10am - 7pm
      </div>
    </div>
  </div>
);

export default ContactExpertPopup;
