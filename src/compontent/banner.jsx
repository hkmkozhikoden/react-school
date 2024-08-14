import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/img/home/3.jpeg";
import Banner2 from "../assets/img/main/10.jpg";
import Banner3 from "../assets/img/main/11.jpg";
import Banner4 from '../assets/img/main/2.jpg';
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
    img: Banner1,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner2,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner3,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner4,
  },
];

export default Banner;
