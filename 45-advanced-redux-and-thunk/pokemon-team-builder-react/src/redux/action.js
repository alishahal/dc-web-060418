const addToTeam = pokemon => ({
  type: "ADD_TO_TEAM",
  pokemon
});

const showPokemonDetails = url => dispatch => {
  dispatch({ type: "FETCHING_POKEMON_DETAILS" });
  fetch(url)
    .then(response => response.json())
    .then(json => {
      // need an action
      dispatch({
        type: "CHANGE_DETAIL_POKEMON",
        detailPokemon: json
      });
    });
};

const onClear = () => ({ type: "CLEAR" });

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";
// thunk action creator
const loadPokemon = () => (dispatch, getState) => {
  fetch(URL, {
    body: JSON.stringify({
      user_id: getState().user_id
    })
  })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "FETCHED_ALL_POKEMON", allPokemon: json.results });
    });
};
export { addToTeam, showPokemonDetails, loadPokemon, onClear };
