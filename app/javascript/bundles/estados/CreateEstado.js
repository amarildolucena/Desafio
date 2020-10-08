import React from 'react';
import {Redirect} from 'react-router-dom';

export default class CreateEstado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sigla: '',
      nome: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createEstadoRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/estados', {
      method: 'estado',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Estado cadastrado com sucesso!');
      location.href = '/';
    });
  }

  render() {
    const {sigla, nome} = this.state;
    return (
      <div>
        <h3>Cadastro de Estados</h3>
        <div>
          <label>Sigla: </label>
          <input
            type='text'
            name='sigla'
            value={sigla}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Nome: </label>
          <input
            type='text'
            name='nome'
            value={nome}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createEstadoRequest}>Salvar</button>
      </div>
    );
  }
}
