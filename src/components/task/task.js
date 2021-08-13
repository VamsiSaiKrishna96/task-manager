import "./Task.css";
const Task = ({ task, removeFromList, setAsChecked }) => {
  return (
    <div
      className={`task ${task.checked ? "checked" : ""}`}
      onDoubleClick={() => setAsChecked(task.id)}
    >
      <div className="task-detail">{task.detail}</div>
      <span className="delete" onClick={() => removeFromList(task.id)}>
        X
      </span>
    </div>
  );
};

export default Task;
