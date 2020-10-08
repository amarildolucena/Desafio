import React from 'react';
import {Redirect} from 'react-router-dom';

export default class CreateCidade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      UF: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createCidadeRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/cidades', {
      method: 'cidade',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Cidade cadastrada com successo!');
      location.href = '/';
    });
  }

  render() {
    const {nome, cidade.estado.sigla} = this.state;
    return (
      <div>
        <h3>Cadastro de Cidades</h3>
        <div>
          <label>Nome: </label>
          <input
            type='text'
            name='nome'
            value={nome}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>UF: </label>
          <input
            type='text'
            name='uf'
            value={estado.sigla}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createCidadeRequest}>Salvar</button>
      </div>
    );
  }
}
