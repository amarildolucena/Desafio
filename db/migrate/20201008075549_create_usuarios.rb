class CreateUsuarios < ActiveRecord::Migration[6.0]
  def change
    create_table :usuarios do |t|
      t.string :nome
      t.string :cpf
      t.date :data_nascimento
      t.string :email
      t.string :telefone
      t.string :endereco
      t.string :cep
      t.references :cidade, null: false, foreign_key: true

      t.timestamps
    end
  end
end
