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

// // const divisibleByTen = numbers.filter((value, idx, arr) => {
// //   console.log("value is", value, "at idx", idx, "of array", arr)

// //   return value % 10 == 0
// // })
// // console.log("divisible By ten", divisibleByTen)
// // divisibleByTen.forEach(value => console.log(value))

// numbers.filter()

// =========================== some()
// numbers = [10, 20, 30, 40, 41, 51]
// const isAnyOddPresent = numbers.some(num => num % 2 == 1)
// console.log("///// is Any Odd Present", isAnyOddPresent)

// const isEveryMemberAreEven = numbers.every(num => num % 2 == 0)
// console.log("//// is every members are even", isEveryMemberAreEven)


// =========================== find(), findIndex()
numbers = [10, 20, 30, 40,  51]

const number = numbers.find(num => num == 41)
console.log("is 41 found", number)

const numberIdx = numbers.findIndex(num => num == 41)
console.log("is 41 found", numberIdx)