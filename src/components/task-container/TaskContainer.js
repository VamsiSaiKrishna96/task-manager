import ActionButtons from "../action-buttons/ActionButtons";
import "./TaskContainer.css";
import Tasks from "../tasks/Tasks";
import AddTask from "../add-task/AddTask";
const TaskContainer = ({
  tasks,
  removeFromList,
  setAsChecked,
  isAddingTask,
  setIsAddingTask,
  addTaskToTasks,
  setTaskInput,
  taskInput,
}) => {
  return (
    <div className="task-container">
      <ActionButtons
        setIsAddingTask={setIsAddingTask}
        isAddingTask={isAddingTask}
      />
      {isAddingTask ? (
        <AddTask
          addTaskToTasks={addTaskToTasks}
          setIsAddingTask={setIsAddingTask}
          setTaskInput={setTaskInput}
          taskInput={taskInput}
        />
      ) : (
        ""
      )}
      <Tasks
        tasks={tasks}
        isAddingTask={isAddingTask}
        removeFromList={removeFromList}
        setAsChecked={setAsChecked}
      />
    </div>
  );
};

export default TaskContainer;
