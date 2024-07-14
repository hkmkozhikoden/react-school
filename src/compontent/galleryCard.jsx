import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Gallery1 from "../assets/img/main/1.jpg";
import Gallery2 from "../assets/img/main/2.jpg";
import Gallery3 from "../assets/img/main/3.jpg";
import Gallery4 from "../assets/img/main/4.jpg";
import Gallery5 from "../assets/img/main/5.jpg";
import Gallery6 from "../assets/img/main/6.jpg";
import Gallery7 from "../assets/img/main/7.jpg";
import Gallery8 from "../assets/img/main/8.jpg";
import Gallery9 from "../assets/img/main/9.jpg";
import Gallery10 from "../assets/img/main/10.jpg";
import Gallery11 from "../assets/img/main/11.jpg";
import Gallery12 from "../assets/img/main/12.jpg";

import "../style/gallery.css";

function Gallery(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]); // Include props.delegate and props.options in the dependency array

  return <div ref={containerRef}>{props.children}</div>;
}

function App() {
  // Define gallery data
  const galleryData = [
    {
      images: [Gallery1, Gallery2, Gallery3, Gallery4],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 1",
    },
    {
      images: [Gallery2, Gallery6, Gallery7, Gallery8],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 2",
    },
    {
      images: [Gallery3, Gallery10, Gallery11, Gallery12],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery5, Gallery3, Gallery4, Gallery1],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery6, Gallery2, Gallery1, Gallery3],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery7, Gallery5, Gallery7, Gallery8],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery8, Gallery3, Gallery4, Gallery11],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery9, Gallery2, Gallery1, Gallery12],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery10, Gallery5, Gallery7, Gallery10],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery4, Gallery3, Gallery4, Gallery11],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery11, Gallery2, Gallery1, Gallery12],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
    {
      images: [Gallery12, Gallery5, Gallery7, Gallery10],
      title: "JDT EMPOWERED WEAVES INAUGURAL SESSION 3",
    },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="row">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-2 mt-2 mb-md-3 mt-md-3"
              data-aos="fade-up"
            >
              <div className="gallery-card">
                <Gallery className="W-100">
                  {item.images.map((image, i) => (
                    <a key={i} data-fancybox={`gallery${index + 1}`} href={image} className="gallery-image">
                      {i === 0 && (
                      <div className="card-img">
                          <img
                          src={image}
                          className="gallery-image"
                          alt={`gallery ${index + 1}`}
                        />
                      </div>
                      )}
                      <span className="visually-hidden">View Image {i + 1}</span>
                    </a>
                  ))}
                </Gallery>
                <div className="card-content">
                  <h6 className="mb-0">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;