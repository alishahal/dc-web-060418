require_relative './config/environment.rb'
require_relative './lib/book'
require_relative './lib/author'

class App

  def self.call(env)

    req = Rack::Request.new(env)
    resp = Rack::Response.new

    if req.path.match(/books/)
        all_books = Book.all
        book_list_items = all_books.map {
            |book| "<li>#{book.title}</li>"
        }.join
        resp.write("
            <h1>My Library</h1>
            <ul>
                #{book_list_items}
            </ul>")
    elsif req.path.match(/authors/)
        all_authors = Author.all
        author_list_items = all_authors.map {
            |author| "<li>#{author.name}</li>"
        }.join
        resp.write("
            <h1>Author List</h1>
            <ul>
                #{author_list_items}
            </ul>")
        
    else
        resp.write("<h1>Hello World</h1>")
    end
    resp.finish
  end
end