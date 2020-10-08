import React from 'react';
import { Link } from 'react-router-dom';

export default class UsuariosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuarios: [] };
  }

  componentDidMount() {
    this.fetchUsuariosList();
  }

  fetchUsuariosList = () => {
    fetch('/api/v1/usuarios').
      then((response) => response.json()).
      then((usuarios) =>  this.setState({ usuarios }));
  };

  handleDelete = (usuarioId) => {
    fetch(`/api/v1/usuarios/${usuarioId}`, { method: 'delete' }).
      then((response) => {
        alert('Usuário excluído com sucesso!')
        this.fetchUsuariosList();
      });
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div>
        <h3>Todos os Usuários</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data Nascimento</th>
              <th>email</th>
              <th>telefone</th>
              <th>Endereço</th>
              <th>CEP</th>
              <th>UF</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
          {
            usuarios.map((usuario) => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>
                    <Link to={`/usuarios/${usuario.id}`}>
                      {usuario.nome}
                    </Link>
                  </td>
                  <td>{usuario.cpf}</td>
                  <td>{usuario.data_nascimento}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.endereco}</td>
                  <td>{usuario.cep}</td>
                  <td>{usuario.cidade.estado.sigla}</td>
                  <td>{usuario.cidade.nome}</td>
                  <td>
                    <button onClick={() => this.handleDelete(usuario.id) }>
                      Apagar
                    </button>
                    <Link to={`/usuarios/${usuario.id}/edit`}>
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
