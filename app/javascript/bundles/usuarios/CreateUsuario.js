import React from 'react';
import {Redirect} from 'react-router-dom';

import { cpfMask } from './mask'

export default class CreateUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      cpf: '',
      data_nascimento: '',
      email: '',
      telefone: '',
      endereco: '',
      cep: '',
      UF: '',
      cidade: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleInputchangeCPF(event) {
    this.setState({ cpf: cpfMask(event.target.value) })
  }

  createUsuarioRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/usuarios', {
      method: 'usuario',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Usuário cadastrado com successo!');
      location.href = '/';
    });
  }

  render() {
    const {nome, cpf, data_nascimento, email, telefone, endereco, cep, cidade.estado.sigla, cidade.nome} = this.state;
    return (
      <div>
        <h3>Cadastro de Usuários</h3>
        <div>
          <label>Nome: </label>
          <input type='text' name='nome' value={nome} onChange={this.handleInputChange}/>
        </div>
        <div className="App">
          <label>CPF</label>
          <input maxLength='14' name='cpf' value={cpf} onChange={this.handleInputchangeCPF}/>
        </div>
        <div>
          <label>Data de Nascimento: </label>
          <input type='text' name='data' value={data_nascimento} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Email: </label>
          <input type='text' name='email' value={email} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Telefone: </label>
          <input type='text' name='telefone' value={telefone} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Endereço: </label>
          <input type='text' name='endereco' value={endereco} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>CEP: </label>
          <input type='text' name='cep' value={cep} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>UF: </label>
          <input type='text' name='uf' value={cidade.estado.sigla} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Cidade: </label>
          <input type='text' name='cidade' value={cidade.nome} onChange={this.handleInputChange}/>
        </div>
        <button onClick={this.createUsuarioRequest}>Salvar</button>
      </div>
    );
  }
}
