import { useEffect, useState } from "react";
import "./App.css";
import TaskContainer from "./components/task-container/TaskContainer";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, detail: "homework", checked: false },
    { id: 1, detail: "classwork", checked: false },
    { id: 2, detail: "officework", checked: false },
  ]);

  function removeFromList(id) {
    console.log(id);

    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  useEffect(() => {
    console.log("added test");
  }, []);

  function setAsChecked(id) {
    setTasks((currentTasks) => {
      console.log(currentTasks);
      return [
        ...currentTasks.map((task) =>
          task.id === id ? { ...task, checked: !task.checked } : task
        ),
      ];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <TaskContainer
          tasks={tasks}
          removeFromList={removeFromList}
          setAsChecked={setAsChecked}
        />
      </header>
    </div>
  );
}

export default App;
