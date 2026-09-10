// function generateSentence(desc, arr) {
//     return `The ${arr.length} ${desc} are ${arr[0]}, ${arr[1]}, ${arr[2]}`
// }

// console.log(generateSentence("largest Countries", ["China", "India", "USA"]))

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        baseString += arr[i] + ", " 
    }
    
    return baseString
}

console.log(generateSentence("largest Countries", ["China", "India", "USA"]))
console.log(generateSentence("best fruits", ["Apple", "Bananas"]))