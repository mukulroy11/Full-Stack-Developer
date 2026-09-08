const divEL = document.getElementById("container")

divEL.innerHTML = "<button onclick='buy()'>BUY</button>"

function buy() {
    divEL.innerHTML += "<p>Thank you for buying!</p>"
}