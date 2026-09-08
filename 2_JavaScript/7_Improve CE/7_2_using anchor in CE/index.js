let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",  () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
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
        `
    } 
    ulEl.innerHTML += listItems
}