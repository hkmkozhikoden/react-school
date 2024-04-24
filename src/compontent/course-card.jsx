import React from 'react'
import '../style/course-card.css'
import Card1 from "../../src/assets/img/home/card-1.jpg";
import Card3 from "../../src/assets/img/home/card-3.jpg";
import Card4 from "../../src/assets/img/home/card-4.jpg"

function CourseCard() {
  return (
    <section className='standered-section'>
      <div className="col-12">
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-6" data-aos="zoom-in-right" data-aos-offset="10">
                    <div className="sm-card">
                        <img alt='card' src={Card1} className="img-fluid" />
                        <div className="head">
                            <h2 className='text-center text-white'>
                                Entrol
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-offset="10">
                    <div className="sm-card">
                        <img alt='card' src={Card3} className="img-fluid" />
                       <div className="head">
                        <h2 className='text-center text-white'>
                            Teach
                        </h2>
                       </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-offset="10">
                    <div className="sm-card">
                        <img alt='card' src={Card3} className="img-fluid" />
                       <div className="head">
                        <h2 className='text-center text-white'>support</h2>
                       </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in-left" data-aos-offset="10">
                    <div className="sm-card">
                        <img alt='card' src={Card4} className="img-fluid" />
                       <div className="head">
                        <h2 className='text-center text-white'>Grow</h2>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default CourseCard
