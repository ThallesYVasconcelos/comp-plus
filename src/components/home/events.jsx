import React from 'react';
import HackathonImage from '../../assets/hackathon.jpg';
import ConferenciaImage from '../../assets/Conferencia.png';

const Events = () => {
  return(
    <section className="event-summary">
      <h2>Próximos Eventos</h2>
      <div className="event-grid">
        <div className="event-card">
          <img src={HackathonImage} alt="Hackathon de Inovação" />
          <div className="event-info">
            <h3>Hackathon de Inovação</h3>
            <p>Data: 15 de Novembro</p>
            <a href="/inscricao-hackathon" className="event-link">Inscreva-se agora</a>
          </div>
        </div>

        <div className="event-card">
          <img src={ConferenciaImage} alt="Conferência de Inteligência Artificial" />
          <div className="event-info">
            <h3>Conferência de IA</h3>
            <p>Data: 22 de Novembro</p>
            <a href="/inscricao-conferencia" className="event-link">Inscreva-se agora</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
