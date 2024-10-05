import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import InovacaoImage from '../../assets/programa-inovação.jpg';
import WorkshopImage from '../../assets/Workshop.png';
import IniciacaoImage from '../../assets/Iniciacao.png';

const Programs = () => {
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
    <section className="program-highlights">
      <h2>Destaques dos Programas</h2>
      <Slider {...settings}>
        <div className="card">
          <img src={InovacaoImage} alt="Programa de Inovação" />
          <h3>Programa de Inovação</h3>
          <p>Desenvolva soluções criativas para os maiores desafios da sociedade.</p>
          <a href="/programa-inovacao">Saiba Mais</a>
        </div>
        <div className="card">
          <img src={WorkshopImage} alt="Workshops Tecnológicos" />
          <h3>Workshops Tecnológicos</h3>
          <p>Participe de workshops práticos sobre tecnologia emergente.</p>
          <a href="/workshops">Saiba Mais</a>
        </div>
        <div className="card">
          <img src={IniciacaoImage} alt="Iniciação Científica" />
          <h3>Iniciação Científica</h3>
          <p>Fomente o conhecimento acadêmico com projetos de pesquisa.</p>
          <a href="/iniciacao-cientifica">Saiba Mais</a>
        </div>
      </Slider>
    </section>
  );
}

export default Programs;
