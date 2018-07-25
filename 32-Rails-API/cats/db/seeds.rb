# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Fluffy', breed: 'Calico', age: 5, quote: 'meow')
Cat.create(name: 'Marmelaid', breed: 'Orange', age: 2, quote: 'yum')
Cat.create(name: 'Ruth', breed: 'Brindel', age: 3, quote: 'meeeeeoooooow')
Cat.create(name: 'Jimin', breed: 'Tabby', age: 10, quote: 'hello')

Hobby.create(title: 'sleep', description: 'zzzzzzzz')
Hobby.create(title: 'push things of tables', description: 'crashhhh')
Hobby.create(title: 'eating', description: 'yuuuuum')

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 2, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 4, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 1)
