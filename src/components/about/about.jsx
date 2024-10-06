import React from 'react';
import './about.css';
import member1 from '../../assets/member1.png';  
import member2 from '../../assets/member2.png';  

function About() {
  return (
    <div className="about-page">
      <section className="history-mission">
        <h2>História e Missão</h2>
        <p>
          Desde a sua fundação em 2012, a Fundação COMP+ tem se comprometido a impulsionar a inovação e a pesquisa científica. Atuamos como um suporte essencial para Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas, facilitando a execução de projetos que buscam transformar conhecimento em soluções práticas.
        </p>
        <p>
          Nossa missão é alcançar excelência em gestão administrativa e financeira, sempre guiados pelos princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência. Trabalhamos incansavelmente para garantir que cada projeto que apoiamos não só atenda aos requisitos legais, mas também impacte positivamente a sociedade.
        </p>
        <p>
          Estamos dedicados a proteger os interesses das instituições que atendemos, promovendo um ambiente de colaboração e competência profissional entre nossos colaboradores, assegurando que nossas operações sejam realizadas com total transparência e integridade.
        </p>
      </section>

      <section className="team-governance">
        <h2>Equipe e Governança</h2>
        <div className="team-members">
          <div className="member">
            <img src={member1} alt="Thalles Vasconcelos" />
            <h3>Thalles Vasconcelos</h3>
            <p>CEO</p>
          </div>
          <div className="member">
            <img src={member2} alt="Luiz Abrantes" />
            <h3>Luiz Abrantes</h3>
            <p>CEO</p>
          </div>
        </div>
      </section>

      <section className="reports-transparency">
        <h2>Relatórios e Transparência</h2>
        <p>
          Para garantir a transparência de nossas atividades e resultados, disponibilizamos nossos relatórios anuais e políticas. Acesse os documentos abaixo para saber mais sobre nosso impacto e comprometimento com a excelência.
        </p>
        <ul>
          <li><a href="/assets/reports/relatorio2022.pdf" target="_blank" rel="noopener noreferrer">Relatório Anual 2022</a></li>
          <li><a href="/assets/policies/politicas.pdf" target="_blank" rel="noopener noreferrer">Políticas e Procedimentos</a></li>
        </ul>
      </section>
    </div>
  );
}

export default About;
