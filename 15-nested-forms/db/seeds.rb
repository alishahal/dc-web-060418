Book.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books
GoogleBooks::Adapter.new("Edward Eager").fetch_books
GoogleBooks::Adapter.new("George Orwell").fetch_books
