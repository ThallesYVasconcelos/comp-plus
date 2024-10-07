import React from 'react';
import { Link } from 'react-router-dom';
import './styles-programs.css'; 
import hackathon from '../../assets/hackathon.jpg';
import BolsaEstudos from '../../assets/bolsas-de-estudo.png';
import Treinamento from '../../assets/treinamento.png';
import Inclusao from '../../assets/inclusaoDigital.jpg';

const ProgramsList = () => {
  const programs = [
    {
      title: "Bolsas de Estudo",
      description: "A Fundação oferece um programa de bolsas de estudo que visa apoiar estudantes talentosos em sua jornada acadêmica. Com diversas modalidades, nosso programa busca tornar a educação acessível, proporcionando oportunidades para que você realize seus sonhos.",
      link: "/programs/scholarships",  
      image: BolsaEstudos
    },
    {
      title: "Treinamentos",
      description: "Oferecemos uma variedade de treinamentos práticos e teóricos, desenvolvidos para capacitar alunos em áreas essenciais do conhecimento. Com instrutores qualificados, nossos cursos são projetados para fornecer as habilidades necessárias para o mercado de trabalho atual.",
      link: "/programs/training",  
      image: Treinamento
    },
    {
      title: "Hackathons",
      description: "Participe de nossos hackathons, eventos intensivos que reúnem programadores, designers e criativos para resolver desafios do mundo real em um curto período de tempo. É uma oportunidade única para inovar, colaborar e desenvolver soluções impactantes.",
      link: "/programs/hackathons", 
      image: hackathon
    },
    {
      title: "Inclusão Digital",
      description: "A Fundação promove iniciativas de inclusão digital que visam integrar as tecnologias de informação e comunicação em comunidades vulneráveis. Nossos programas oferecem acesso à tecnologia e capacitação, preparando todos para um futuro digital.",
      link: "/programs/digital-inclusion", 
      image: Inclusao 
    }
  ];

  return (
    <section className="program-summary">
      <h2>Lista de Programas</h2>
      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt='' />
            <div className="program-info"> 
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Link to={program.link} className="program-link">Saiba mais</Link>  {/* Link em vez de href */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsList;
