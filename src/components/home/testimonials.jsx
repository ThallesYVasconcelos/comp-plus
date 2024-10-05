import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Depoimentos e Impacto</h2>
      <div className="testimonial-card">
        <i className="fas fa-quote-left"></i>
        <p>"A Fundação COMP+ proporcionou as ferramentas necessárias para eu me destacar no mercado de trabalho. Uma verdadeira mudança de vida!"</p>
        <h4>- João Silva</h4>
      </div>
      <div className="testimonial-card">
        <i className="fas fa-quote-left"></i>
        <p>"Participar dos workshops e eventos me abriu as portas para o mundo da inovação. Aprendi a pensar fora da caixa!"</p>
        <h4>- Maria Souza</h4>
      </div>
      <div className="testimonial-card">
        <i className="fas fa-quote-left"></i>
        <p>"A oportunidade de fazer parte da Iniciação Científica foi o primeiro passo para eu seguir a carreira acadêmica que sempre sonhei."</p>
        <h4>- Pedro Lima</h4>
      </div>
    </section>
  );
}

export default Testimonials;
