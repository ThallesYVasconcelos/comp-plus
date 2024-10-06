import React from 'react';
import InovacaoImage from '../../assets/programa-inovação.jpg';
import WorkshopImage from '../../assets/Workshop.png';
import IniciacaoImage from '../../assets/Iniciacao.png';
import HackathonImage from '../../assets/hackathon.jpg';

const Programs = () => {
  return (
    <section className="program-summary">
      <h2>Nossos Programas</h2>
      <div className="program-grid">
        <div className="program-card">
          <img src={InovacaoImage} alt="Programa de Inovação" />
          <div className="program-info">
            <h3>Inovação</h3>
            <p>Solucione desafios com tecnologia.</p>
            <a href="/programa-inovacao" className="program-link">Saiba Mais</a>
          </div>
        </div>

        <div className="program-card">
          <img src={WorkshopImage} alt="Workshops Tecnológicos" />
          <div className="program-info">
            <h3>Workshops</h3>
            <p>Aprenda sobre novas tecnologias.</p>
            <a href="/workshops" className="program-link">Saiba Mais</a>
          </div>
        </div>

        <div className="program-card">
          <img src={IniciacaoImage} alt="Iniciação Científica" />
          <div className="program-info">
            <h3>Iniciação Científica</h3>
            <p>Projetos acadêmicos em destaque.</p>
            <a href="/iniciacao-cientifica" className="program-link">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Programs;
