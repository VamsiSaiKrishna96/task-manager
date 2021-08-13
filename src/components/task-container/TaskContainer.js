import ActionButtons from "../action-buttons/ActionButtons";
import "./TaskContainer.css";
import Tasks from "../tasks/Tasks";
const TaskContainer = ({ tasks,removeFromList,setAsChecked }) => {
  return (
    <div className="task-container">
      <ActionButtons />
      <Tasks tasks={tasks} removeFromList={removeFromList} setAsChecked={setAsChecked} />
    </div>
  );
};

export default TaskContainer;
