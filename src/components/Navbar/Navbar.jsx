import React, { useState } from "react";
import logo from "../../assets/logo.png"; 
import "./Navbar.css"
import { X } from "lucide-react";
import ApplyForm from "../Form/ApplyLoanForm";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-white  w-full shadow-md "> 
     <div className="container">
      <div className="
      relative w-full flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-25 mx-25" />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#process" className="nav-link">How It Works</a>
          <a href="#contact" className="nav-link">Contact</a>
          <ApplyForm/>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
</div>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-white bg-opacity-95 transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-full flex justify-end !p-8">
        <button onClick={()=>setMenuOpen(false)}><X/></button>
        </div>
        <div className="flex flex-col gap-4 items-center min-h-screen space-y-8 ">
          <a onClick={()=>setMenuOpen(false)} href="#services" className="nav-link text-xl">Services</a>
          <a onClick={()=>setMenuOpen(false)} href="#about" className="nav-link text-xl">About</a>
          <a onClick={()=>setMenuOpen(false)} href="#process" className="nav-link text-xl">How It Works</a>
          <a onClick={()=>setMenuOpen(false)} href="#contact" className="nav-link text-xl">Contact</a>
         <ApplyForm/>
        </div>
      </div>
      {/* Backdrop when menu is open */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-10 bg-black bg-opacity-20"></div>}
    </header>
  );
};

export default Navbar;



