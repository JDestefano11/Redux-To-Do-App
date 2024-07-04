import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

export default todos;
