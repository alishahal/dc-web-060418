document.addEventListener("DOMContentLoaded", function(){
  fetchAllCats()
  fetchAllHobbies()
})

function deleteCat(id){
  fetch(`http://localhost:3000/cats/${id}`,{
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {console.log(data)})
}

function updateCat(id, quote){
  let data = {quote: quote}
  fetch(`http://localhost:3000/cats/${id}`,{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .then(jsonData => console.log(jsonData))
}

function postCat(name, breed, age, quote){
  let data = {name: name, breed: breed, age: age, quote: quote}
  fetch(`http://localhost:3000/cats`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .then(jsonData => console.log(jsonData))
}

function renderCat(cat){
  console.log(cat)
  let li = document.createElement('li')
  let str = ''
  cat.hobbies.forEach((hobby) => {str += `${hobby.title} `})
  li.innerHTML = `${cat.name} ${cat.breed} ${cat.age} ${cat.quote} ${str}`
  document.querySelector('#cats').appendChild(li)
}

function fetchAllCats(){
  fetch(`http://localhost:3000/cats`)
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => renderCat(cat))
  })
}

function fetchAllHobbies(){
  fetch(`http://localhost:3000/hobbies`)
  .then(response => response.json())
  .then(data => {
    data.forEach(hobby => renderHobby(hobby))
  })
}

function renderHobby(hobby){
  let li = document.createElement('li')
  li.innerHTML = `${hobby.title} ${hobby.description}`
  document.querySelector('#hobbies').appendChild(li)
}
