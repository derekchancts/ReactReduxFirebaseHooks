import { TODO_ADDED, ERROR } from "./actions";

const initState = {};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ADDED:
      console.log(action.todo + " todo added succesfully");
      return state;
    case ERROR:
      console.log("todo error : " + action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
