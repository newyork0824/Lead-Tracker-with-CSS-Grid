const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
let myLeads = []
const tabs = [{url:"https://www.linkin.com"}]
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
tabBtn = document.getElementById("tab-btn")
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}





inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))


  render(myLeads)
  //const li = document.createElement("li")
  //li.textContent = myLeads[i]
  //ulEl.append(li)
})

function render( leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems +=
      `<li>
  <a target=blank href=${leads[i]}> 
  ${leads[i]}
  </a>
</li>`
  }
  ulEl.innerHTML = listItems
}

clearBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  ulEl.innerHTML = " "
  myLeads = []
})

tabBtn.addEventListener("click", function(){
//console.log(tabs[0].url)
//chrome API. ASKING CHROME FOR CURRENT TAB 
//chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//myLeads.push(tabs[0].url)
//localStorage.setItem("myLeads", JSON.stringify(myLeads))
//render(myLeads)
//})

myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)

})






