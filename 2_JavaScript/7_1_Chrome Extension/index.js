let myLeads = ["www.awesomelead.com", "www.epiclead.com","www.greatlead.com"]
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",  () => {
    myLeads.push(inputEl.value)
});

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] 
}