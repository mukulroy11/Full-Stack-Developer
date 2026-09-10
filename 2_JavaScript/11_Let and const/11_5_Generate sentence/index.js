// function generateSentence(desc, arr) {
//     return `The ${arr.length} ${desc} are ${arr[0]}, ${arr[1]}, ${arr[2]}`
// }

// console.log(generateSentence("largest Countries", ["China", "India", "USA"]))

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] 
        } else {
            baseString += arr[i] + ", " 
        }
    }
    
    return baseString
}

console.log(generateSentence("largest Countries", ["China", "India", "USA"]))
console.log(generateSentence("best fruits", ["Apple", "Bananas"]))