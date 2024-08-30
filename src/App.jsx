import "./App.css";
import { Provider } from "react-redux";
import TodoList from "./pages/TodoList.jsx";
import store from "./store.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
