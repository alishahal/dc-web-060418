require 'require_all'
require_relative '../config/environment.rb'
require_relative '../lib/author.rb'

Author.find_or_create("Mark Twain")
Author.find_or_create("Charles Dickens")
Author.find_or_create("Maya Angelou")
Author.find_or_create("Charlotte Bronte")
Author.find_or_create("Shel Silverstein")