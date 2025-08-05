import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Home from './pages/home';
import React, { useEffect } from 'react';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact-us';
import Faqs from './pages/faqs';
import Courses from './pages/courses';



export default function App() {
  useEffect(() => {
    AOS, init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className=" max-w-full min-h-screen">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/courses' element={<Courses/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
