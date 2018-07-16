// console.log("connected")
//
// // firstFunction()
// //
// //
// // function firstFunction(){
// //     console.log("hello from inside the first function")
// // }
// //
// // let aVar = "a variable"
//
// let array = [1,2,3,4,5]
// //
// // function timesTwo(x){
// //   return x*2
// // }
// //
// console.log(array.map(x=>2*x))
// // arrowFunction()
//
// // let arrowFunction = () => {
// // 	console.log("hello from inside an arrow function")
// // }
//
// let clickListener = function(){
//   console.log("clicked")
// }
//
// document.querySelector("button").addEventListener("click", clickListener
// )
//
// document.querySelector("button").removeEventListener("click", clickListener
// )






















//var, (no declartion), let, const

//let - is declared once, reassigned multiple times, block scoped
//const - is declared and assigned once, must be assigned during Declaration, block scoped
//var - can be redeclared and reassigned as much as you want, is hosited, functionally scoped
//no declartion creates global variable regardless of declared inside a function or not
// var studentName = "Rob"
// welcomeToFlation()
// //
// function welcomeToFlation(){
//   debugger;
//   console.log(studentName, "joins flatiron")
//   let studentName = "Ann"

//
//   function addToCohort(){
//
//     // if(true){
//     //   const studentName = "Paul"
//     //   console.log("inside if block", studentName)
//     // }
//     console.log("Welcome", studentName, "to cohort")
//
//   }
//   addToCohort()
//   giveCard()
//

//

//
//
// function giveCard(){
//   console.log("here is your card", studentName)
// }


// var a = "Ann"
// let b = "Bob"
// const c = "chris"




//Loops
//for loop, for..of, for..in, .forEach
let array = [3,4,5,6,7,8]
let obj = {first: "first!", second: "second!", third: "third!"}
// for(let i=0; i<array.length; i++){
//   console.log(array[i])
// }
// console.log(i)

//works for arrays
// for(const x of array){
//   console.log(x)
// }

//x represents a key
//for in works with arrays and objects
// for(const x in obj){
//   console.log(obj[x])
// }

array.forEach(x => console.log(x*2))
