import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favas from "../assets/img/home/3.jpeg";
import Fayis from "../assets/img/home/banner1.jpg";
import Nithin from "../assets/img/home/banner2.jpg";
import Rahof from '../assets/img/home/2.jpeg';
import Marquee from "react-fast-marquee";
import '../style/banner.css';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current)
  };
  const marqueeContent = [
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "#" },
    { text: "I can be another link", link: "#" },
    { text: "Or just some text", link: "#" }
  ];

  return (
    <div className="">
      <section className="banner pt-0">
        <div className="overflow-hidden ">
          <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide">
                  <div className={`banner-content ${currentSlide === index ? 'active' : ''}`}>
                    <h1 className="text-xl-semibold">{d.name}</h1>
                    <h1 className="text-xl-semibold">{d.name1}</h1>
                  </div>
                  <img src={d.img} alt={d.name} className="banner-img" />
                </div>
              ))}
            </Slider>
            <div className="marquee">
              <div className="marquee-top">
              <div className="marquee-cont">Notifications</div>
              </div>
              <Marquee >
                {marqueeContent.map((item, index) => (
                  <a key={index} href={item.link}>{item.text}</a>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


const data = [
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Nithin,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Fayis,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Favas,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Rahof,
  },
];

export default Banner;
