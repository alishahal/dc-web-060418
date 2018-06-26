class AuthorsController < ApplicationController

    set :views, 'app/views/authors'

    get "/authors" do 
        @authors = Author.all
        erb :index
    end

    post "/authors" do
        author_name = params["author"]["name"]
        author = Author.create(name: author_name)
        params[:book].each do |book_info|
            Book.create(author: author, title: book_info["title"],
                        snippet: book_info["snippet"])
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/new" do
        erb :new
    end
    get "/authors/:id" do
        author_id = params[:id] 
        @author = Author.find(author_id)
        @books = @author.books
        erb :show
    end
end