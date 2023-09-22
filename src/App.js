import TodoInput from "./ToDoInput";
import TodoLists from "./ToDoLists";
import "./App.css";

const App = () => (
  <div className="App">
    <TodoInput />
    <div className="todo-wrapper">
      <TodoLists />
    </div>
  </div>
);

export default App;
