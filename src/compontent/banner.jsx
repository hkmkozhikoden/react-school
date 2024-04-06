import React from 'react';
import Border from '../assets/img/home/banner2.jpg';
import '../style/banner.css';
function Banner() {
  return (
    <section className='home banner align-items-center' style={{ backgroundImage: `url(${Border})` }}>
      <div className='banner-inner'>
        <div className='container'>
          <div className="col-xl-8 col-lg-8" data-aos="fade-down">
            <div className='headerContainer'>
              <h1>The Best Kindergarten School For Your Child</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
