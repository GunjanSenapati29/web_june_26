
debugger

var a = 10;
let b = 20;

{
    let c = 30;
}

function fun(){
    var a1 = 20;
    function fun1(){
        var a2 = 40;
        console.log(a1+a2);
    }
}

fun();

console.log(a)
console.log(b)