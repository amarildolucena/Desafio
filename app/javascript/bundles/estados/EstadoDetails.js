import React from 'react';

export default class EstadoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estado: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/estados/${id}`).
      then((response) => response.json()).
      then((estado) => this.setState({ estado }));
  }

  render() {
    const { estado } = this.state;
    return (
      <div>
        <div>
          <label> Sigla </label>
          <p> {estado.sigla} </p>
        </div>

        <div>
          <label> Nome </label>
          <p> {estado.nome} </p>
        </div>
      </div>

    );
  }
}
