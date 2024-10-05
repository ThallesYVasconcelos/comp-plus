import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre Nós</Link></li>
          <li><Link to="/programs">Programas e Projetos</Link></li>
          <li><Link to="/events">Eventos</Link></li>
          <li><Link to="/resources">Recursos</Link></li>
          <li><Link to="/partnerships">Parcerias</Link></li>
          <li><Link to="/donations">Doações</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
