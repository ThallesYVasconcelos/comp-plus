import React from 'react';
import '../styles-programs.css';
import { Link } from 'react-router-dom';
import inclusionImage from '../../../assets/inclusaoDigital.jpg';

const DigitalInclusion = () => {
  return (
    <div className="program-page-card">
      <img src={inclusionImage} alt="Inclusão Social" className="program-page-image" />
      <h3>Inclusão Digital</h3>
      <p><strong>Descrição:</strong> Iniciativas de inclusão digital para integrar comunidades vulneráveis à tecnologia.</p>
      <p><strong>Objetivos:</strong> Oferecer acesso à tecnologia e capacitação digital.</p>
      <p><strong>Público-alvo:</strong> Comunidades em situação de vulnerabilidade que buscam inclusão digital.</p>
      <p><strong>Formas de Participação:</strong> Inscreva-se através do nosso site e participe dos programas de inclusão.</p>
      <Link to="/programs/subscribe" className="inscreva-se-button">
        Inscreva-se
      </Link>
    </div>
  );
};

export default DigitalInclusion;
