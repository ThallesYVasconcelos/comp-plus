import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import Hero from './hero.jsx';
import About from './about.jsx';
import Programs from './programs.jsx';
import Events from './events.jsx';
import Testimonials from './testimonials.jsx';
import Footer from './footer.jsx';
import './styles.css';
import '../navbar/style-navbar.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
