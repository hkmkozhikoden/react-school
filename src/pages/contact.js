
import '../style/contact.css'
import ContactInfo from '../compontent/contactinfo';
import {useState} from 'react';
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
import ContactBanner from '../compontent/contact-banner';
function Contact() {
  const [loading,setLoading]=useState(false);
  return (
    <div className='contact'>
      <Navbar />
      <ContactBanner/>
      <ContactInfo loading={loading} onClick={() => setLoading(!loading)}
      ></ContactInfo>
      <Footer></Footer>
    </div>

  )
}

export default Contact
