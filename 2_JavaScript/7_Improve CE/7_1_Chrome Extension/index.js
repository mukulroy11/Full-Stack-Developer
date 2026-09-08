// let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",  () => {
    // myLeads.push(inputEl.value);
    ulEl.innerHTML += "<li>" + inputEl.value
    inputEl.value = "";
});

// function renderLeads() {
//     // let listItems = ""
//     // for (let i = 0; i < myLeads.length; i++) {
//     //     listItems += "<li>" + myLeads[i]  
//     // } or other method

//     let listItems = "<li>" + inputEl.value
//     ulEl.innerHTML += listItems
// }