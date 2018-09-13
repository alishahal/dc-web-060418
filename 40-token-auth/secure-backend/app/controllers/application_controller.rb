class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :authenticate

  private

  def current_user
    @current_user ||= authenticate
  end

  def authenticate
    # mod 2 version
    # if session[:user_id].nil?
      # redirect_to :login
    # end
    authenticate_or_request_with_http_token do |token|
      begin
        decoded = decode(token)
        @current_user = User.find_by(id: decoded[0]["user_id"])
      rescue JWT::DecodeError
        render json: { authorized: false }, status: 401
      end
    end
  end

  def secret_key
    ENV['TOKEN_AUTH_SECRET']
  end

  def encode(payload)
    JWT.encode(payload, secret_key, 'HS256')
  end

  def decode(token)
    JWT.decode(token, secret_key, true, { algorithm: 'HS256' })
  end




end















# authenticate_or_request_with_http_token do |jwt_token, options|
    #   begin
    #     decoded_token = JWT.decode(jwt_token, "password123")
    #
    #   rescue JWT::DecodeError
    #     return nil
    #   end
    #
    #   if decoded_token[0]["user_id"]
    #     @current_user ||= User.find(decoded_token[0]["user_id"])
    #   else
    #   end
    # end


  #   def encode(payload)
  #   JWT.encode(payload, ENV["HMAC_SECRET"], 'HS256')
  # end
  #
  # # will raise an error if the token is not valid
  # def decode(encrypted_token)
  #   JWT.decode(encrypted_token, ENV["HMAC_SECRET"], true, { algorithm: 'HS256' })
  # end
  #
  #
