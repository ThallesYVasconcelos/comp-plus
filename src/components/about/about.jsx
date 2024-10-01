import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-page">
      <section className="history-mission">
        <h2>História e Missão</h2>
        <p>
          Fundada em 2012, a Fundação COMP+ oferece suporte administrativo a Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas para a execução de projetos voltados à pesquisa científica, desenvolvimento, inovação e prestação de serviços técnicos especializados.
        </p>
        <p>
          A COMP+ pretende alcançar excelência na gestão administrativa e financeira dos projetos e atividades que apoia, operando em estrita conformidade com os princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência.
        </p>
        <p>
          A fundação se dedica a proteger os interesses das instituições que apoia e a manter um alto nível de competência profissional entre seus colaboradores.
        </p>
      </section>

      <section className="team-governance">
        <h2>Equipe e Governança</h2>
        <div className="team-members">
          <div className="member">
            <img src="/assets/images/member1.jpg" alt="Nome do Membro 1" />
            <h3>Nome do Membro 1</h3>
            <p>Posição na Fundação</p>
          </div>
          <div className="member">
            <img src="/assets/images/member2.jpg" alt="Nome do Membro 2" />
            <h3>Nome do Membro 2</h3>
            <p>Posição na Fundação</p>
          </div>
        </div>
      </section>

      <section className="reports-transparency">
        <h2>Relatórios e Transparência</h2>
        <p>
          Acesse nossos relatórios anuais, políticas e declarações de impacto para saber mais sobre nossas atividades e resultados.
        </p>
        <ul>
          <li><a href="/assets/reports/relatorio2022.pdf" target="_blank">Relatório Anual 2022</a></li>
          <li><a href="/assets/policies/politicas.pdf" target="_blank">Políticas e Procedimentos</a></li>
        </ul>
      </section>
    </div>
  );
}

export default About;