- Begin with changing application to:
    - Have a separate Author table
    - Add FK relationship from Book to Author
    - Update GoogleBooks::Adapter to populate Author table and correctly store Author name while preserving author_url / slug capabilities
        - Including but not limited to:
            - new migrations to add author table, add author_id to column to books, remove author column from books
            - create author.rb
            - move slug method into author class
            - update googlebooks adapter to use author.slug in author_url
            - update googlebooks adapter to find_or_create an author
    - create AuthorsController and BooksController.  Move book routes into BooksController.  Move the views directory into subdirectory `/books` Specify views at top: `set :views, 'app/views/books'`.  
    - In `config.ru`:
        ```
        require_relative './config/environment'

        require_relative './app/controllers/authors_controller'
        require_relative './app/controllers/books_controller'

        use AuthorsController
        use BooksController
        run ApplicationController
        ```
        * can have multiple `use`
        * only one `run`
    - Build `index` and `show` pages for Author
    - Alter book create page to use `book[attribute]` syntax, explicitly entering the author_id
    - Alter Book create pages to have an author dropdown
    ```
    <select name="book[author_id]">
        <% @authors.each do |author| %>
          <option value="<%= author.id %>">
            <%= author.name %>
          </option>
        <% end %>
    </select>
    ```

    - When creating a new author we should be able to simultaneously create books.
        - First add to the form a single book:
        ```
            <input type="text" name="book[title]" placeholder="Title">
            <input type="textarea" name="book[][snippet]" placeholder="Snippet"> 
        ```
        - Show `params` in pry
        - Then multiple books (note the `[]`) and show in pry
        - ```
        <input type="text" name="book[][title]" placeholder="Title">
        <input type="textarea" name="book[][snippet]" placeholder="Snippet">
        ```