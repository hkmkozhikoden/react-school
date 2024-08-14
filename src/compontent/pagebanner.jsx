import React from 'react'
import '../style/pagebanner.css'
function PageBanner() {
  return (
   <div>
     <section className='page_banner'>
        <div className='container'>
            <div className="content text-white page-banner-content" data-aos="fade-down" data-aos-offset="10">
            <h3>Blog </h3>
            <h6 className='mt-3 mb-3'><span className='text-l-white'>Home /</span> Blog</h6>
            </div>
        </div>
    </section>
   </div>
  )
}

export default PageBanner
