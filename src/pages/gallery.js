import React from 'react'
import GalleryCard from '../compontent/galleryCard'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
import GalleryBanner from '../compontent/gallery-banner';
function Gallery() {
  return (
    <div className='main-Gallery'>
        <Navbar></Navbar>
        <GalleryBanner/>
        <GalleryCard/>
        <Footer></Footer>
    </div>
  )
}

export default Gallery
