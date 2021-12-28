import { createStore } from "redux";

//Action Type : 액션의 이름. 문자열은 오타 등 오류가 발생할 확률이
// 높기 때문에 변수에 할당하여 사용한다.
const ADD = "ADD";
const DELETE = "DELETE";

//Action Creator: reducer에게 type과 필요한 요소를 전달한다.
export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// Reducer : type에 따라 state의 값을 재할당한다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionsCreators = {
  addToDo,
  deleteToDo,
};

export default store;
