import React from 'react';


const PastEventsArchive = () => {
    return (
      <section className="past-events">
        <h2>Arquivo de Eventos Passados</h2>
        <div className="past-event-card">
          <h3>Workshop de Desenvolvimento Web</h3>
          <p>Data: 1 de Outubro</p>
          <p>Resumo: Exploração das principais tecnologias web em 2024.</p>
          <a href="/gravação-workshop">Ver gravação</a>
        </div>
        <div className="past-event-card">
          <h3>Seminário sobre Segurança Cibernética</h3>
          <p>Data: 28 de Setembro</p>
          <p>Resumo: Discussão sobre estratégias de segurança online.</p>
          <a href="/gravação-seminario">Ver gravação</a>
        </div>
      </section>
    );
  }

export default PastEventsArchive;
