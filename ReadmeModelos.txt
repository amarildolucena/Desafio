rails generate model Estado sigla:string nome:string

rails generate model Cidade nome:string estado:references

rails generate model Usuario nome:string cpf:string data_nascimento:date email:string telefone:string endereco:string cep:string cidade:references

rails generate scaffold Usuario nome:string cpf:string data_nascimento:date email:string telefone:string endereco:string cep:string cidade:references
