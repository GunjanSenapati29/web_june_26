function f1(){
    console.log('this is f1')
    return 101
    return function f2(){
        console.log('this is f2 function')
    }
}

function increment(){
    let number = 10
    return function plusone(){
        console.log("Adding one")
        number++
        console.log("number value is", number)
    }
}
const nestedfun = increment()
// console.log("/////", nestedfun)
nestedfun()
nestedfun()