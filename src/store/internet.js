import { createStore } from "redux";

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      zindex: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.zindex++;
  }
  return newState;
};
const store = createStore(reducer);
export default store;
