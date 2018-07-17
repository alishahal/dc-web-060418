// console.log("connected");

// function myMapper(array, callback){
//   let newArr = []
//   for(let i =0; i<array.length; i++){
//     newArr.push(callback(array[i]))
//   }
//   return newArr;
// }
//
// let originalArray = [1,2,3,4,5]
//
// function multiplebyTwo(x){
//   return x*2
// }
//
// function addFive(x){
//   return x+5
// }
//
// console.log(myMapper(originalArray, multiplebyTwo))
// console.log(myMapper(originalArray, addFive))

// let timer = setInterval(function(){
//   console.log("hello Flatiron")
// }, 1000)
//
// setTimeout(function(){
//   clearInterval(timer)
// }, 3000)

// function flatironOnboarding(studentName, task){
//   task(studentName);
// }
//
// function giveStudentLaptop(studentName){
//   console.log(`Welcome ${studentName}, here is your laptop`)
// }
//
// function giveStudentKeyCard(studentName){
//   console.log(`Hey ${studentName}, don't lose this key card`)
// }
//
// flatironOnboarding("Ann", giveStudentLaptop)
// flatironOnboarding("Ann", giveStudentKeyCard)
// flatironOnboarding("Rob", giveStudentKeyCard)

// function createWelcomeNewStudentToModFactory(num){
//   let studentId = 0;
//   return function(studentName){
//     studentId++;
//     return `Welcome ${studentName}, to Mod${num}. Your student ID is ${studentId}`;
//   };
//
// };
//
// let welcomeNewStudentToMod1 = createWelcomeNewStudentToModFunction(1)
// let welcomeNewStudentToMod2 = createWelcomeNewStudentToModFunction(2)
// let welcomeNewStudentToMod3 = createWelcomeNewStudentToModFunction(3)
// let welcomeNewStudentToMod4 = createWelcomeNewStudentToModFunction(4)
// let welcomeNewStudentToMod5 = createWelcomeNewStudentToModFunction(5)


// (function(date, location, firstCochort){
//   dcCampus = `Welcome to our new DC campus opened on ${date}, at ${location} with our first class ${firstCochort}`;
// })("March", "White House", "Baby got Stack")



// let dcCampus = createNewDCCampus("March", "White House", "Baby got Stack")
// console.log(dcCampus)


//Functional Programming

// class Instructor
//
//   def initialize(name, salary)
//     @name = name
//     @salary = salary
//   end
//
//   def give_raise(raise)
//     @salary = @salary + raise
//   end
//
//   def show_info
//     puts "#{@name} makes $#{@salary}"
//   end
//
// end
// 
// arr = [Instructor.new("Ann", 100), Instructor.new("Paul", 100)]
//
// arr.each{ |x| x.give_raise(100)}
// arr.each{ |x| x.show_info}
//
// arr = [{name:"Ann", salary:100},{name:"Paul", salary:100}]
//
// function updateSalary(instructor, raise){
//   newInstructor = Object.assign({}, instructor)
//   newInstructor.salary = instructor.salary + raise
//   return newInstructor
// }
//
// function updateSalaries(instructors, raise){
//   return instructors.map(instructor => updateSalary(instructor, raise))
// }
//
// newArr = updateSalaries(arr, 100)
// console.log(newArr)
