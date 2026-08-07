// function fun(){
//     console.log("arguments",arguments)

//     console.log(arguments[0])
//     console.log(arguments[2])

//     for(let i=0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// const fun = function(){
//     console.log("arguments",arguments)

//     console.log(arguments[0])
//     console.log(arguments[2])

//     for(let i=0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

const fun = (...others) => {

    // console.log(arguments[0])
    // console.log(arguments[2])

    console.log("arguments", others)
    for (let i = 0; i < others.length; i++) {
        console.log(others[i])
    }
    others.forEach((el) => console.log(el))
}

fun(10, "JT", true, 10.25)

function f1(a, ...params) {
    console.log("1. params: ", params) // 20, 30
    console.log("2. arguments:", arguments) // 10, 20, 30
}

f1(10, 20, 30)

/**
 * Diff betwn arguments keyword and rest parameters
 * 1. arguments is a Array like Object but rest parameters is a proper 1-D Array.
 * 2. arguments keyword cannot access Array methods whereas rest parameters can access Array methods.
 * 3. arguments cannot be used inside arrow function & regular functions.
 * 4. arguments keyword collect & stores all the arguments passed into the function whereas rest parameters only collects the remaining arguments passed into the function. 
 */