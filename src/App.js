import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskContainer from "./components/task-container/TaskContainer";

function App() {
  // using multiple use state hooks and their manipulation
  const [tasks, setTasks] = useState([]);

  const [isAddingTask, setIsAddingTask] = useState(false);

  const [taskInput, setTaskInput] = useState("");

  function setIsAddingTaskData() {
    setIsAddingTask((isAddingTask) => !isAddingTask);
  }

  function removeFromList(id) {
    setTasks((previousTasks) => [
      ...previousTasks.filter((task) => task.id !== id),
    ]);
  }

  function addTaskToTasks() {
    const task = { id: uuidv4(), detail: taskInput, checked: false };
    setTasks((previousTasks) =>
      previousTasks && previousTasks?.length
        ? addToExistingTasks(previousTasks, task)
        : [task]
    );
    setIsAddingTaskData();
    setTaskInputValue("");
  }

  function addToExistingTasks(previousTasks, task) {
    return [...previousTasks, task];
  }

  function setTaskInputValue(value) {
    setTaskInput(value);
  }

  function setAsChecked(id) {
    setTasks((currentTasks) => {
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
          isAddingTask={isAddingTask}
          setIsAddingTask={setIsAddingTaskData}
          removeFromList={removeFromList}
          setAsChecked={setAsChecked}
          taskInput={taskInput}
          setTaskInput={setTaskInputValue}
          addTaskToTasks={addTaskToTasks}
        />
      </header>
    </div>
  );
}

export default App;
