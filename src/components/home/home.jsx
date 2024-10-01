import React from 'react';
import Navbar from '../navbar.jsx'; // Corrigido o caminho
import Hero from './hero.jsx';
import About from './about.jsx';
import Programs from './programs.jsx';
import Events from './events.jsx';
import Testimonials from './testimonials.jsx';
import Footer from '../footer.jsx'; // Certifique-se que o caminho do footer está correto também
import '../styles.css';

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
