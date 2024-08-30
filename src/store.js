import { createStore } from "redux";
import tasks from "./reducers/todo.js";

const store = createStore(
  tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
