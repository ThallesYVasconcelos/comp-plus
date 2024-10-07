import React from 'react';
import './recursos.css';
import prog from '../../assets/programacao.png';
import eda from '../../assets/eda.png';
import git from '../../assets/git.png';
import docker from '../../assets/docker.png';
import vs from '../../assets/vs.png';
import ia from '../../assets/ia.png';
import security from '../../assets/security.png';
import iot from '../../assets/iot.png';

const Recursos = () => {
  return (
    <div className="resources-container">
      <h1>Recursos</h1>

      <section className="resource-library">
        <h2>Biblioteca de Recursos</h2>
        <div className="resource-items">
          <div className="resource-item">
            <img src={prog} alt="Introdução à Programação" />
            <h3>Introdução à Programação</h3>
            <p>
              Artigo que aborda os conceitos básicos de programação para iniciantes.
            </p>
            <a href="/recursos/introducao-programacao.pdf" target="_blank" rel="noopener noreferrer">
              Baixar PDF
            </a>
          </div>
          <div className="resource-item">
            <img src={eda} alt="Estruturas de Dados" />
            <h3>Estruturas de Dados</h3>
            <p>
              Material aprofundado sobre listas, pilhas, filas e árvores.
            </p>
            <a href="/recursos/estruturas-dados.pdf" target="_blank" rel="noopener noreferrer">
              Baixar PDF
            </a>
          </div>
        </div>
      </section>

      <section className="tools-tutorials">
        <h2>Ferramentas e Tutoriais</h2>
        <div className="tool-items">
          <div className="tool-item">
            <img src={git} alt="Git e GitHub para Iniciantes" />
            <h3>Git e GitHub para Iniciantes</h3>
            <p>
              Tutorial passo a passo sobre controle de versão usando Git e GitHub.
            </p>
            <a href="https://link-para-tutorial.com" target="_blank" rel="noopener noreferrer">
              Acessar Tutorial
            </a>
          </div>
          <div className="tool-item">
            <img src={docker} alt="Introdução ao Docker" />
            <h3>Introdução ao Docker</h3>
            <p>
              Guia para começar a utilizar containers em seus projetos.
            </p>
            <a href="https://link-para-tutorial-docker.com" target="_blank" rel="noopener noreferrer">
              Acessar Tutorial
            </a>
          </div>
          <div className="tool-item">
            <img src={vs} alt="Dicas do Visual Studio Code" />
            <h3>Dicas do Visual Studio Code</h3>
            <p>
              Aprenda a maximizar sua produtividade com este poderoso editor de código.
            </p>
            <a href="https://link-para-dicas-vscode.com" target="_blank" rel="noopener noreferrer">
              Acessar Tutorial
            </a>
          </div>
        </div>
      </section>

      <section className="publications">
        <h2>Publicações</h2>
        <div className="publication-items">
          <div className="publication-item">
            <img src={ia} alt="Relatório de IA" />
            <h3>Relatório de Pesquisa em Inteligência Artificial</h3>
            <p>
              Relatório desenvolvido pela Fundação COMP+ em parceria com universidades.
            </p>
            <a href="/publicacoes/relatorio-ia.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Relatório
            </a>
          </div>
          <div className="publication-item">
            <img src={security} alt="Relatório de Cibersegurança" />
            <h3>Relatório Anual de Cibersegurança</h3>
            <p>
              Análise das principais ameaças e tendências em segurança digital.
            </p>
            <a href="/publicacoes/relatorio-ciberseguranca.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Relatório
            </a>
          </div>
          <div className="publication-item">
            <img src={iot} alt="Whitepaper IoT" />
            <h3>Whitepaper sobre Internet das Coisas</h3>
            <p>
              Exploração das oportunidades e desafios na implementação de IoT.
            </p>
            <a href="/publicacoes/whitepaper-iot.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Whitepaper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;