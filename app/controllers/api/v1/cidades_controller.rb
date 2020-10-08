class Api::V1::CidadesController < ApplicationController
  def index
    all_cidades = Cidade.all
    render json: all_cidades
  end

  def create
    cidade = Cidade.create(cidade_params)
    render json: cidade
  end

  def show
    cidade = Cidade.find(params[:id])
    render json: cidade
  end

  def update
    cidade = Cidade.find(params[:id])
    cidade.update(cidade_params)
    render json: cidade
  end

  def destroy
    Cidade.destroy(params[:id])
    head :ok
  end

  private

  def cidade_params
    params.permit(:nome, :estado)
  end
end
