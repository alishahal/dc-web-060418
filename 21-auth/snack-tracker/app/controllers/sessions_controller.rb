class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to snacks_path
    end
  end

  def create
    @user = User.find_by(username: params[:username])

    if @user&.authenticate(params[:password])
        session[:user_id] = @user.id 
        redirect_to snacks_path
    else
        flash.notice = "Username and password do not match"
        render :new
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end
  
end
