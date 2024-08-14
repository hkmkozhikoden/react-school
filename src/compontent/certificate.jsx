import React from 'react'
import '../style/certifiacate.css'
import CertificateImg from'../assets/img/img/img-2.jpeg'
function Certificate() {
  return (
    <div>
      <section className='certificate'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-4" data-aos="fade-down" data-aos-offset="10"> 
                    <h2 className='text-l-green cont'>
                   <span className='font-weight-bold'> GET</span> TO KNOW JDT
                    </h2>
                </div>
             <div className="col-12">
             <div className="row mt-4">
               <div className="col-xl-4 col-lg-5 col-md-5 mb-2 mb-md-0" data-aos="fade-right" data-aos-offset="10"> 
                  <div className="card-head bg-l-green">
                    <h2 className="title">Award ceremony</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum doloremque ex nulla officia! Officia ex facere  eos     asperiores a!</p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet voluptates aspernatur magnam reiciendis eaque eum nostrum  sed  similique fuga. Atque.</p>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-7">
                    <div className="certificate-img" >
                        <img alt='certificate' src={CertificateImg} className="img-fluid award-img rounded-10"  data-aos="zoom-out-left" data-aos-offset="10"/>
                    </div>
                </div>
               </div>
             </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Certificate
