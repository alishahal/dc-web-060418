require 'bundler/setup'
Bundler.require

# setting up the database connection (old way)
DB = SQLite3::Database.new("db/development.sqlite3")

# ActiveRecord::Base.establish_connection(
#   adapter: 'sqlite3',
#   database: "db/development.sqlite3"
# )

# ActiveRecord::Base.logger = Logger.new(STDOUT)

require_all 'lib'
