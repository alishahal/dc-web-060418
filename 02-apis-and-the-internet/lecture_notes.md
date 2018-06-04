- define request/response cycle; client/server
- reddit.com just gives back HTML (text)
- reddit.com/.json
    - JSON (Javascript Object Notation)

- Google Books API (Application Programming Interface)
    - https://www.googleapis.com/books/v1/volumes?q=buffy+vampire+slayer
    - define GET request and query parameters
- Rest client gem 
- `require 'rest-client'`
- `require 'json'` (part of Ruby library)
- define gem, gem install each
- Show docs for rest-client
- `RestClient.get(url)`
- Show in pry the value and .methods on _
- `JSON.parse(response)`
- JSON keys are strings, not symbols
- "Shorten the feedback loop"
- Get book titles and authors
- `books.first.keys` to show what we have
- `books.first["volumeInfo"]["title"]`
- books.first["volumeInfo"]["authors"].join(" & ")
- build out:
```
url = "https://www.googleapis.com/books/v1/volumes?q=buffy+vampire+slayer"

response = RestClient.get(url)
json = JSON.parse(response)

books = json['items']

books.each do |book|
    puts book["volumeInfo"]["title"]
    puts book["volumeInfo"]["authors"].join(" & ")
    puts "-" * 20
end
```

- Turn the above into single-purpose methods

- print the title with underscores to show string interperolation
- `puts "_#{book["volumeInfo"]["title"]}_"
`