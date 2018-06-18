- change `Book` to an ActiveRecord model

- make create table migration
```
class CreateBooksTable < ActiveRecord::Migration[5.2]

  def change

    create_table :books do |t|
        t.string :title
        t.integer :author_id
    end
  end

end
```
- Add `belongs_to` and `has_many` relationships to Book and Author

seeds.rb
```
ss = Book.find_or_create_by(title: "Harry Potter and the Sorcerer's Stone", author: rowling)
```

- Note:  Can pass in the author object even though the field is author_id

- Create Character.rb file and associated migration.  `has_and_belongs_to_many` with books (and inverse on character)

- Add to seed file:

```
harry = Character.find_or_create_by(name: "Harry Potter")
tonks = Character.find_or_create_by(name: "Nymphadora Tonks")


def add_char_to_book(character, book_list)
    book_list.each do |book|
        character.books << book unless character.books.include?(book)
    end
end

add_char_to_book(harry, [ss, cos, poa, gof, ootp, hbp, dh])
add_char_to_book(tonks, [ootp, hbp, dh])
```