import { combineReducers } from "redux";
// shape of data?
// allPokemon = [];
// currentTeam: [],
// detailPokemon: null,
// searchTerm: "" // App and Searchbar will need this

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return action.value;
    case "CLEAR":
      return "";
    default:
      return state;
  }
};

const detailPokemonReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_DETAIL_POKEMON":
      return action.detailPokemon;
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

// { type: string, payload: object }

const currentTeamReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_TEAM":
      // should return a new array, with the contents of the old array and the new pokemon
      // { type: 'ADD_TO_TEAM', pokemon: pokemonObj }
      // limit team size to 6
      if (state.length < 6) {
        return [...state, action.pokemon];
      } else {
        return state;
      }
    case "REMOVE_FROM_TEAM":
      // { type: 'REMOVE_FROM_TEAM', pokemon: pokemonObj }
      return state.filter(pokemon => pokemon.id !== action.pokemon.id);
    default:
      return state;
  }
};
// const reducer = (state = { searchTerm: "", detailPokemon: null }, action) => {
//   switch (action.type) {
//     case "UPDATE_SEARCH_TERM":
//       return { ...state, searchTerm: action.value };
//     case "CHANGE_DETAIL_POKEMON":
//       return { ...state, detailPokemon: action.detailPokemon };
//     case "CLEAR":
//       return { searchTerm: "", detailPokemon: null };
//     default:
//       return state;
//   }
// };

const allPokemonReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_ALL_POKEMON":
      // { type: 'FETCHED_ALL_POKEMON', allPokemon: []pokemonObj }
      return action.allPokemon;
    default:
      return state;
  }
};

const fetchingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCHING_POKEMON_DETAILS":
      return true;
    case "CHANGE_DETAIL_POKEMON":
      return false;
    default:
      return state;
  }
};

const reducers = {
  currentlyFetching: fetchingReducer,
  searchTerm: searchTermReducer,
  detailPokemon: detailPokemonReducer,
  currentTeam: currentTeamReducer,
  allPokemon: allPokemonReducer
};

export default combineReducers(reducers);
