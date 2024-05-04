import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../style/aboutpage.css';
import S1 from '../assets/img/main/10.jpg';
import S2 from '../assets/img/main/12.jpg';
import S3 from '../assets/img/main/9.jpg';
import S4 from '../assets/img/main/7.jpg';


function CourseDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      imageUrl: S1,
      name: 'Muhammed Nihad',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    {
      imageUrl: S2,
      name: 'shanavas ',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    {
      imageUrl: S3,
      name: 'Muhammed Jihad',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    {
      imageUrl: S4,
      name: 'Riyas ',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
  ];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='course-details'>
      <section>
        <div className='container'>
          {courses.map((course, index) => (
            <div key={index} className={`row border-bottom align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} onClick={() => handleShowModal(course)}>
              <div className={`col-md-12 col-lg-6 col-12 py-3 mb-3`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-offset="10">
                <div className="post-img">
                  <img
                    className='blog-img'
                    src={course.imageUrl}
                    alt={course.name}
                  />
                </div>
              </div>
              <div className={`col-md-12 col-lg-6 py-3`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-offset="10">
                <div className="post-details">
                  <h5 className='text-uppercase'>{course.name}</h5>
                  <h6 className='text-l-green truncate'>{course.date}</h6>
                  <p className='truncate-6 text-justify'>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedCourse && (
        <Modal className='blog-modal' show={showModal} onHide={handleCloseModal} size='lg' centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="text-center">
                <img className='blog-img' src={selectedCourse.imageUrl} alt={selectedCourse.name} />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className='text-bold'>{selectedCourse.name}</h4>
            <span className='text-l-green '>{selectedCourse.date}</span>
            <p className='mt-3'>{selectedCourse.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default CourseDetails;
