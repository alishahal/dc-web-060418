require_relative './config/environment.rb'

class App

  def self.call(env)
    # To use Rack, provide an "app": an object that responds to the call method,
    # taking the environment hash as a parameter, and returning an Array with three elements:
        # - The HTTP response code
        # - A Hash of headers
        # - The response body, which must respond to each"
    req = Rack::Request.new(env)
    resp = Rack::Response.new

    resp.write("Hello World")

    resp.finish
  end
end