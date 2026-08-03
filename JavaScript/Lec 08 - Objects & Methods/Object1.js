const user = {
    name: "Gunjan",
    age: 21
}

// user = {} // This will generate error. We cannot perform assignment with const variable.

/* 
*const Object
1- existing key can be updated
2- existing key can be deleted.
3- new key can be added.
*/

user.name = "Raj" 
user.address = "PURI"
console.log(user)

delete user.age
console.log(user)

user.ph = "0987654321"
console.log(user)

/**
 * Object.seal()
 * 1- existing key can be updated.
 * 2- exiting key cannot be added.
 * 3- new key cannot be added.
 */

let employee= {
    name: "Emily",
    age: 21
}
Object.seal(employee)
console.log(employee)

employee.name = "Anna"
console.log(employee)

delete employee.name
console.log(employee)

employee.address = "Newyork"
console.log(employee)

/**
 * Object.freeze()
 * 1- existing key cannot be updated.
 * 2- exiting key cannot be added.
 * 3- new key cannot be added.
 */

let student= {
    name: "Emily",
    age: 21
}
Object.freeze(student)
console.log(student)

student.name = "Anna"
console.log(student)

delete student.name
console.log(student)

student.address = "Newyork"
console.log(student)