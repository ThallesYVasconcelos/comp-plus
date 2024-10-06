import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles-programs.css';
import Hackhaton from '../../assets/hackathon.jpg';
import BolsaEstudos from '../../assets/bolsas-de-estudo.png';
import Treinamento from '../../assets/treinamento.png';
import Inclusao from '../../assets/inclusaoDigital.jpg';

const ProgramsHighlights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="program-highlights">
      <Slider {...settings}>
        <div className="card">
          <img src={BolsaEstudos} alt="Programa de bolsa de estudo" />
        </div>
        <div className="card">
          <img src={Hackhaton} alt="Hackaton" />
        </div>
        <div className="card">
          <img src={Treinamento} alt="Iniciação Científica" />
        </div>
        <div className="card">
          <img src={Inclusao} alt="Inclusão digital" />
        </div>
      </Slider>
    </section>
  );
}

export default ProgramsHighlights;
