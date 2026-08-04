const numbers = [10, 20, 30, 40, 50]

// for(let i = 0; i < numbers.length; i++)
//     console.log(numbers[i]);

// numbers.forEach(function printNumbers(value, idx, arr){
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
// })

// numbers.forEach(printNumbers)
// function printNumbers(value, idx, arr){
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
// }

// Function Expression
// const printNumbers = function(value, idx, arr){
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
// }
// numbers.forEach(printNumbers)

// // Annonymous Function
// numbers.forEach(function(value, idx, arr){
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
// })

// // Arrow Function
// numbers.forEach((value, idx, arr) => {
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
// })


//  ========================== map() Function =============================
// const numbersIncreasedByTwo = numbers.map((value, idx, arr) => {
//     console.log("Value is ", value, "at index", idx, "of Array", arr)
//     return value+2
// })

// console.log(numbersIncreasedByTwo)

// const cubeNumbers = numbers.map(value => value*value*value)
// console.log("Cube of elements: ",cubeNumbers)

// const squareNumbers = numbers.map(value => value*value)
// console.log("Square of elements: ",squareNumbers)

const users = [
{
    id: 101,
    name: 'Gunjan Senapati',
    salary: 100000
},
{
    id: 102,
    name: 'Snigdha Mohanty',
    salary: 200000
},
{
    id: 103,
    name: 'Aiswarya Ayeshkant',
    salary: 110000
},
{
    id: 104,
    name: 'Sambit Parida',
    salary: 130000
},
]

// const obj = users.map(value => {
//     return {
//         id: value.id,
//         firstname : value.name.split(" ")[0],
//         bonuses: value.salary*.10
//     }
// }) 

// console.log(obj)

const obj = users.map(user => (
    {
        id: user.id,
        firstname : user.name.split(" ")[0],
        bonuses: user.salary*.10
    }
)) 
console.log(obj)

// =============== filter() Function =================
// numbers = [10, 11, 20, 21, 30, 31]