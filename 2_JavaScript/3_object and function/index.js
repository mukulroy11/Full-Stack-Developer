// let info = []

let person = {
    name: "Roy",
    age: 25,
    country: "India"  
}
// info.push(person)

// console.log(info)

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

// conditional statements
let age = 15

if (age < 6) {
    console.log("Free")
} else if (6 <= age && age < 18) {
    console.log("Child Discount")
} else if (age >= 18 && age < 27) {
    console.log("Student Discount")
} else if (age >= 27 && age < 67) {
    console.log("Full Price")
} else {
    console.log("Senior Citizen Discount")
}

// for loop
let largeCountries = ["China", "India", "USA", "Indonesia", "Rusia"]

console.log("The 5 largest countries in the world are: ")
for (let i = 0; i < largeCountries.length; i++) {
    console.log(" - " + largeCountries[i])
}

console.log(largeCountries.pop())

largeCountries.push("Pakistan")
console.log(largeCountries)

console.log(largeCountries.shift())
largeCountries.unshift("Australia")
console.log(largeCountries)