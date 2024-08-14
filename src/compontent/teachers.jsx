import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/img/teachers/1.jpg';
import Img2 from '../assets/img/teachers/2.jpg';
import Img3 from '../assets/img/teachers/3.jpg';
import Img4 from '../assets/img/teachers/4.jpg';
import Img5 from '../assets/img/teachers/5.jpg';
import Img6 from '../assets/img/teachers/6.jpg';
import Img7 from '../assets/img/teachers/7.jpg';
import Img8 from '../assets/img/teachers/8.jpg';
import Img9 from '../assets/img/teachers/9.jpg';
import Img10 from '../assets/img/teachers/10.jpg';
import '../style/teacher.css'

const Teachers = () => {
    const productData =[
        {
          id:1,
          image:Img1,
          name:"SHERMILLA. V",
          desc:"Principal",        
      },
      {
        id:2,
        image:Img2,
        name:"SABEERA.P P",
        desc:"Vice Principal",       
    },    
    {
      id:3,
      image:Img10,
      name:"REMYA.P K",
      desc:"Special Educator",       
  },      
    {
        id:4,
        image:Img4,
        name:"NOORJAHAN.M",
        desc:"Special Educator",   
    },
    {
        id:5,
        image:Img5,
        name:"BADARIYA.M K",
        desc:"Special Educator",
    },
    {
      id:6,
      image:Img6,
      name:"JIJI.C K",
      desc:"Special Educator",
    },
    {
      id:7,
      image:Img7,
      name:"RUGMA.T",
      desc:"Special Educator",
    }, {
      id:8,
      image:Img8,
      name:"ROOPA.K",
      desc:"Special Educator",
    }, 
    {
      id:9,
      image:Img9,
      name:"SINI.M G",
      desc:"Special Educator",
    },
    {
      id:10,
      image:Img3,
      name:"MEERA VARGHESE",
      desc:"SpeechTherapist",       
  },
  
      
    ]
    var settings = {
      arrows:true,
      autoplay:true,
      autoplaySpeed: 2000,
      focusOnHover:true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
      <section className='mt-3 teacher'>
        <div className='container'>
          <div className="col-12">
            <h2 className="ment-head">Mentors</h2>
          </div>
        <Slider {...settings}>
          {productData.map((item, index) => (
              <div key={index} className="col-12" data-aos="fade-up" data-aos-offset="10">
              <div className="card-teacher mb-3">
              <div className="teacher-card">
                <div className="teacher-img">
                <img src={item.image} alt={item.name} className="gallery-image" />
                </div>
                <div className='teacher-info'>
                    <h4>{item.name}</h4>
                    <h6>{item.desc}</h6>
                  </div>
              </div>
              </div>
            </div>
           ))}
        </Slider>
        </div>
      </section>
    </div>
  )
}

export default Teachers
