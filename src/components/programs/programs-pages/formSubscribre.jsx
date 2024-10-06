import React, { useState } from 'react';
import '../styles-programs.css'; 

const FormSubscribe = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    programa: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <div className="form-container">
      <h3>Formulário de Inscrição</h3>
      <form onSubmit={handleSubmit} className="inscricao-form">
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="programa">Programa de Interesse</label>
          <select
            id="programa"
            name="programa"
            value={formData.programa}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o Programa</option>
            <option value="treinamentos">Treinamentos</option>
            <option value="bolsa">Bolsas de Estudo</option>
            <option value="inclusao">Inclusão</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Enviar Inscrição</button>
      </form>
    </div>
  );
};

export default FormSubscribe;
