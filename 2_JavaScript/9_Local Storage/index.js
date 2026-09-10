// let myLeads = `["www.mukul.com"]`
let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

// string to array or array to string using JSON
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.so.com")
// console.log(myLeads)
// console.log(typeof myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click",  () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
});

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {

        // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a>"
        // Using Template above list syntx is long
        listItems = `
            <li>
                <a target='_blank' href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>    
        `
    } 
    ulEl.innerHTML += listItems
}