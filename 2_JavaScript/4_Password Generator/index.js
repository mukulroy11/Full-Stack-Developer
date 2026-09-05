let passOneEl = document.getElementById("generated-passone-el")
let passTwoEl = document.getElementById("generated-passtwo-el")

let generateButton = document.getElementById("generateButton")

generateButton.addEventListener("click", function() {
    let randomPasswordOne = generateRandomString(15)
    let randomPasswordTwo = generateRandomString(15)

    passOneEl.textContent = randomPasswordOne
    passTwoEl.textContent = randomPasswordTwo
})

function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>:-)*&%@~';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        // Pick a random index from the chars string
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }
    
    return result;
}