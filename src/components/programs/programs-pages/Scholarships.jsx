import React from 'react';
import { Link } from 'react-router-dom';
import scholarshipImage from '../../../assets/bolsas-de-estudo.png'; 
import '../styles-programs.css';
const Bolsa = () => {
  return (
    <div className="program-page-card">
      <img src={scholarshipImage} alt="Bolsa de Estudos" className="program-page-image" />
      <h3>Bolsas de Estudos</h3>
      <p><strong>Descrição:</strong> Nossas bolsas de estudo oferecem suporte financeiro para alunos de diversas áreas.</p>
      <p><strong>Objetivos:</strong> Auxiliar estudantes talentosos a concluir seus estudos com apoio financeiro.</p>
      <p><strong>Público-alvo:</strong> Estudantes de baixa renda e com excelente desempenho acadêmico.</p>
      <p><strong>Formas de Participação:</strong> Inscreva-se no site para verificar os critérios de elegibilidade.</p>
      <Link to="/programs/subscribe" className="inscreva-se-button">
        Inscreva-se
      </Link>
    </div>
  );
};

export default Bolsa;
