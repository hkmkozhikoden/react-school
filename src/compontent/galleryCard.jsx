
import React, { useState} from 'react';
import '../style/gallery.css';
import G1 from '../assets/img/home/banner2.jpg';
import G2 from '../assets/img/home/2.jpeg';
import G3 from '../assets/img/home/3.jpeg';
import G4 from '../assets/img/home/banner1.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      image:G1,
      description: 'JDT ISLAM SPECIAL SCHOOL ACTIVITIES',
    },
    {
      image:G2,
      description: 'JDT ISLAM SPECIAL SCHOOL ACTIVITIES',
    },  {
      image:G3,
      description: 'JDT ISLAM SPECIAL SCHOOL ACTIVITIES',
    },
    {
      image:G4,
      description: 'JDT ISLAM SPECIAL SCHOOL ACTIVITIES',
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'scroll'; 
  };
  return (
    <div className="gallery-main">
      <section className='gallery-card'>
      <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="image-container" onClick={() => openLightbox(index)}>
              <img src={item.image} alt={item.name} className="gallery-image" />
              <div className="image-info">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </section>
      {selectedImage !== null && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>×</span>
          <img src={data[selectedImage].image} alt={{selectedImage}} className="lightbox-image" />
          <div className="lightbox-info">
            {/* Add lightbox information here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;