class Author < ActiveRecord::Base

    def all_names
        if self.penname
            puts "#{self.name} aka #{self.penname}"
        else
            puts "This author uses their real name, #{self.name}"
        end
    end
end