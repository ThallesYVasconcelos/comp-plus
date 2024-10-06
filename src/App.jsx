import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Programs from './components/programs/programs';
import Events from './components/home/events';
import Resources from './components/resources/resources';
import Partnerships from './components/partnership/partnership';
import Donations from './components/donations/donations'; 
import Contact from './components/contact/contact';
import Scholarships from './components/programs/programs-pages/Scholarships';
import Training from './components/programs/programs-pages/Training';
import Hackathons from './components/programs/programs-pages/Hackathons';
import DigitalInclusion from './components/programs/programs-pages/DigitalInclusion';
import Subscribe from './components/programs/programs-pages/formSubscribre';

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
        <Route path="/programs/scholarships" element={<Scholarships />} />
        <Route path="/programs/training" element={<Training />} />
        <Route path="/programs/hackathons" element={<Hackathons />} />
        <Route path="/programs/digital-inclusion" element={<DigitalInclusion />} />
        <Route path="/programs/subscribe" element={<Subscribe />} />      
      </Routes>
    </Router>
  );
}

export default App;
