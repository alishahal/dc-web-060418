require 'pry'

class ApplicationController < Sinatra::Base

    set :views, 'app/views'
    set :method_override, true
    get "/" do 
        erb :home
    end

    get "/books" do
        @books = Book.all
        erb :index
    end

    post "/books" do
        book = Book.create(params)
        redirect "/books/#{book.id}"
    end

    get "/books/new" do
        erb :new
    end
    
    get "/books/:id" do 
        book_id = params["id"]
        @book = Book.find(book_id)
        erb :show
    end

    patch "/books/:id" do
        author = params["author"]
        snippet = params["snippet"]
        title = params["title"]
        book = Book.find(params[:id])
        book.update({author: author,
                     title: title,
                     snippet: snippet})
        redirect "/books/#{book.id}"
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit
    end

    delete "/books/:id" do
        book = Book.find(params[:id])
        book.delete
        redirect "/books"
    end


end
