import React from 'react';
import { Link } from 'react-router-dom';

import trainingImage from '../../../assets/treinamento.png'; 
import '../styles-programs.css';

const Training = () => {
  return (
    <div className="program-page-card">
      <img src={trainingImage} alt="Treinamento" className="program-page-image" />
      <h3>Treinamentos</h3>
      <p><strong>Descrição:</strong> Oferecemos uma variedade de treinamentos práticos e teóricos para capacitar alunos.</p>
      <p><strong>Objetivos:</strong> Desenvolver habilidades e preparar alunos para o mercado de trabalho.</p>
      <p><strong>Público-alvo:</strong> Alunos e profissionais que desejam aprimorar seus conhecimentos.</p>
      <p><strong>Formas de Participação:</strong> Inscreva-se em nossos cursos disponíveis no site.</p>
      <Link to="/programs/subscribe" className="inscreva-se-button">
        Inscreva-se
      </Link>
    </div>
  );
};

export default Training;
