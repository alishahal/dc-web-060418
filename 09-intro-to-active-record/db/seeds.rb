require 'require_all'
require_relative '../config/environment.rb'
require_relative '../lib/author.rb'

Author.create(name: "Mark Twain")
Author.create(name: "Charles Dickens")
Author.create(name: "Maya Angelou")
Author.create(name: "Charlotte Bronte")
Author.create(name: "Shel Silverstein")