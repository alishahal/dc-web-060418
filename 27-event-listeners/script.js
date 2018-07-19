document.addEventListener("DOMContentLoaded", function(event){
  document.querySelectorAll(".email").forEach(el => addEmailHandler(el))
  document.querySelectorAll(".person").forEach(el => addRowClickedHandler(el))
  addSubmitHandler(document.querySelector("form"))
})

function addRowClickedHandler(node){
  node.addEventListener("click", function(event){
    document.querySelector("#profile").innerText = `View profile of ${event.target.innerText}`
    console.log(`viewing profile for ${event.target.innerText}`)
    console.log("event target", event.target)
    console.log("event current target", event.currentTarget)
  }, true)
}

function addEmailHandler(node){
  node.addEventListener("click", function(event){
    console.log(`sending an email ${event.target.innerText}`)
  })
}

function addSubmitHandler(node){
  node.addEventListener("submit", function(e){
    e.preventDefault()
    let firstName = document.querySelector("#firstNameInput")
    let lastName = document.querySelector("#lastNameInput")
    let email = document.querySelector("#emailInput")
    appendNewRowElement(document.querySelector("tbody"),
      firstName.value, lastName.value, email.value)
  })
}

function addEventHandler(node){
  node.addEventListener("keydown", function(e){
    console.log(e)
})}

function appendNewRowElement(node, firstName, lastName, email){
  let newRow = document.createElement("tr")
  newRow.id = "row-4"
  addRowClickedHandler(newRow)

  let tdFirstName = document.createElement("td")
  let tdLastName = document.createElement("td")
  let tdEmail = document.createElement("td")

  newRow.appendChild(tdFirstName)
  newRow.appendChild(tdLastName)
  newRow.appendChild(tdEmail)

  tdFirstName.innerText = firstName
  tdLastName.innerText = lastName
  tdEmail.innerText = email

  node.appendChild(newRow)
  addEmailHandler(tdEmail)


}













// console.log("connected")
//
// setTimeout(function(){
//   console.log("I happen after 2 seconds")
// }, 0)
//
// console.log("last line of the file")
