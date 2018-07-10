# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


melanie = Owner.create(name:"Melanie")

jerry = Pet.create(name:"Jerry", species:"plant", owner_id:1)
cody = Pet.create(name:"Cody", species:"cat", owner_id:1)
