// LogoCarousel.js
import React from "react";
// import HdfcLogo from "../../assets/Banklogo/hdfc.jpg"
// import BankLogo from "../../assets/Banklogo/hdfc.jpg";
// import BankLogo from "../../assets/Banklogo/sbi.jpg";
import "./LogoCarousel.css"; // add CSS below

const logos = [
  "https://www.wishfin.com/images/home-page/banks/1.jpg",
  "https://www.wishfin.com/images/home-page/banks/2.jpg",
  "https://www.wishfin.com/images/home-page/banks/3.jpg",
  "https://www.wishfin.com/images/home-page/banks/4.jpg",
  "https://www.wishfin.com/images/home-page/banks/6.jpg",
  "https://www.wishfin.com/images/home-page/banks/7.jpg",
  "https://www.wishfin.com/images/home-page/banks/8.jpg",
  "https://www.wishfin.com/images/home-page/banks/9.jpg",
  "https://www.wishfin.com/images/home-page/banks/10.jpg",
  "https://www.wishfin.com/images/home-page/banks/11.jpg",
  "https://www.wishfin.com/images/home-page/banks/12.jpg",
  "https://www.wishfin.com/images/home-page/banks/13.jpeg",
  // update with your logo paths
];

function LogoCarousel() {
  // Duplicate list for seamless scroll
  const logoList = [...logos, ...logos];
  return (
      <div className="carousel-container">
        <h3>
          Our Partners <br />
          Get on board with us & unlock financial freedom
        </h3>
        <div className="carousel-track">
          {logoList.map((src, idx) => (
            <img
              src={src}
              alt="Bank logo"
              key={idx}
              className="carousel-logo"
            />
          ))}
        </div>
      </div>
  );
}

export default LogoCarousel;
