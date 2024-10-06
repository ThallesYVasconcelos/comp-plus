import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HackathonImage from '../../assets/hackathon.png';
import ConferenciaImage from '../../assets/Conferencia.png';

const Events = () => {
  const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,          
    slidesToShow: 1,      
    slidesToScroll: 1,    
    autoplay: true,       
    autoplaySpeed: 3000,  
  };

  return (
    <section className="events">
      <h2>Eventos e Workshops</h2>
      <Slider {...settings}>
        <div className="event-card">
          <img src={HackathonImage} alt="Hackathon de Inovação" />
          <h3>Hackathon de Inovação</h3>
          <p>Data: 15 de Novembro</p>
          <a href="/inscricao-hackathon">Inscreva-se agora</a>
        </div>
        <div className="event-card">
          <img src={ConferenciaImage} alt="Conferência de Inteligência Artificial" />
          <h3>Conferência de Inteligência Artificial</h3>
          <p>Data: 22 de Novembro</p>
          <a href="/inscricao-conferencia">Inscreva-se agora</a>
        </div>
      </Slider>
    </section>
  );
}

export default Events;
