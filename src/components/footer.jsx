import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#programs">Programas</a></li>
            <li><a href="#events">Eventos</a></li>
            <li><a href="#donations">Doações</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: contato@comp+.org</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>
        <div className="footer-newsletter">
          <h4>Assine Nossa Newsletter</h4>
          <form>
            <input type="email" placeholder="Seu email" />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fundação COMP+. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
