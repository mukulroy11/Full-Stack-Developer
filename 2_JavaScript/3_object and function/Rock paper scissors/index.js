let hands = ["rock", "paper", "scissor"]

for (let i = 0; i < hands.length; i++) {
    console.log(hands[i])
}

function getHand() {
    let randomNumber = Math.floor(Math.random() * 3) 
    if (randomNumber === 0) {
        return hands[randomNumber]
    } else if (randomNumber === 1) {
        return hands[randomNumber]
    } else {
        return hands[randomNumber]
    }
}

console.log(getHand())
console.log(getHand())
console.log(getHand())
