import React from 'react';
import { Link } from 'react-router-dom';

export default class CidadesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cidades: [] };
  }

  componentDidMount() {
    this.fetchCidadesList();
  }

  fetchCidadesList = () => {
    fetch('/api/v1/cidades').
      then((response) => response.json()).
      then((cidades) =>  this.setState({ cidades }));
  };

  handleDelete = (cidadeId) => {
    fetch(`/api/v1/cidades/${cidadeId}`, { method: 'delete' }).
      then((response) => {
        alert('Cidade excluída com sucesso!')
        this.fetchCidadesList();
      });
  }

  render() {
    const { cidades } = this.state;
    return (
      <div>
        <h3>Todas as Cidades</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody>
          {
            cidades.map((cidade) => {
              return (
                <tr key={cidade.id}>
                  <td>{cidade.id}</td>
                  <td>
                    <Link to={`/cidades/${cidade.id}`}>
                      {cidade.nome}
                    </Link>
                  </td>
                  <td>{cidade.estado.sigla}</td>
                  <td>
                    <button onClick={() => this.handleDelete(cidade.id) }>
                      Apagar
                    </button>
                    <Link to={`/cidades/${cidade.id}/edit`}>
                      Editar
                    </Link>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}
