class Api::V1::UsuariosController < ApplicationController
  
  def index
    all_usuarios = Usuario.all
    render json: all_usuarios
  end

  def create
    usuario = Usuario.create(usuario_params)
    render json: usuario
  end

  def show
    usuario = Usuario.find(params[:id])
    render json: usuario
  end

  def update
    usuario = Usuario.find(params[:id])
    usuario.update(usuario_params)
    render json: usuario
  end

  def destroy
    Usuario.destroy(params[:id])
    head :ok
  end

  private

  def usuario_params
    params.permit(:nome)
  end

end
