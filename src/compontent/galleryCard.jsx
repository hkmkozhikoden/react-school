import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Gallery1 from "../assets/img/gallery/1.jpeg";
import Gallery2 from "../assets/img/gallery/masjid.jpg";
import Gallery3 from "../assets/img/33.jpg";
import Gallery4 from "../assets/img/44.jpg";
import Gallery5 from "../assets/img/img/img13.jpg";
import Gallery6 from "../assets/img/home/banner1.jpg";
import Gallery7 from "../assets/img/home/banner2.jpg";
import Gallery8 from "../assets/img/home/2.jpeg";
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
  return (
    <section className="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-2 mt-2 mb-md-3 mt-md-3" data-aos="fade-up-right">
            <div className="gallery-card" >
              <Gallery className="W-100">
                <a
                  data-fancybox="gallery1"
                  className="gallery-image"
                  href={Gallery1}
                >
                  <img
                    src={Gallery1}
                    className="gallery-image"
                    alt="galley 3"
                  />
                  <span className="visually-hidden">View Image 1</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery2} className="gallery-image">
                  <span className="visually-hidden">View Image 2</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery3} className="gallery-image">
                  <span className="visually-hidden">View Image 3</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery4} className="gallery-image">
                  <span className="visually-hidden">View Image 4</span>
                </a>
              </Gallery>
              <div className="card-content">
                <h6 className="mt-3">JDT EMPOWERED WEAVES INAUGURAL SESSION</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2 mt-2 mb-md-3 mt-md-3" data-aos="flip-left">
            <div className="gallery-card">
              <Gallery className="W-100">
                <a
                  data-fancybox="gallery1"
                  className="gallery-image"
                  href={Gallery2}
                >
                  <img
                    src={Gallery2}
                    className="gallery-image"
                    alt="galley 3"
                  />
                  <span className="visually-hidden">View Image 1</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery3} className="gallery-image">
                  <span className="visually-hidden">View Image 2</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery4} className="gallery-image">
                  <span className="visually-hidden">View Image 3</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery5} className="gallery-image">
                  <span className="visually-hidden">View Image 4</span>
                </a>
              </Gallery>
              <div className="card-content">
                <h6 className="mt-3">JDT EMPOWERED WEAVES INAUGURAL SESSION</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2 mt-2 mb-md-3 mt-md-3" data-aos="fade-up-left">
            <div className="gallery-card">
              <Gallery className="W-100">
                <a
                  data-fancybox="gallery1"
                  className="gallery-image"
                  href={Gallery8}
                >
                  <img
                    src={Gallery8}
                    className="gallery-image"
                    alt="galley 3"
                  />
                  <span className="visually-hidden">View Image 1</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery4} className="gallery-image">
                  <span className="visually-hidden">View Image 2</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery6} className="gallery-image">
                  <span className="visually-hidden">View Image 3</span>
                </a>
                <a data-fancybox="gallery1" href={Gallery7} className="gallery-image">
                  <span className="visually-hidden">View Image 4</span>
                </a>
              </Gallery>
              <div className="card-content">
                <h6 className="mt-3">JDT EMPOWERED WEAVES INAUGURAL SESSION</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
