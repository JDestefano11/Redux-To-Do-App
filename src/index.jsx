import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";

import "./index.scss";

import { createStore } from "redux";
import todos from "./reducers";

const store = createStore(todos);

console.log("Initial State", store.getState());

// addTodo
store.dispatch(addTodo("Learn Redux"));
console.log("State after adding first todo:", store.getState());
store.dispatch(addTodo("Read a book"));
console.log("State after adding second todo:", store.getState());
store.dispatch(addTodo("Exercise"));
console.log("State after adding third todo:", store.getState());

// toggleTodo
store.dispatch(toggleTodo(0));
console.log("State after toggling first todo:", store.getState());
store.dispatch(toggleTodo(1));
console.log("State after toggling second todo:", store.getState());
store.dispatch(toggleTodo(2));
console.log("State after toggling third todo:", store.getState());

//deleteTodo
store.dispatch(deleteTodo(0));
console.log("State after deleting first todo:", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
