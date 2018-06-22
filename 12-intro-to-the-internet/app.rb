require 'rack'
require_relative './spicegirl.rb'

class App

  def self.call(environment_hash)
    
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    resp.write("<h1>Hello World</h1>")
  end
end
