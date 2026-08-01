// =============== Function Expression ================

// const hello = function greet(){
//     console.log("Hello Everyone")
// }

// hello() // Function Expression

// const concatString = function (a, b){ // It is not necessary to give a function name.
//     return a+b
// }

// console.log("////////", concatString())
// console.log(concatString("Gunjan", " Senapati"))

// ===========Annonymous Function ==============
// function(a, b){
//     console.log(a+b)
// }

// ============== Arrow Function ==============
// const add = (num1, num2) => {
//     console.log("Adding num1, num2")
//     return num1 + num2
// }

// In Single line
// const add = (num1, num2) => (num1, num2) // this particular line.

// const result = add(10, 20)

// console.log("Result is: ", result)


// Passing Default Values
// const add = (num1, num2 = 100) => (num1, num2) // this particular line.

// const result = add(10)

// console.log("Result is: ", result)

// const n = (a) => {
//             console.log(a , "Says Good Morning!")
//                 }

// const par = n("Gunjan")   

// const n = (a = "Gunjan") => {
//             console.log(a , "Says Good Morning!")
//                 }

// const par = n()    

//  ======== IIFE ==========
 
(function(name) {
    console.log("Hello", name)
})("Gunjan");



