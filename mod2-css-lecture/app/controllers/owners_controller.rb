class OwnersController < ApplicationController

  before_action :find_owner, only: [:edit, :update, :show]

  def index
    @owners = Owner.all
  end
  def show
  end
  def new
    @owner = Owner.new
  end
  def create
    @owner = Owner.create(owner_params)
    redirect_to @owner
  end
  def edit
  end
  def update
    @owner.update(owner_params)
    redirect_to @owner
  end
  def destroy
    Owner.find(params[:id]).destroy
    redirect_to owners_path
  end

  private
  def owner_params
    params.require(:owner).permit(:name)
  end
  def find_owner
    @owner = Owner.find(params[:id])
  end
end
