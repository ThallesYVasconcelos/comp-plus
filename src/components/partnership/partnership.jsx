import React from 'react';
import './parcerias.css';
import empresa1 from '../../assets/empresa1.png';
import empresa2 from '../../assets/empresa2.png';
import empresa3 from '../../assets/empresa3.png';

const Parcerias = () => {
  return (
    <div className="partnerships-container">
      <h1>Parcerias</h1>

      <section className="our-partners">
        <h2>Nossos Parceiros</h2>
        <div className="partners-list">
          <div className="partner-item">
            <img src={empresa1} alt="Logo do Parceiro 1" />
            <h3>Empresa Tech XYZ</h3>
            <p>
              Empresa líder em soluções tecnológicas, colaborando conosco em projetos de inovação.
            </p>
          </div>
          <div className="partner-item">
            <img src={empresa2} alt="Logo do Parceiro 2" />
            <h3>Instituto de Pesquisa ABC</h3>
            <p>
              Instituição dedicada à pesquisa científica e desenvolvimento tecnológico.
            </p>
          </div>
          <div className="partner-item">
            <img src={empresa3} alt="Logo do Parceiro 3" />
            <h3>Startup Inovadora 123</h3>
            <p>
              Startup focada em soluções disruptivas para a área de computação.
            </p>
          </div>
        </div>
      </section>

      <section className="become-partner">
        <h2>Como se Tornar um Parceiro</h2>
        <p>
          Se sua empresa ou instituição está interessada em colaborar conosco, estamos abertos a novas parcerias que promovam a inovação e o desenvolvimento tecnológico.
        </p>
        <p>
          Entre em contato conosco através do e-mail <a href="mailto:parcerias@compplus.org.br">parcerias@compplus.org.br</a> ou preencha o formulário abaixo, e nossa equipe entrará em contato para discutir oportunidades de colaboração.
        </p>
        <div className="partner-form">
          <h3>Formulário de Interesse</h3>
          <form>
            <label htmlFor="company-name">Nome da Empresa/Instituição</label>
            <input type="text" id="company-name" name="company-name" placeholder="Digite o nome" required />

            <label htmlFor="contact-name">Nome do Contato</label>
            <input type="text" id="contact-name" name="contact-name" placeholder="Seu nome" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Escreva sua mensagem..." required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="partnership-benefits">
        <h2>Benefícios das Parcerias</h2>
        <ul className="benefits-list">
          <li>
            <h3>Acesso a Talentos</h3>
            <p>
              Conecte-se com profissionais qualificados e talentos emergentes na área de computação.
            </p>
          </li>
          <li>
            <h3>Visibilidade</h3>
            <p>
              Aumente a exposição da sua marca através de eventos, publicações e projetos conjuntos.
            </p>
          </li>
          <li>
            <h3>Impacto Social</h3>
            <p>
              Contribua para iniciativas que promovem a inclusão digital e o avanço tecnológico na sociedade.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Parcerias;
