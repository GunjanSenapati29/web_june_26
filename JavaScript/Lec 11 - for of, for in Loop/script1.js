// Object.keys() --------------
const student = {
    id: 101,
    age: 25,
    course: "Java Fullstack",
    coursefees: 30000.99
}

// In for of Loop ------------------
for(let key of Object.keys(student)){
    console.log(key)
}

// In forEach Loop ----------------
// Object.values(student).forEach(function(val) {
//     console.log(val)
// })

Object.values(student).forEach((val) => {
    console.log(val)
})

// 