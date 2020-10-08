import React from 'react';

export default class UpdateCidade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      UF: ''
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/cidades/${id}`).
      then((response) => response.json()).
      then((cidade) => this.setState({ ...cidade }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateCidadeRequest = (event) => {
    fetch(`/api/v1/cidades/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Cidade atualizada com successo!');
      location.href = '/';
    });
  }

  render() {
    const {nome, estado.sigla} = this.state;
    return (
      <div>
        <h3>Edição de Cidade</h3>
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
        <button onClick={this.updateCidadeRequest}>Alterar</button>
      </div>
    );
  }
}
