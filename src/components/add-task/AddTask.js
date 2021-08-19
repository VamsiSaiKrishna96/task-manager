import "./AddTask.css";
export default function AddTask({
  setIsAddingTask,
  taskInput,
  setTaskInput,
  addTaskToTasks,
}) {
  return (
    <div className="add-task-container">
      <div className="add-task-input-wrapper">
        <label className="task-label">Enter Task</label>
        <input
          className="task-input"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
      <button
        className={`submit-button ${
          taskInput === null || taskInput === "" ? "disabled" : ""
        }`}
        disabled={taskInput === null || taskInput === ""}
        onClick={addTaskToTasks}
      >
        Submit
      </button>
    </div>
  );
}
