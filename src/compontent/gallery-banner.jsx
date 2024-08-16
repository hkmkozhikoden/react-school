import React from 'react'
import '../style/pagebanner.css'
function GalleryBanner() {
  return (
   <div>
     <section className='page_banner'>
        <div className='container'>
            <div className="content text-white page-banner-content" data-aos="fade-down" data-aos-offset="10">
            <h3>Gallery</h3>
            <h6 className='mt-3 mb-3'><span className='text-l-white'>Home /</span> Gallery</h6>
            </div>
        </div>
    </section>
   </div>
  )
}

export default GalleryBanner
