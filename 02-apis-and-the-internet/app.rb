require 'rest-client'
require 'json'
require 'pry'

url = "https://www.googleapis.com/books/v1/volumes?q=buffy+vampire+slayer"

response = RestClient.get(url)
json = JSON.parse(response)

books = json['items']

books.each do |book|
    puts "_#{book["volumeInfo"]["title"]}_"
    puts book["volumeInfo"]["authors"].join(" & ")
    puts "-" * 20
end

puts 'yo'