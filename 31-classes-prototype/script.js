//let rob = {firstName: "Rob", lastName: "Cobb"}
//let pual = {fistName: "Paul", lastName: "Nicholsen"}

// function instructorFactory(firstName, lastName){
//   return {firstName: firstName, lastName: lastName}
// }
// let rob = instructorFactory("Rob", "Cobb")
// let paul = instructorFactory("Paul", "Nicholsen")

// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
//
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
//
// let rob = new Instructor("Rob", "Cobb")
// let paul = new Instructor("Paul", "Nicholsen")


//ES5 way
// function Instructor(firstName, lastName){
//   this.firstName = firstName //instance variables
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
// Instructor.prototype.teach = function(){ //instance methods
//   console.log(`${this.firstName} is giving a lecture`)
// }
// Instructor.all = []
// Instructor.teach = function(){
//   console.log(`Everyone gives lecture`)
// }

//ES6
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  greet(){
    console.log(`${this.firstName} says hi`)
  }
}
class Instructor extends Person{
  constructor(firstName, lastName, students){
    super(firstName, lastName)
    this.students = students
  }
  addStudent(student){
    this.students.push(student)
  }

  teach(){
    console.log(`${this.firstName} is giving a lecture`)
  }
  static teach(){
    console.log("Everyone gives a lecture")
  }
}
let jane = new Person("Jane", "Doe")
let rob = new Instructor("Rob", "Cobb", [jane])




//
// return class Instructor{
//   constructor(firstName, lastName){
//
//   }
// }
//
// return function (firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
