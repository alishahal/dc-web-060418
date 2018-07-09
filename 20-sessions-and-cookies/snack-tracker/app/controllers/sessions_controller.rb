class SessionsController < ApplicationController
  
  helper_method :logged_in_user

  def new

  end

  def create
    # take input (username) from form
    @username = params[:username]

    # check if user exists in database
    user = User.find_by(username: @username)
    # if it does, redirect to snacks_path
    if user
    # add to sessions hash as username
        session[:user_id ] = user.id
        redirect_to snacks_path
    else
        flash.now[:notice] = "No user found with that name"
    # otherwise render new page again
        render :new
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end


  def logged_in_user
      user = User.find_by(id: session[:user_id])
      @logged_in_user = user.try(:username)
  end
end
