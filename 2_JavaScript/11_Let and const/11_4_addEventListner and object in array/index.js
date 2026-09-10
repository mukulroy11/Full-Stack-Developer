const logBtn = document.getElementById("log-btn")
const logEl = document.getElementById("log-el")

let data =[
    {
        player: "Jane",
        score: 53
    },
    {
        player: "roy",
        score: 41
    }
]

logBtn.addEventListener("click", () => {
    logEl.textContent = data[0].score
})