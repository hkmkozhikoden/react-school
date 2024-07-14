import React from 'react'
import '../style/footer.css';
import { Link } from "react-router-dom";
import Instagragm from "../assets/img/img/insta.png";
import Linkedin from "../assets/img/img/in.png";
import Twitter from "../assets/img/img/twitter.png";
import Facebook from '../assets/img/img/fb.png';
import Logo from '../assets/logo/logo-t.png'
import Map from '../assets/img/img/location.png';
import Phone from '../assets/img/img/phone.png';
import SMS from '../assets/img/img/sms.png';

function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="logo">
              <img className='logo' src={Logo} alt="logo" />
            </div>
            <p className='sec-dec fs-14 px-2'>
            JDT Islam Orphanage & Educational Institutions, established in 1922, is a charitable educational institution. The institution works for the welfare, care and upliftment of orphaned and destitute children.
            </p>
            <div className='social'>
              <img alt='insta' className='social-media-links' src={Instagragm}></img>
              <img alt='Facebook' className='social-media-links' src={Facebook}></img>
              <img alt='Linkedin' className='social-media-links' src={Linkedin}></img>
              <img alt='Twitter' className='social-media-links' src={Twitter}></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
          <h3 className="widget-title">Explore</h3>
          <ul className='footer-contact'>
          <Link to={"/"}> <li > Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/blogs"}><li>Blog</li></Link>
          <Link to={"/gallery"}><li>Gallery</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          </ul>
          </div>
          <div className="col-lg-3">
          <h3 className="widget-title">Contact</h3>
         <ul className='contact-right'>
         <li>
          <div className="d-flex align-items-center">
          <img alt='adress' src={Map} className="cont-icons" />
            <div className="block ms-2">
              <a>JDT Islam, Jamiath Hill,
                Marikunnu P O, Calicut - 12,
                Kerala, India
              </a>
            </div>
          </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
            <img alt='adress' src={Phone} className="cont-icons" />
              <div className="d-block ms-2">
              <a  className='d-block' href="tel:+91 4952 731 420">+91 4952 731 420</a>
              <a  className='d-block' href="tel:+91 6282 014 275">+91 6282 014 275</a>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
            <img alt='sms' src={SMS} className="cont-icons" />
              <div className="d-block ms-2">
              <a className='d-block' href="mailto:jdtislamclt12@gmail.com">jdtislamclt12@gmail.com</a>
              <a className='d-block' href="mailto:info@jdtislam.org">info@jdtislam.org</a>
              </div>
            </div>
          </li>
         </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
