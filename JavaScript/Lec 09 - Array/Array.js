// // const s1 = "Amit"
// // const s1 = "Ankit"
// // const s1 = "Asit"

// const stu = ["Amit", "Ankit", "Asit"]
// console.log(stu)
// // console.log(stu[0])
// // console.log(stu[1])
// // console.log(stu[2])

// for( let x = 0; x<stu.length; x++ ){
//     console.log(stu[x])
// }

// console.log(stu[4]) // undefined 

// stu[10] = "Gunjan" // It will show empty in Index 3,4,5,6,----,9
// console.log(stu)

// =============== Array Methods ================
const fruits = ["Apple", "Orange", "Kiwi"]

fruits.push("Banana", "Avacado")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift("Avacado")
console.log(fruits)

fruits.shift()
console.log(fruits)

console.log(fruits.includes("Kiwi", 3)) // False
console.log(fruits.includes("Kiwi", 2)) // True

console.log(fruits.indexOf("Banana", 4))

// fruits[2] = "Mango"
// console.log(fruits)

// Step 1- Check mango exists or not
if(fruits.includes("Kiwi")){
    //Step 2- Extract the index of element if exists 
    const idx = fruits.indexOf("Kiwi")

    // Then update the value in the index
    fruits[idx] = "Mango"
    console.log(fruits)
}else{
    // if not exist then do nothing
    alert("Search element is not avaliable.")
}
