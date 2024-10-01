import React from 'react';

const Events = () => {
  return (
    <section className="events" id="events">
      <h2>Próximos Eventos e Workshops</h2>
      <div className="event-list">
        <div className="event">
          <h3>Evento 1</h3>
          <p>Data: 10/10/2024</p>
          <a href="#">Inscreva-se</a>
        </div>
        <div className="event">
          <h3>Evento 2</h3>
          <p>Data: 15/11/2024</p>
          <a href="#">Inscreva-se</a>
        </div>
        <div className="event">
          <h3>Evento 3</h3>
          <p>Data: 05/12/2024</p>
          <a href="#">Inscreva-se</a>
        </div>
      </div>
    </section>
  );
}

export default Events;
