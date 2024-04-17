import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Slidera from '../assets/img/22.jpg';
import Sliderb from '../assets/img/11.jpg';
import Sliderc from '../assets/img/33.jpg';
import Sliderd from '../assets/img/44.jpg';
import '../style/blog-slider.css';

function BlogSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slickNav = useRef(null);
  let slickFor = useRef(null);

  useEffect(() => {
    setNav1(slickNav);
    setNav2(slickFor);
  }, []);
  const slidesContent = [
    { imgSrc: Slidera, title: "Content 1", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Sliderb, title: "Content 2", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Sliderc, title: "Content 3", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Sliderd, title: "Content 4", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" }

  ];

  return (
    <section>
      <div className="slider-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4" data-aos="fade-right" data-aos-offset="10">
              <Slider asNavFor={nav2} ref={slider => (slickNav = slider)} dots={true} arrows={false} 
              focusOnHover={true} 
              focusOnSelect={true}>
                {slidesContent.map((slide, index) => (
                  <div key={index}>
                    <div className="mx-2">
                      <div className="blog-cont">
                        <h3>{slide.title}</h3>
                        <h6 className="text-l-green">{slide.date}</h6>
                        <p>{slide.description}</p>
                        <Link to={"/blogs"}>
                        <button className="btn-read-more"> Read More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-md-8" data-aos="fade-left" data-aos-offset="10">
              <Slider
                asNavFor={nav1}
                ref={slider => (slickFor = slider)}
                slidesToShow={2}
                swipeToSlide={true}
                focusOnSelect={true}
                focusOnHover={true}
                autoplay={true}
                autoplaySpeed={3000}
                dots={true}>
               {slidesContent.map((slide, index) => (
                  <div key={index}>
                    <div className="mx-2">
                      <img src={slide.imgSrc} className="img-fluid blog-slide-img rounded-5" alt={`slider img ${index}`} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSlider;
