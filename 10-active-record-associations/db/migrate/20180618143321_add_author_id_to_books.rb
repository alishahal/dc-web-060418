class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :string
  end
end
