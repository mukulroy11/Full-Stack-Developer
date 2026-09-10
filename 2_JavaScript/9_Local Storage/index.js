// let myLeads = `["www.mukul.com"]`
let myLeads = []

let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("save-tab-btn")
// string to array or array to string using JSON
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.so.com")
// console.log(myLeads)
// console.log(typeof myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a>"
        // Using Template above list syntx is long
        listItems += `
            <li>
                <a target='_blank' href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>    
        `
    }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",  () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)
});

deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("myLeads")
    myLeads = []
    render(myLeads)
})