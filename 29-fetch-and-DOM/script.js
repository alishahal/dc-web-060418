function render(pokemon){
  // console.log("inside render")
  let pokemonCard = document.createElement('div')
  pokemonCard.classList.add('pokemon-cards')
  pokemonCard.id = pokemon.id
  pokemonCard.innerHTML +=
  `<h2>${pokemon.name}</h2>
  <img src="${pokemon.sprite}"/>`
  addClickHandler(pokemonCard)
  getPokemonContainer().appendChild(pokemonCard)
}

document.addEventListener("DOMContentLoaded", function(){
  fetchAllPokemon()
  addFormHandler()
});

function addFormHandler(){
  document.querySelector('form').addEventListener('submit',
  function(event){
    event.preventDefault()
    let pokemonName = document.getElementById('name-input').value
    let pokemonSprite = document.getElementById('sprite-input').value
    postNewPokemon(pokemonName, pokemonSprite)
  })
}

function getPokemonContainer(){
  return document.getElementById('pokemon-container')
}

function clearPokemon(){
  getPokemonContainer().innerHTML = ''
}

//Typical GET Fetch
function fetchAllPokemon(){
  fetch(`http://localhost:3000/pokemon/`)
  .then((response) => response.json())
  .then((jsonData) => {
    //do something with data... what? up to you... depends...
    jsonData.forEach((pokemon) => render(pokemon))
  })
}

function addClickHandler(node){
  node.addEventListener("click", function(event){
    // console.log("id", event.currentTarget.id)
    deleteFetchAPokemon(event.currentTarget.id)
  })
}

//Typical DELETE Fetch
function deleteFetchAPokemon(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  .then((response) => {
    console.log("Successfully deleted pokemon", id)
    getPokemonContainer().removeChild(document.getElementById(id))
  })
}

//Typical POST Fetch
function postNewPokemon(pokemonName, pokemonSprite){
  let data = {
    "name": pokemonName,
    "sprite": pokemonSprite
  }
  fetch(`http://localhost:3000/pokemon/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(pokemon => {
    //do something
    render(pokemon)
  })

}
