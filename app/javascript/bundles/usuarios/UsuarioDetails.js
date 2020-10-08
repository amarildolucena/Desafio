import React from 'react';

export default class UsuarioDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/usuarios/${id}`).
      then((response) => response.json()).
      then((usuario) => this.setState({ usuario }));
  }

  render() {
    const { usuario } = this.state;
    return (
      <div>
        <div>
          <label> Nome </label>
          <p> {usuario.nome} </p>
        </div>

        <div>
          <label> UF </label>
          <p> {cidade.estado.sigla} </p>
        </div>
      </div>
    );
  }
}
