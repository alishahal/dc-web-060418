class Owner < ApplicationRecord
  validates :name, uniqueness:true
  has_many :pets 
end
