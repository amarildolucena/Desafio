# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



SAMPLE_ESTADOS = [{
  sigla: 'AC',
  nome: 'Acre'
},{
  sigla: 'AL',
  nome: 'Alagoas'
},{
  sigla: 'AP',
  nome: 'Amapa'
},{
  sigla: 'AM',
  nome: 'Amazonas'
},{
  sigla: 'BA',
  nome: 'Bahia'
},{
  sigla: 'CE',
  nome: 'Ceara'
},{
  sigla: 'ES',
  nome: 'Espirito Santo'
},{
  sigla: 'GO',
  nome: 'Goias'
},{
  sigla: 'MA',
  nome: 'Maranhao'
},{
  sigla: 'MT',
  nome: 'Mato Grosso'
},{
  sigla: 'MS',
  nome: 'Mato Grosso do Sul'
},{
  sigla: 'MG',
  nome: 'Minas Gerais'
},{
  sigla: 'PA',
  nome: 'Para'
},{
  sigla: 'PB',
  nome: 'Paraiba'
},{
  sigla: 'PR',
  nome: 'Parana'
},{
  sigla: 'PE',
  nome: 'Pernambuco'
},{
  sigla: 'PI',
  nome: 'Piaui'
},{
  sigla: 'RJ',
  nome: 'Rio de Janeiro'
},{
  sigla: 'RN',
  nome: 'Rio Grande do Norte'
},{
  sigla: 'RS',
  nome: 'Rio Grande do Sul'
},{
  sigla: 'RO',
  nome: 'Rondonia'
},{
  sigla: 'RR',
  nome: 'Roraima'
},{
  sigla: 'SC',
  nome: 'Santa Catarina'
},{
  sigla: 'SP',
  nome: 'São Paulo'
},{
  sigla: 'SE',
  nome: 'Sergipe'
},{
  sigla: 'TO',
  nome: 'Tocntins'
},{
  sigla: 'DF',
  nome: 'Distrito Federal'
}]

SAMPLE_ESTADOS.each do |estado|
  Estado.create(estado)
end



SAMPLE_CIDADES = [{
  nome: 'Acrelândia',
  estado_id: 1
},{
  nome: 'Assis Brasil',
  estado_id: 1
},{
  nome: 'Brasiléia',
  estado_id: 1
},{
  nome: 'Bujari',
  estado_id: 1
},{
  nome: 'Capixaba',
  estado_id: 1
},{
  nome: 'Cruzeiro do Sul',
  estado_id: 1
},{
  nome: 'Epitaciolândia',
  estado_id: 1
},{
  nome: 'Feijó',
  estado_id: 1
},{
  nome: 'Jordão',
  estado_id: 1
},{
  nome: 'Manoel Urbano',
  estado_id: 1
},{
  nome: 'Marechal Thaumaturgo',
  estado_id: 1
},{
  nome: 'Tarauacá',
  estado_id: 1
},{
  nome: 'Natal',
  estado_id: 2
},{
  nome: 'Recife',
  estado_id: 3
}]

SAMPLE_CIDADES.each do |cidade|
  Cidade.create(cidade)
end



SAMPLE_USUARIOS = [{
  nome: 'Amarildo Lucena',
  cpf: '12345678999',
  data_nascimento:'14/04/1979',
  email: 'amarildo@gmail.com',
  telefone: '84999779373',
  endereco: 'Rua A, número 3',
  cep: '59300000',
  cidade_id: 1
}]

SAMPLE_USUARIOS.each do |usuario|
  Usuario.create(usuario)
end
