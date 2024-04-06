import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favas from "../../src/assets/img/team/Favas.jpg"
import Fayis from "../../src/assets/img/team/fayis.jpg"
import Nithin from "../../src/assets/img/team/nithin.jpg"

import "../style/testimonial.css"

function Testimonial() {
    const settings = {
        infinite: true,
        speed: 300,
        autoplay:false,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        arrows:true,
        slidesToScroll: 1,
      };
  return (
    <div>
      <section className="testimonial">
        <div className="container">
         <div className="w-3/4 m-auto overflow-hidden rounded-20">
          <div className='mt-20'>
           <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='bg-l-blue gap-6' data-aos="fade-up">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className='testi-head flex justify-center items-center'>
                      <img src={d.img} alt='d.img' className='test-img img-fluid'/>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className='testi-cont flex flex-col justify-center items-center '>
                      <h4 className='text-xl-semibold'>{d.name}</h4>
                      <h5 className='text-xl-semibold'>{d.possion}</h5>
                      <p className='trancate-5'>{d.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
           </Slider>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
const data = [
    {
      name:'Favas',
      img:Favas,
      review: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      possion:'CEO'
     
    },
    {
      name:'fayis',
      img: Fayis,
      review: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      possion:'CMO'
    },
    {
        name:'Nithin',
        img: Nithin,
        review: 'Lorem Ipsum has been the industrys standard dmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
        possion:'MANAGER'

      },
  
  ]
export default Testimonial;
