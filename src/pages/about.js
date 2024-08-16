import React from 'react'
import '../style/about.css'
import AboutUs from '../compontent/aboutus'
import Funfact from '../compontent/funfac'
import Teachers from '../compontent/teachers'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
import AboutBanner from '../compontent/about-banner'
function About() {
  return (
    <div className='about'>
      <Navbar/>
       <AboutBanner/>
       <AboutUs/>
       <Funfact/>
       <Teachers/>
       <Footer />
    </div>
  )
}

export default About
