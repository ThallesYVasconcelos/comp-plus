import React from 'react';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <h3>COMP+ Newsletter</h3>
      <p>Assine nossa newsletter para receber atualizações sobre eventos e programas.</p>
      <form>
        <input type="email" placeholder="Seu email" />
        <button type="submit">Assinar</button>
      </form>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
