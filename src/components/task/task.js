import "./Task.css";
import cross from "../../assets/cross.svg";
const Task = ({ task, removeFromList, setAsChecked }) => {
  return (
    <div
      className={`task ${task.checked ? "checked" : ""}`}
      onDoubleClick={() => setAsChecked(task.id)}
    >
      <div className="task-detail">{task.detail}</div>
      <span className="delete" onClick={() => removeFromList(task.id)}>
        <img src={cross} alt="cross-img" className="cross-image" />
      </span>
    </div>
  );
};

export default Task;
