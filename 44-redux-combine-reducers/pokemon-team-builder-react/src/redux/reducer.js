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

const reducers = {
  searchTerm: searchTermReducer,
  detailPokemon: detailPokemonReducer
};

export default combineReducers(reducers);
