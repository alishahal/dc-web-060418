class CatsController < ApplicationController
  def index
    
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])
  end

end
