class Api::V1::EstadosController < ApplicationController
  def index
    all_estados = Estado.all
    render json: all_estados
  end

  def create
    estado = Estado.create(estado_params)
    render json: estado
  end

  def show
    estado = Estado.find(params[:id])
    render json: estado
  end

  def update
    estado = Estado.find(params[:id])
    estado.update(estado_params)
    render json: estado
  end

  def destroy
    Estado.destroy(params[:id])
    head :ok
  end

  private

  def estado_params
    params.permit(:sigla, :nome)
  end

end
