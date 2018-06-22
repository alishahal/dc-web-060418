require_relative './config/environment.rb'

class App

  def self.call(env)

    req = Rack::Request.new(env)
    resp = Rack::Response.new

    resp.write("Hello World")

    resp.finish
  end
end