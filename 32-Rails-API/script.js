document.addEventListener("DOMContentLoaded", function(){
  fetchAllCats()
  fetchAllHobbies()
})

function renderCat(cat){
  let li = document.createElement('li')
  li.innerHTML = `${cat.name} ${cat.breed} ${cat.age} ${cat.quote}`
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
