// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers)
// console.log(...numbers)

// const employees = [
//     {name: "Ram", age: 21},
//     {name: "Ankit", age: 22},
//     {name: "Amit", age: 23},
//     {name: "Rajesh", age: 24},
// ]
// console.log(employees)
// console.log("\n",...employees)

// const myName = "Gunjan Senapati"
// console.log(...myName)

// ================= copy Array ================
// const arr1 = [100, 200, 300]
// const arr2 = arr1
// arr2.push(400)
// console.log(arr1)

// const arr2 = []
// for(let i = 0; i< arr1.length; i++){
//     arr2[i] = arr1[i]
// }

// const arr2 = [...arr1]

// arr2.push(500)
// console.log(arr1)
// console.log(arr2)

// ============= merge Array ===============
// const arr1 = [10, 20, 30]
// const arr2 = [100, 200, 300]

//  const arr3 = [...arr1, ...arr2]
//  console.log(arr3)

//  const name = "Javascript"
//  const arr4 = [...arr1, ...arr2, ...name]
//  console.log(arr4)

// ================= copy Object ===============
// const user = {
//     id: 101,
//     name: "Aju",
//     age: 23,
// }

// const copy = user;

// const copyUser = {...user, phone: "987654320"}
// console.log(copyUser)

// Another way to copy Object
// const copyUser1 = {}
// Object.assign(copyUser1, user) // target, source
// console.log(copyUser1)

const employee = {
    id: 101,
    name: "Aju",
    age: 23,
    address: {
        city: "BBSR",
        pin: '751007'
    }
}

const copyEmployee = {...employee}
copyEmployee.address.city = 'CTC'
console.log(employee)

// Task is to deep copy nested object not  shallow object