const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip2.jpg"
]

let container = document.getElementById("container")

function renderImages() {
    // for (let i = 0; i < imgs.length; i++) {
    //     container.innerHTML += `
    //         <img class="team-img" src="${imgs[i]}">
    //     ` 
    // }
    // using innerHTML is manuplating of dom three times in one for each iteration  in loop
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `
            <img class="team-img" src="${imgs[i]}">
        `
    }

    container.innerHTML = imgsDOM
}

renderImages()
