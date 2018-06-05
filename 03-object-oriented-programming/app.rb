require 'pry'

class Dog
    attr_accessor :name, :breed
    
    @@all = []

    def initialize(name, breed=nil)
        @name = name
        if breed
            @breed = breed
        else
            @breed = "Mutt"
        end
        @@all << self
    end

    def self.all
        @@all
    end

    def self.dogs_rule
        puts "Dogs are awesome!"
    end
end

binding.pry
puts 'duh'

