import React from 'react';

export default class UpdateUsuario extends React.Component {
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

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/usuarios/${id}`).
      then((response) => response.json()).
      then((usuario) => this.setState({ ...usuario }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleInputchangeCPF(event) {
    this.setState({ cpf: cpfMask(event.target.value) })
  }

  updateUsuarioRequest = (event) => {
    fetch(`/api/v1/usuarios/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Usuario atualizado com successo!');
      location.href = '/';
    });
  }

  render() {
    const {nome, cpf, data_nascimento, email, telefone, endereco, cep, cidade.estado.sigla, cidade.nome} = this.state;
    return (
      <div>
        <h3>Edição de Usuário</h3>
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
        <button onClick={this.updateUsuarioRequest}>Alterar</button>
      </div>
    );
  }
}
