import Task from "../task/task";
import "./Tasks.css";
const Tasks = ({ tasks, removeFromList, setAsChecked }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          removeFromList={removeFromList}
          setAsChecked={setAsChecked}
        />
      ))}
    </>
  );
};

export default Tasks;
