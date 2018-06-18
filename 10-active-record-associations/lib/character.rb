class Character < ActiveRecord::Base

    has_and_belongs_to_many :books
    has_many :authors, -> { distinct }, through: :books
end