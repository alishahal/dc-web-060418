class CreateBooksCharactersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :books_characters do |t|
        t.integer :book_id
        t.integer :character_id
    end
  end
end
