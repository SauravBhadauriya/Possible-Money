import React, { useState } from "react";
import Apply from "../../components/Application/Apply";
import CTA from "../../components/CTA/CTA";
import EMICalculator from "../../components/Calculaor/calculator";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import ApplyFormUi from "../../components/Form/ApplyFormUi";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Navbar from "../../components/Navbar/Navbar";
import LogoCarousel from "../../components/Partners/LogoCarousel";
import Review from "../../components/Review/Review/Review";
import Trust from "../../components/Trust/Trust";
import WhyWeChose from "../../components/WhyWeChose/WhyWeChose";
import "./Home.css";

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      {open && <ApplyFormUi setOpen={setOpen} />}

      <Navbar setOpen={setOpen} />
      <HeroBanner />
      <LogoCarousel />
      <EMICalculator setOpen={setOpen} />
      <Trust />
      <Cards />
      <WhyWeChose />
      <Apply />
      <Review />
      <CTA setOpen={setOpen} />
      <Footer />
    </div>
  );
};

export default Home;
