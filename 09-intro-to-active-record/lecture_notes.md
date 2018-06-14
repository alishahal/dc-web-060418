- Go over objectives

- Review author-backup created earlier in the week

- Show Seed file
- Demo what happens when seed file is run more than once
- Point out new methods of `find_by_name` and `find_or_create`

- reset database and reseed using `find_or_create` method

- What is Rake? (review)
	- Helps to do tasks
	- For example `rake db:migrate`


connect to database
	- in environment file
	old way:
```
	require 'sqlite3'
	require 'require_all'
	require_all 'lib'
	# setting up the database connection (old way)
	DB = SQLite3::Database.new("chinook.db")
```

	new way:
get active record 

- Uncomment:
	- Gemfile 
		- `gem 'activerecord'`
		- `gem 'sinatra-activerecord'`
	- database.yml
	- environment.rb
		- and comment out DB line
	- Rakefile
		- `require 'sinatra/activerecord/rake'`

```
	ActiveRecord::Base.establish_connection({
	adapter: 'sqlite3',
	database: 'test.db', 
})
```

Test.db doesn't exist, so what will happen?

```
desc "Runs a console"
task :console do
	require_relative "environment.rb"
	pry.start
end
```

ActiveRecord::Base.connection - shows some of the connection stuff.

ActiveRecord::Base  # point out namespacing /module
	- class within AR
	- used to establish connection
	- in labs used to access methods we've been writing in SQL

make a db folder and put dbs in there.  make sub directory `migrate`

Gemfile
	gem 'activerecord'
	gem 'sinatra-activerecord'
[INCOMPLETE]

config/database.yml
	development:
	  adapter: sqlite3
	  database: db/development.sqlite3
	  pool: 5
	  timeout: 5000

config/environment.rb
	require 'bundler/setup'
	Bundler.require

	ActiveRecord::Base.establish_connection(
	  adapter: 'sqlite3',
	  database: "db/development.sqlite"
	)

	ActiveRecord::Base.logger = Logger.new(STDOUT)

	require_all 'lib'


- Delete the database manually
- Comment out custom db rake tasks
- Create with rake db:create, show empty database

- Define migration (a way to change our table's schema) and their importance (tracks history, shareable between team members)

Make a migration
	up/down vs change

```
class CreateAuthors < ActiveRecord::Migration

	def change
		create_table :authors do |t|
			t.string :name
		end
	end

end
```

- show schema.rb

sqlite3 db/library.db
.tables
.schema authors

- change Author to BackupAuthor; make Author.rb

```
class Author < ActiveRecord::Base

end
```
- seed data

add a column
- rake db:create_migration NAME=add_penname_to_authors
	- takes care of naming
	- datetime stamped


```
class Author < ActiveRecord::Base

    def all_names
        if self.penname
            puts "#{self.name} aka #{self.penname}"
        else
            puts "This author uses their real name, #{self.name}"
        end
    end
end
```