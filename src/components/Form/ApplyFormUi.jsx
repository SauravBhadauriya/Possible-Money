import React, { useState } from "react";
import ShowApplyFormBtn from "./ApplyFormBtn";

export default function ApplyFormUi({ setOpen }) {
  const [amount, setLoanAmount] = useState("");
  const [employment, setEmployment] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [date, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [residential, setResidential] = useState("");
  const [pan, setPanNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nEmail: ${email}\nLoan Amount: ${amount}\nMobile: ${mobile}`
    );
    setShowForm(false); // colse the form when form submit
  };

  return (
    <div className="fixed bg-black/40 z-50 inset-0 flex justify-center items-center">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-2xl font-bold bg-white  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      >
        X
      </button>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto p-8 bg-gray-200 rounded-2xl shadow-md space-y-6 max-h-[95vh] overflow-y-auto 
"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Apply for a Loan
        </h2>

        {/* Loan Amount */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Desired Loan Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Employment Status */}
        <div className="input-feaild">
          <label
            htmlFor="employment"
            className="block mb-2 font-medium text-gray-700"
          >
            Employment Status
          </label>
          <select
            id="employment"
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            className="input-data"
            required
          >
            <option value="" selected disabled>
              Select...
            </option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
            <option value="student">Student</option>
          </select>
        </div>

        {/* Loan type */}
        <div className="input-feaild">
          <label
            htmlFor="type"
            className="block mb-2 font-medium text-gray-700"
          >
            Loan Type
          </label>
          <select
            id="employment"
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            className="input-data"
            required
          >
            <option value="" selected disabled>
              Select...
            </option>
            <option value="salaried">Home Loan</option>
            <option value="self-employed">Auto Loan</option>
            <option value="student">Personal Loans</option>
            <option value="student">Business Loans</option>
            <option value="student">Student Loans</option>
          </select>
        </div>

        {/* Monthly Income */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Monthly Income
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Address */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Current Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* City */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Name */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* DOB */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Gender */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">Gender</label>
          <select className="input-data" required>
            <option value="" selected disabled>
              Select...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            Mobile No
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Email */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            E-Mail ID
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-data"
            required
          />
        </div>

        {/* Residential Status */}
        <div className="input-feaild">
          <p className="block mb-2 font-medium text-gray-700">
            Residential Status
          </p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="residential"
                value="owned"
                checked={residential === "owned"}
                onChange={(e) => setResidential(e.target.value)}
              />
              <span className="w-20">Owned</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="residential"
                value="rented"
                checked={residential === "rented"}
                onChange={(e) => setResidential(e.target.value)}
              />
              <span>Rented</span>
            </label>
          </div>
        </div>

        {/* PAN */}
        <div className="input-feaild">
          <label className="block mb-2 font-medium text-gray-700">
            PAN Card Number
          </label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPanNumber(e.target.value)}
            className="input-data"
            maxLength={10}
            required
          />
        </div>

        {/* Submit */}
        <div className="text-center input-feaild">
          <ShowApplyFormBtn setOpen={setOpen} />
        </div>
      </form>
    </div>
  );
}
