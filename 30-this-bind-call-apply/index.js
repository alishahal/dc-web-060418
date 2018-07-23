"use strict"; // strange!!
// what does this mean?

function getPokemon() {
  return this; // returns window!!
}

function printPokedexEntry(first, second) {
  console.log(first, second);
  console.log(this.id, this.name, this.hp);
  this.moves.forEach(
    move => {
      console.log(this.name, "learned", move);
      this.moves.forEach(move => console.log("nested", move));
    }
    // function(move) {
    // console.log(this.name, "learned", move);
    // }.bind(this)
  );
}

var bulbasaur = {
  name: "bulbasaur",
  id: 1,
  hp: 45,
  moves: ["vine whip", "tackle", "razor leaf"],
  // window ??
  // getPokemon ??
  // bulbasaur
  // undefined ??
  whoami: getPokemon,
  printPokedexEntry: printPokedexEntry
};

var venusaur = {
  name: "venusaur",
  id: 2,
  hp: 70,
  moves: ["vine whip", "tackle", "razor leaf"],
  // ???
  whoami: getPokemon
};
