
class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:edit, :update, :show]
  def index
    @snacks = Snack.all
  end
  
  def new
    @snack = Snack.new
  end

  def create
    snack = Snack.create(snack_required_params)
    redirect_to snack
  end

  def destroy
    Snack.destroy(params[:id])
    redirect_to snacks_path
  end

  def update
    @snack.update(snack_required_params)
    redirect_to snack_path(@snack)
  end

  private

  def snack_required_params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end   

  def find_snack
    @snack = Snack.find(params[:id])
  end
end
