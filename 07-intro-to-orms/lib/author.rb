class Author
    
    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def save
        # save to database
        if id.nil?
            sql = "INSERT INTO authors (name) values (?)"
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            @id = DB.execute(sql)[0][0]
        else
            sql = "UPDATE authors set name = ? WHERE id = ?"
            DB.execute(sql, self.name, self.id)
        end
    end

    def self.create(name)
        new_author = Author.new(name)
        new_author.save
    end

    def self.find(id)
        sql = <<-SQL
            SELECT * FROM authors
            WHERE id = ?
        SQL
        row = DB.execute(sql, id)[0]
        Author.create_author_from_row(row)
    end

    def self.create_author_from_row(row)
        # [1, "Mark Twain"]
        Author.new(row[1], row[0])
    end

    def self.all
        sql = "SELECT * FROM authors"
        results = DB.execute(sql)
        results.map {|row| self.create_author_from_row(row)}
    end

    def destroy
        sql = "DELETE FROM authors WHERE id = ?"
        DB.execute(sql, self.id)
    end
end