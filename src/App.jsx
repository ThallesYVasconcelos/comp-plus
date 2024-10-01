import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Programs from './components/home/programs';
import Events from './components/home/events';
import Resources from './components/resources/resources';
import Partnerships from './components/partnership/partnership';
import Donations from './components/donations/donations'; 
import Contact from './components/contact/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
