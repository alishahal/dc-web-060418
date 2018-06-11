class Book

    attr_accessor :title, :author_id, :id

    def initialize(title, author_id, id=nil)
        @title, @author_id = title, author_id
        @id = id
    end

end