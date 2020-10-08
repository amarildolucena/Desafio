import React from 'react';

export default class UpdateEstado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sigla: '',
      nome: ''
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/estados/${id}`).
      then((response) => response.json()).
      then((estado) => this.setState({ ...estado }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = (event) => {
    fetch(`/api/v1/estados/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Estado atualizado com successo!');
      location.href = '/';
    });
  }

  render() {
    const {sigla, nome} = this.state;
    return (
      <div>
        <h3>Edição de Estado</h3>
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
        <button onClick={this.updateEstadoRequest}>Alterar</button>
      </div>
    );
  }
}
