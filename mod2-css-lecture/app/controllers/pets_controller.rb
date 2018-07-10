class PetsController < ApplicationController

  before_action :find_pet, only: [:edit, :update, :show]

  def index
    @pets = Pet.all
  end
  def show
  end
  def new
    @pet = Pet.new
  end
  def create
    @pet = Pet.create(pet_params)
    redirect_to @pet
  end
  def edit
  end
  def update
    @pet.update(pet_params)
    redirect_to @pet
  end
  def destroy
    Pet.find(params[:id]).destroy
    redirect_to pets_path
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :species, :owner_id)
  end
  def find_pet
    @pet = Pet.find(params[:id])
  end
end
