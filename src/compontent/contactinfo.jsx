import React from 'react';
import Phone from '../assets/img/img/phone.png';
import SMS from '../assets/img/img/sms.png';
import Address from '../assets/img/img/location.png';
import MapContainer from '../compontent/map';

function ContactInfo () {
  return (
    <div>
      <section className="contact_us">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="contact_inner" data-aos="fade-down" data-aos-offset="10">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field" >
                                        <h3>Contatc Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" required />
                                        <input type="email" className="form-control form-group" placeholder="Email" required />
                                        <input type="Number" className="form-control form-group" placeholder="Phone Number" required />

                                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 h-sm-none">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                              
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec text-white">
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <img alt='phone' src={Phone} className="cont-icons" />
                                <span>
                                  <a href="tel:+914952731420" className="text-white">Phone: +91 4952 731 420</a>
                                </span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <img alt='sms' src={SMS} className="cont-icons" />
                                <span>
                                 <a className='text-white' href="mailto:info@jdtislam.org">Email: info@jdtislam.org</a>
                                </span>
                                <br />
                            </div>
                            <div className="d-flex info_single">
                                <img alt='adress' src={Address} className="cont-icons" />

                                <span>Address: JDT Islam, Jamiath Hill, Marikunnu P O, Calicut - 12, Kerala, India</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
            <MapContainer></MapContainer>
        </div>
    </section>
    </div>
  );
};
export default ContactInfo;
