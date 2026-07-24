// 1st 5 functions:

function add(a, b) {
    console.log("Sum =", a + b);
}

add(10, 20);

function subtract(a, b) {
    console.log("Difference =", a - b);
}

subtract(20, 5);

function multiply(a, b) {
    console.log("Product =", a * b);
}

multiply(4, 6);

function divide(a, b) {
    console.log("Quotient =", a / b);
}

divide(20, 4);

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Gunjan");

// 2nd 5 functions:

function getSum(a, b) {
    return a + b;
}

let sum = getSum(5, 8);
console.log(sum);

function square(num) {
    return num * num;
}

console.log(square(7));

function largest(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

console.log(largest(25, 18));
function fullName(first, last) {
    return first + " " + last;
}

console.log(fullName("Gunjan", "Senapati"));

function evenOdd(num) {
    if (num % 2 == 0)
        return "Even";
    else
        return "Odd";
}

console.log(evenOdd(11));

// 3rd 5 functions:

function addNumbers(a, b) {
    let sum = a + b;
    console.log("Sum =", sum);
    return sum;
}

let result1 = addNumbers(10, 15);
console.log(result1);

function squareNumber(num) {
    let sq = num * num;
    console.log("Square =", sq);
    return sq;
}

console.log(squareNumber(9));

function checkNumber(num) {
    if (num >= 0) {
        console.log("Positive Number");
        return true;
    } else {
        console.log("Negative Number");
        return false;
    }
}

console.log(checkNumber(-8));

function rectangleArea(length, width) {
    let area = length * width;
    console.log("Area =", area);
    return area;
}

console.log(rectangleArea(8, 5));

function welcome(name) {
    let message = "Welcome, " + name + "!";
    console.log(message);
    return message;
}

console.log(welcome("Gunjan"));

