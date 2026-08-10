// // const str = "Gunjan"
// // console.log(str)
// // console.log(typeof str)

// // // const s = "Javascript"
// // console.log(s)
// // console.log(s[4])
// // console.log("Size is:",s.length) // 10

// // Methods of String - Without Arguments
// // const s = "Javascript"

// // console.log("Uppercase:",s.toUpperCase())
// // console.log("Lowercase:",s.toLowerCase())

// // const trimString = "     JT     "
// // console.log("TrimString length:",trimString.length)
// // const trim1 = trimString.trim()
// // console.log("trim1 length",trim1.length, trim1)
// // const trim2 = trimString.trimStart()
// // console.log("trim2 length",trim2.length, trim2)
// // const trim3 = trimString.trimEnd()
// // console.log("trim3 length",trim3.length, trim3)

// // Methods of String - With Arguments
// // const newString = "Java Technocart"
// // console.log("Character at 5th index", newString.charAt(5)) // T
// // console.log("Character code at 5th index", newString.charCodeAt(5)) // 84(ASCII value of 'T')

// // const toBeMergedString = "is famous for Rashmi Sir"
// // const mergedString = newString.concat(" ",toBeMergedString)
// // console.log("Merged String is:",mergedString)

// // const isJavaIncluded = newString.includes("Java")
// // console.log("Is Java included:",isJavaIncluded) // True
// // const isJavaIncluded = newString.includes("Java", 1)
// // console.log("Is Java included:",isJavaIncluded) // False

// // const indexOfJava = newString.indexOf("Java", 1)
// // console.log("Index of java:",indexOfJava)

// const newString = "Java Technocart "

// const indexOfJava = newString.lastIndexOf("a")
// console.log("Last Index of java:",indexOfJava)

// const replacedString = newString.replace("a", "b") // We can also replace a complete word, sentence.
// console.log("Replaced string is: ",replacedString)

// const replacedAllString = newString.replaceAll("a", "d")
// console.log("Replaced string is: ",replacedAllString)

// const repeatedString = newString.repeat(3)
// console.log("Repeated String: ",repeatedString)

// const padStart = newString.padStart(20, "#")
// console.log("Pad Start: ",padStart)

// const padEnd = newString.padEnd(20, "$")
// console.log("Pad End: ",padEnd)

// const words = newString.split(" ")
// console.log("After split:",words)

// const isStartsWithJava = newString.startsWith("Java")
// console.log("Starts with Java: ",isStartsWithJava)

// const isEndsWithJava = newString.endsWith("Java")
// console.log("Ends with Java: ",isEndsWithJava)


// ============== Difference Between slice ans substring
const s = 'we are developers'
console.log(s.length) // 17

console.log(s.slice())
console.log(s.substring())

console.log(s.slice(10)) // elopers
console.log(s.substring(10)) // elopers

console.log(s.slice(10, 13)) // elo (as end index is not included.)
console.log(s.substring(10, 13)) // elo (as end index is not included.)

console.log(s.slice(17)) // as max length is 17 , max index is 16 -> empty string
console.log(s.substring(17))

console.log(s.slice(-9)) // evelopers
console.log(s.substring(-9)) // -9 is converted to 0 -> we are developers

console.log(s.slice(13, 10)) // start index > end index -> Empty string ''
console.log(s.substring(13, 10)) // start index > end index -> swap => substring(13, 10) // elo

console.log(s.slice(-8, -2)) // velope
console.log(s.substring(-8, -2)) // substring(0, 0) -> ''

//When slice(13, -6) -> It converts negative value(-6) to positive i.e., 6

// Task -> How substr() method works