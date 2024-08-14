import React from 'react'
import CouseDtails from '../compontent/couse-details'
import PageBanner from '../compontent/pagebanner';
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function Course1() {
  return (
    <div className='Couse-page'>
        <Navbar></Navbar>
        <PageBanner>
        </PageBanner>
        <CouseDtails>
        </CouseDtails>
        <Footer></Footer>
    </div>
  )
}

export default Course1
