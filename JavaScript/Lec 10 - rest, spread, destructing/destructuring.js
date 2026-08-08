const numbers = [10, 20, 30, 40, 50]
// const a = numbers[0]
// const b = numbers[1]
// const c = numbers[2]
// const d = numbers[3]
// const e = numbers[4]

// console.log(a, b, c, d, e)

// const [a, b, c, d, e] = numbers
// console.log(a, b, c, d, e)

// const [a, b, _, d, e] = numbers 
// console.log(a, b, _, d, e)

// const [a, b, c, ...rest] = numbers
// console.log(a ,b, c, rest)

// numbers = [100, 200]
// const [a, b, c = 1000, ...rest] = numbers
// console.log(a, b, c, rest)

// ================ Destructuring of Objects
const user = {
    id: 101,
    name: "Amit",
    age: 25,
    salary: 40000,
    address: {
        city: "BBSR",
        pin: "751007"
    }
}

// const {id, name, age = 30, ...rest} = user
// console.log(id, name, age, rest)

// const {id: userId, name: userName, age = 30, ...rest} = user
// // console.log(id, name) // reference error :- id is not defined
// console.log(userId, userName, age, rest)

// const employee = {
//     id = 101,
//     name: "Gunjan",
//     age: 21,
//     salary: 23000,
// };

// function updateEmployee(target) {
//     employee[target.name] = target.value;
// }

// updateEmployee({
//     name: "age",
//     value: 28
// });

// console.log(employee);

const employee = {
    id: 101,
    name: "Rahul",
    age: 23,
    salary: 40000
}

// Without destructuring
// function updateEmployee(target) { 
//     employee[target.name] = target.value;
// }

// with destructuring
function updateEmployee(target){
    const {name,value} = target
    employee[name] = value
}

updateEmployee({
    name: "age",
    value: 32
});

console.log(employee);