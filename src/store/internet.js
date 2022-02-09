import { createStore } from "redux";

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      modalzIndex: 1,
      iframezIndex: 0,
    };
  }
  const newState = { ...currentState };
  if (action.type === "MODAL_PLUS") {
    newState.modalzIndex++;
  }
  if (action.type === "IFRAME_PLUS") {
    newState.iframezIndex = 1;
  }
  if (action.type === "IFRAME_MINUS") {
    newState.iframezIndex = -1;
  }
  return newState;
};
const store = createStore(reducer);
export default store;
