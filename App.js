import { useState } from "react";
import "./App.css";
import FormularioNewTask from "./components/FormularioNewTask";
import ListaTask from "./components/ListaTask";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTask = (task) => {
    const newList = [...toDoList, task];
    setToDoList(newList);
    console.log(newList);
  };
  return (
    <div className="App">
      <FormularioNewTask addTask={addTask} />
      <ListaTask tasks={toDoList} />
    </div>
  );
}

export default App;
