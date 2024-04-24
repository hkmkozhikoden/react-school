
import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Gallery from "./pages/gallery";
import './style/boostrap/bootstrap.css';
import About from './pages/about';
import Contact from './pages/contact';
import Course1 from './pages/course1';
import React, { useEffect } from 'react';
import AOS from 'aos';
import './style/modules/aos.css';

import ScrollToTop from "./compontent/scrolltop";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);
  return (
    <div>
       <Router> 
       <ScrollToTop />    
    <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Course1/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/gallery" element={<Gallery/>} />
    </Routes>
    </Router>
    </div>
  );
}
export default App;

