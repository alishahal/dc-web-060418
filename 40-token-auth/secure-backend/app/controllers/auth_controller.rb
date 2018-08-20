class AuthController < ApplicationController

  # post to /login with { username: 'some name', password: 'some password' }
  def login
    user = User.find_by(name: params[:username])
    if user && user.authenticate(params[:password])
      # What goes here?
    else
      # What about here?
    end
  end

end
