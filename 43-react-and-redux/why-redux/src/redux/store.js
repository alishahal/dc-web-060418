import { createStore } from "redux";
// state for our application
// keys? types of values?
// count: integer (starts at 0)

// what actions should change the value? (how)
// increment, decrement

// INCREMENT_COUNT (should increment the count)
// DECREMENT_COUNT (should decrement the count)

const reducer = (
  currentState = {
    count: 0
  },
  action
) => {
  // gets called when we first create the store
  // with an init action
  // switch - convention
  // console.log(currentState, action);

  let newState;
  switch (action.type) {
    case "INCREMENT_COUNT":
      newState = {
        count: currentState.count + action.payload.amount
      };
      break;
    case "DECREMENT_COUNT":
      newState = {
        count: currentState.count - action.payload.amount
      };
      break;
    default:
      newState = currentState;
  }
  return newState;
};

// needs a reducer
const store = createStore(reducer);

export default store;
