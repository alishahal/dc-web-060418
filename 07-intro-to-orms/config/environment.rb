require 'bundler'
Bundler.require

DB = {
    conn: SQLite3::Database.new('db/library.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/book.rb'
require_relative '../lib/author.rb'
