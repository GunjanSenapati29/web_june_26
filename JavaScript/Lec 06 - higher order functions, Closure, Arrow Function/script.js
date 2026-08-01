// function fun(f1){
//     console.log("Value of 'f1' is: ",f1)
// }

// Normal Function
// fun(10)
// fun(true)
// fun("JT")

// Higher Order Function
// fun(hello())
// fun(hello)

// function hello(){
//     console.log("Hello Everyone!")
//     return 100
// }


// ====================
// function f3(){
//     console.log("This is f3 function")
// }

// function f1(){
//     console.log("This is f1 function")
//     // return 101

//     return function f2(){
//         console.log('This is f2 function')
//     }
    // return f3

// }

// let x = f1()
// console.log("/////////", x)
// x()

// ============= setTimeout, setInterval ============
// console.log("Hello")
// setTimeout(function f1() {
//     console.log("Have a nice Day!")
// }, 5000)
// console.log("Gunjan")

// function f1(){
//     console.log('Hiiiiiiiii')
// }
// const intervalid = setInterval(f1, 2000)
// console.log("//////////", intervalid)
// setTimeout(function f2(){
//     console.log("Clearing Interval")
//     clearInterval(intervalid)
// }, 10000)

function fun(){
    console.log("Gunjan")
}

const interval = setInterval(fun, 20000)
console.log("////////////", interval)
const timer = setTimeout(function() {
    console.log("Clearing Interval")
    clearInterval(interval)
    clearTimeout(timer)
}, 10000)