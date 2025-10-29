import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Trust from '../../components/Trust/Trust';
import Cards from '../../components/Cards/Cards';
import Apply from '../../components/Application/Apply';
import WhyWeChose from '../../components/WhyWeChose/WhyWeChose';
import Review from '../../components/Review/Review/Review';
import CTA from '../../components/CTA/CTA';
import LogoCarousel from '../../components/Partners/LogoCarousel';
import EMICalculator from '../../components/Calculaor/calculator';
import ApplyFormUi from '../../components/Form/ApplyFormUi';
import ApplyForm from '../../components/Form/ApplyLoanForm';

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      {open && <ApplyFormUi setOpen={setOpen} />}

      <ApplyForm/>

      {/* सब कंपोनेंट्स में setOpen भेजो */}
      <Navbar setOpen={setOpen} />
      <HeroBanner />
      <LogoCarousel />
      <EMICalculator setOpen={setOpen} /> {/* ✅ EMI Calculator में भी भेजा */}
      <Trust />
      <Cards />
      <WhyWeChose />
      <Apply />
      <Review />
      <CTA setOpen={setOpen} />           {/* ✅ CTA में ही भेजा already */}
      <Footer />
    </div>
  );
};

export default Home;
