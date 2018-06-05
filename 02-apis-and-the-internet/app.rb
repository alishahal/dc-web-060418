require 'rest-client'
require 'json'
require 'pry'

def create_search_url(search_words)
    url = "https://www.googleapis.com/books/v1/volumes?q="
    search_string = search_words.split.join("+")
    url += search_string
    get_books(url)

end

def get_books(url)
    response = RestClient.get(url)
    json = JSON.parse(response)

    books = json['items']

    books.each do |book|
        puts "_#{book["volumeInfo"]["title"]}_"
        puts book["volumeInfo"]["authors"].join(" & ")
        puts "-" * 20
    end
end

def run_program
    puts "Enter your search terms"
    input = gets.chomp
    url = create_search_url(input)
end

run_program
