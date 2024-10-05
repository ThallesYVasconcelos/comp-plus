// Doacoes.jsx

import React from 'react';
import './doacoes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';

const Doacoes = () => {
  return (
    <div className="donations-container">
      <h1>
        Doações <FontAwesomeIcon icon={faDonate} />
      </h1>

      {/* Por que Doar */}
      <section className="why-donate">
        <h2>Por que doar?</h2>
        <p>
          Suas doações nos ajudam a impulsionar projetos que promovem a pesquisa científica, desenvolvimento tecnológico e inovação na área de computação. Com seu apoio, podemos alcançar nossos objetivos estratégicos e causar um impacto positivo na sociedade.
        </p>
        <p>
          As contribuições permitem que a Fundação COMP+ amplie programas de inclusão digital, ofereça bolsas de estudo, organize eventos educacionais e muito mais. Juntos, podemos construir um futuro mais tecnológico e inclusivo.
        </p>
      </section>

      {/* Formas de Doar */}
      <section className="how-to-donate">
        <h2>Formas de Doar:</h2>

        {/* Formulário de Doação */}
        <div className="donation-form">
          <h3>Faça sua Doação</h3>
          <form>
            <label htmlFor="amount">Valor da Doação (R$)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Digite o valor"
              required
            />

            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />

            <label htmlFor="payment-method">Método de Pagamento</label>
            <select id="payment-method" name="payment-method" required>
              <option value="">Selecione</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="boleto">Boleto Bancário</option>
              <option value="pix">PIX</option>
            </select>

            {/* Formas de Doação */}
            <fieldset className="donation-type">
              <legend>Tipo de Doação</legend>
              <div className="donation-type-option">
                <input
                  type="radio"
                  id="doacao-unica"
                  name="doacao-tipo"
                  value="unica"
                  required
                />
                <label htmlFor="doacao-unica">Doação Única</label>
              </div>
              <div className="donation-type-option">
                <input
                  type="radio"
                  id="doacao-mensal"
                  name="doacao-tipo"
                  value="mensal"
                />
                <label htmlFor="doacao-mensal">Doação Mensal</label>
              </div>
              <div className="donation-type-option">
                <input
                  type="radio"
                  id="doacao-corporativa"
                  name="doacao-tipo"
                  value="corporativa"
                />
                <label htmlFor="doacao-corporativa">Doação Corporativa</label>
              </div>
            </fieldset>

            {/* Informações adicionais conforme o método de pagamento selecionado podem ser adicionadas aqui */}

            <button type="submit">Contribuir</button>
          </form>
        </div>
      </section>

      {/* Reconhecimento */}
      <section className="recognition">
        <h2>Nosso Agradecimento <FontAwesomeIcon icon={faHandHoldingHeart} /></h2>
        <p>
          Agradecemos profundamente a todos os nossos doadores pelo apoio contínuo. Suas contribuições fazem a diferença e nos permitem continuar nossa missão.
        </p>
        {/* Histórias de Impacto */}
        <div className="impact-stories">
          <h3>Histórias de Impacto</h3>
          <div className="story">
            <p>
              "Graças ao apoio da Fundação COMP+, pude participar de um programa de inclusão digital que mudou minha vida." - <strong>Luiz Henrique</strong>
            </p>
          </div>
          <div className="story">
            <p>
              "As bolsas de estudo proporcionadas pela fundação foram essenciais para minha formação em Ciência da Computação." - <strong>Carlos Braga</strong>
            </p>
          </div>
            {/* Adicione mais histórias conforme necessário */}
          </div>
        </section>
      </div>
    );
  };

  export default Doacoes;
