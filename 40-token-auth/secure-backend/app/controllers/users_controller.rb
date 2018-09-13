class UsersController < ApplicationController

  def show_user
    render json: { name: current_user.name, email: current_user.email }
  end

  # def update
    # danger w/o strong params
    # User.find(params[:user_id]).update(params)
  # end
end
