//1. function declaration
// function <fun_name>(list of params) {}

function myFun() {
    console.log("Good Morning!!!")
}

// myFun()

function greet(name = 'JT') {
    console.log("Good Morning", name, "!!!")

}
// greet("Gunjan")
// greet(10)
// greet(10.2)
// greet(true)
// greet("Gunjan", 10, 20, 40, 60)

function addJTTag(name) {
    return "JT'ans " + name
}

let updateName = addJTTag("Disha")
console.log(updateName)

// Function1
function add(num){
    return "Sum of two Numbers is " + num
}

let addition = add(10+56)
console.log(addition)

// Function2
function sum(a, b){
    return a + b
}

let val = sum(50, 50)
console.log(val)