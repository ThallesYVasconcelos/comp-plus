import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contato</h1>

      <div className="contact-form">
        <h2>Envie-nos uma mensagem:</h2>
        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" />

          <label htmlFor="subject">Assunto</label>
          <input type="text" id="subject" name="subject" placeholder="Assunto" required />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Escreva sua mensagem..." required></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      <div className="contact-info">
          <p><strong>Endereço &#x1F3E0;:</strong>  Rua Aprígio, 882 - Universitário, Campina Grande - PB</p> 
          <p><strong>Telefone &#x1F4DE;:</strong>  (83) 99899-7771</p> 
          <p><strong>E-mail &#x2709;&#xFE0F;:</strong>  atendimento@compplus.org.br</p> 
      </div>


      
      <div className="contact-map">
        <h2></h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.207717131317!2d-35.91462521477124!3d-7.217131452252705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e2c7816c38f%3A0xd98e854f0b0d6fe1!2sUFCG%20-%20Campus%20Campina%20Grande!5e0!3m2!1spt-BR!2sbr!4v1728096048780!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
