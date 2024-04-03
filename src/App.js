import { useState } from "react";
import "./App.css";
import FormularioNewTask from "./components/FormularioNewTask";
import ListaTask from "./components/ListaTask";
import ListaDone from "./components/ListaDone";

const INITIAL_STATE = [
  "Estudar listas, maps e filters",
  "Criar um projeto utilizando o conteúde estudado",
];

const INITIAL_STATE_DONE = ["Estudar useState"];

function App() {
  const [toDoList, setToDoList] = useState(INITIAL_STATE);

  const [doneList, setDoneList] = useState(INITIAL_STATE_DONE);

  const addTask = (task) => {
    if (task === "") return;

    const newList = [...toDoList, task];
    setToDoList(newList);
    console.log(newList);
  };

  const removeTask = (indice) => {
    let newList = [...toDoList];
    newList.splice(indice, 1);
    setToDoList(newList);
  };

  const completeTask = (indice) => {
    const novoElemento = toDoList[indice];
    const newDoneList = [...doneList, novoElemento];
    setDoneList(newDoneList);

    removeTask(indice);
  };

  return (
    <div className="App">
      <FormularioNewTask addTask={addTask} />
      <ListaTask
        tasks={toDoList}
        handleDelete={removeTask}
        handleComplete={completeTask}
      />
      <br />
      <ListaDone tasks={doneList} />
    </div>
  );
}

export default App;
