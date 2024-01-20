import AppName from "./components/AppName";
import AppTODO from "./components/AppTODO";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <div className="item-container">
        <AppTODO />
        <TodoItem />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
