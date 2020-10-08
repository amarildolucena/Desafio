import React from 'react';

export default class CidadeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cidade: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/cidades/${id}`).
      then((response) => response.json()).
      then((cidade) => this.setState({ cidade }));
  }

  render() {
    const { cidade } = this.state;
    return (
      <div>
        <div>
          <label> Nome </label>
          <p> {cidade.nome} </p>
        </div>

        <div>
          <label> UF </label>
          <p> {cidade.estado.sigla} </p>
        </div>
      </div>
    );
  }
}
