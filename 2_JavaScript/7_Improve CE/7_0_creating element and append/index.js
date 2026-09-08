let myLeads = ["www.awesomelead.com", "www.epiclead.com","www.greatlead.com"]
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",  () => {
    myLeads.push(inputEl.value)
});

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i]  
    console.log(listItems)
}

ulEl.innerHTML = listItems