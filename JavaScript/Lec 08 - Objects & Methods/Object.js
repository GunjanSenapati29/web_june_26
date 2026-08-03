// const user = {
//     firstname : "Gunjan",
//     lastname : "Senapati",
//     age : 21,
//     isGraduated : true,
//     'address' : 'BBSR',
//     'course-fee' : 30000.99, // Without this '' it will throw an error, because of special char, blank space,etc.
//     greet : function(){
//         console.log("Gunjan says Hello !!!")
//         console.log("My Fullname is: ",this.fullname) // Without 'this' is throws undefinied
//     },

//     add : function(a,b){
//         console.log("Adding to numbers: ",(a+b))
//     }
//     // hello :() =>{
//     //     console.log("Hello Everyone!")
//     // } 
// }

// // Extract Complete Object
// // console.log("user object: ",user)

// // Extract single values from objects
// console.log("first name is: ",user.firstname)
// console.log("last name is: ",user.lastname)
// console.log("Full name is: ",user.firstname,user.lastname )

// // Alternative way
// console.log("age is: ",user['age'])
// // console.log("age is: ",user.course-fee)
// console.log("course fee is: ",user['course-fee'])
// console.log("full name is: ",user.fullname) // undefiend - as key is not present in Object.

// // ADD/UPDATE key to object
// user.fullname = "Gunjan Senapati"
// user.isGraduated = false
// user['Aadhar No'] = 67949949439
// console.log(user)

// //  Access Methods
// user.greet()
// // user.hello()
// user.add(100,200)

// ==============Nested Object===============
// const employee = {
//     fullname : 'Alina Scott', // Key 1
//     age : 32, // Key 2
//     personal: { // Nested Object 1
//         gender: "Female",
//         bloodGroup: "O+",
//         nationality: "Indian",
//         address : { // Nested Object 2 
//             city : "BBSR",
//             state : "Odisha",
//             PIN : "751007",
    
//         }
//     }
// }

// console.log(employee)
// console.log("Employee Fullname is: ",employee.fullname)
// console.log("Employee Age is: ",employee.age)
// console.log("Employee's Personal Details:\n1-Gender:",employee.personal['gender'],
//             "\n2-Blood-Group:",employee.personal['bloodGroup'],
//             "\n3-Nationality:",employee.personal['nationality'])

// console.log("Employee city: ",employee.personal.address['city'])            

// // Making Address NUll
// employee.personal.address = null            
// // console.log("Employee state: ",employee.personal.address['state'])
// console.log("Employee city: ",employee.personal.address?.city)            



// ============== TASK 01 ===============
const employee = {
    fullname : 'Alina Scott', // Key 1
    age : 32, // Key 2
    personal: { // Nested Object 1
        gender: "Female",
        bloodGroup: "O+",
        nationality: "Indian",
        address : { // Nested Object 2 
            city : "BBSR",
            state : "Odisha",
            PIN : "751007",
    
        }
    }
}

console.log(employee)
console.log("Employee Fullname is: ",employee.fullname)
console.log("Employee Age is: ",employee.age)
console.log("Employee's Personal Details:\n1-Gender:",employee.personal['gender'],
            "\n2-Blood-Group:",employee.personal['bloodGroup'],
            "\n3-Nationality:",employee.personal['nationality'])

console.log("Employee city: ",employee.personal.address['city'])            

// Making Address NUll
employee.personal.address = null            
// console.log("Employee state: ",employee.personal.address['state'])
console.log("Employee city: ",employee.personal.address?.city)            
