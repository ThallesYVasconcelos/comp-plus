import React from 'react';

const EventDetails = () => {
    return (
      <section className="event-details">
        <h2>Detalhes dos Eventos</h2>
        <div className="event-detail-card">
          <h3>Conferência de Inteligência Artificial</h3>
          <p>Data: 22 de Novembro</p>
          <p>Local: Auditório Central</p>
          <p>Oradores: João Silva, Maria Oliveira</p>
          <p>Agenda: Discussões sobre IA no futuro da tecnologia.</p>
          <a href="/inscricao-conferencia">Inscreva-se agora</a>
        </div>
        <div className="event-detail-card">
          <h3>Hackathon de Inovação</h3>
          <p>Data: 15 de Novembro</p>
          <p>Local: Espaço de Coworking</p>
          <p>Oradores: Carlos Souza, Fernanda Lima</p>
          <p>Agenda: Desenvolvimento de soluções tecnológicas inovadoras.</p>
          <a href="/inscricao-hackathon">Inscreva-se agora</a>
        </div>
      </section>
    );
  }
export default EventDetails;
