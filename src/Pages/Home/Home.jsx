import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Trust from '../../components/Trust/Trust'
import Cards from '../../components/Cards/Cards'
import Apply from '../../components/Application/Apply'

import WhyWeChose from '../../components/WhyWeChose/WhyWeChose'
import Review from '../../components/Review/Review/Review'
import CTA from '../../components/CTA/CTA'
// import LoanCatagry from '../../components/LoanCatagry/LoanCatagry'
// import WhyWeBusiness from '../../components/WhyWeChose/WhyWeBusiness'
// import WhyWePersonal from '../../components/WhyWeChose/WhyWePersonal'


export const Home  = () => {
  return (
    <div className='home'>
      <Navbar/>
      <HeroBanner/>
      <Trust/>
      <Cards/>
      <WhyWeChose/>
      <Apply/>
      <Review/>
      <CTA/>
      {/* <WhyWeBusiness/> */}
      {/* <WhyWePersonal/> */}
      {/* <LoanCatagry/> */}
      <Footer/>

    </div>
  )
}
