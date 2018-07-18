
function appendNewRowElement(node){
  let newRow = document.createElement("tr")
  newRow.id = "row-4"

  let tdFirstName = document.createElement("td")
  let tdLastName = document.createElement("td")
  let tdEmail = document.createElement("td")

  newRow.appendChild(tdFirstName)
  newRow.appendChild(tdLastName)
  newRow.appendChild(tdEmail)

  tdFirstName.innerText ="Jane"
  tdLastName.innerText ="Doe"
  tdEmail.innerText ="Jane@gmail.com"

  node.appendChild(newRow)
}

function updateInnerHTMLOfElement(node){
  let str = `<tr id="row-4">
          <td class="firstName">Jane</td>
          <td class="lastName">Doe</td>
          <td class="email">Jane@gmail.com</td>
        </tr>`
  node.innerHTML += str
}

document.addEventListener("DOMContentLoaded", function(){
  let tbody = document.querySelector("tbody")
  appendNewRowElement(tbody)
  updateInnerHTMLOfElement(tbody)
})
