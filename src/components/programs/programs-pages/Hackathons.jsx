import React from 'react';
import { Link } from 'react-router-dom';

import hackathonImage from '../../../assets/hackathon.jpg'; 
import '../styles-programs.css';

const Hackathons = () => {
  return (
    <div className="program-page-card">
      <img src={hackathonImage} alt="Hackathon" className="program-page-image" />
      <h3>Hackathons</h3>
      <p><strong>Descrição:</strong> Participe de nossos hackathons para resolver desafios do mundo real em um curto período.</p>
      <p><strong>Objetivos:</strong> Promover a inovação e a colaboração entre profissionais e estudantes.</p>
      <p><strong>Público-alvo:</strong> Programadores, designers e criativos que buscam uma experiência intensa e colaborativa.</p>
      <p><strong>Formas de Participação:</strong> Inscreva-se para participar do próximo hackathon através do nosso site.</p>
      <Link to="/programs/subscribe" className="inscreva-se-button">
        Inscreva-se
      </Link>
    </div>
  );
};

export default Hackathons;
