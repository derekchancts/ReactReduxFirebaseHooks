export const TODO_ADDED = "Added";
export const ERROR = "Error";

export const addTodo = ({ firestore }, todo) => {
  return (dispatch, getState) => {
    firestore
      .collection("todos")
      .add(todo)
      .then(() => {
        console.log("Then it was done");
        dispatch({ type: TODO_ADDED, todo });
      })
      .catch(err => {
        dispatch({ type: ERROR, err });
      });
  };
};
