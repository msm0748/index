import { createStore } from "redux";

let initState = {
  modalzIndex: 1,
  iframezIndex: 0,
};

const reducer = (state = initState, action) => {
  switch(action.type){
    case "MODAL_PLUS":
      return {
        ...state,
        modalzIndex : state.modalzIndex + 1
      };
    case "IFRAME_PLUS":
      return {
        ...state,
        iframezIndex: 1
      };
    case "IFRAME_MINUS":
      return {
        ...state,
        iframezIndex: -1
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
