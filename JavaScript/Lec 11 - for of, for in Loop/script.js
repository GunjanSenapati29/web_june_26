// let fruits = ["Apple", "Banana", "Mango"];

//  for loop -------------------
// console.log("By using for loop ----------")
// for(let i = 0; i< fruits.length; i++){
//     console.log(fruits[i])
// }

// for of loop -------------------
// console.log("By using for of loop -----------")
// for(const fruit of fruits){
//     console.log(fruit)
// }

// for in Loop -------------------
// const student = {
//     id: 101,
//     age: 25,
//     course: "Java Fullstack",
//     coursefees: 30000.99
// }

// for(const key in student){
//     console.log(student[key])
// }

// Object.keys() --------------
// const student = {
//     id: 101,
//     age: 25,
//     course: "Java Fullstack",
//     coursefees: 30000.99
// }
// // Object.keys(student) // array -> of keys
// // Object.values(student) //array -> of values

// // 1. 1st Method
// // const keys = Object.keys(student)
// // for (let key of keys) {
// //     console.log(key);
// // }

// // 2. 2nd Method
// for(let key of Object.keys(student)){
//     console.log(key)
// }

// // 1. 1st Method
// // const values = Object.values(student);

// // values.forEach(function(value) {
// //     console.log(value);
// // });

// // 2. 2nd Method
// Object.values(student).forEach(function(val) {
//     console.log(val)
// })

// Object.entries() => array of arrays or array of key-value pairs ----------------
const student = {
    id: 101,
    age: 25,
    course: "Java Fullstack",
    coursefees: 30000.99
}

// console.log(Object.entries(student))
// const entries = Object.entries(student)

// for(const entry of entries){
//     // console.log("/////",entry) //array
//     console.log("Outer Loop.")
//     for(let i = 0; i < entry.length; i++){
//         console.log("Value is - ", entry[i], " at Index - ",i)
//     }
// }

// Task 1
// const arr = [[10, 20], [30, 40], [50, 60]]

// const [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

const entries = Object.entries(student)
// for(const entry of entries){
//     const [key,value] = entry
//     console.log(key, '->' , value)
// }

for(const [key,value] of Object.entries(student)) {
    console.log(key, '->', value)
}