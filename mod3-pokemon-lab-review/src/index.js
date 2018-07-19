document.addEventListener('DOMContentLoaded', function(){
  let pokemonArr= data.pokemons
  searchEventListener(pokemonArr)
});

function appendToPage(input, pokemonArr){
  let filteredPokemon = []
  pokemonArr.forEach((pokemon)=> {
    if(pokemon.name.includes(input)=== true){
       if(input === ""){
         filteredPokemon = []
       }else{
         filteredPokemon.push(pokemon);
       }
      };
  });
    getPokemonContainer().innerHTML = filteredPokemon.map(pokemon => pokemonCardTemplate(pokemon)).join('');
    addEventListenerLink()
}

function pokemonCardTemplate(pokemon){
  return `<div class="pokemon-cards">
  <h2>${pokemon.name}</h2>
  <img id="${pokemon.order}" src="${pokemon.sprites.front}" data-back="${pokemon.sprites.back}" data-front="${pokemon.sprites.front}"/>
  <br>
  <a class="flip" id="${pokemon.order}-link">flip card</a>
  </div>`
}

function getPokemonContainer(){
  return document.getElementById('pokemon-container');
}

function getLink(){
  return document.querySelectorAll('.flip')
}
function addEventListenerLink(){
  getLink().forEach((link)=>{
    link.addEventListener('click',(e)=> getAllCardElements(e.target.id))
  })
}

function getAllCardElements(linkId){
let imgId = linkId.split('-')[0]
getImageAndToggle(imgId)
}

function getImageAndToggle(id){
let imgElement= document.getElementById(id);
let source = imgElement.src;
let front = imgElement.dataset.front;
let back = imgElement.dataset.back;

imgElement.src = source.indexOf('/back') === -1 ? back : front;

}

function searchEventListener(pokemonArr){
  const searchInput= document.getElementById("pokemon-search-input");
  searchInput.addEventListener('input', (e) => {
    appendToPage(e.target.value.trim(), pokemonArr);
  })
}
