import React from 'react';
import { Link } from 'react-router-dom';

export default class EstadosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estados: [] };
  }

  componentDidMount() {
    this.fetchEstadosList();
  }

  fetchEstadosList = () => {
    fetch('/api/v1/estados').
      then((response) => response.json()).
      then((estados) =>  this.setState({ estados }));
  };

  handleDelete = (estadoId) => {
    fetch(`/api/v1/estados/${estadoId}`, { method: 'delete' }).
      then((response) => {
        alert('Estado excluído com successo!')
        this.fetchEstadosList();
      });
  }

  render() {
    const { estados } = this.state;
    return (
      <div>
        <h3>Todos os Estados</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sigla</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {
            estados.map((estado) => {
              return (
                <tr key={estado.id}>
                  <td>{estado.id}</td>
                  <td>
                    <Link to={`/estados/${estado.id}`}>
                      {estado.sigla}
                    </Link>
                  </td>
                  <td>{estado.nome}</td>
                  <td>
                    <button onClick={() => this.handleDelete(estado.id) }>
                      Apagar
                    </button>
                    <Link to={`/estados/${estado.id}/edit`}>
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
