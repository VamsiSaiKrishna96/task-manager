import Task from "../task/task";
import "./Tasks.css";
const Tasks = ({ tasks, removeFromList, setAsChecked }) => {
  return (
    <>
      {tasks && tasks?.length ? (
        tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            removeFromList={removeFromList}
            setAsChecked={setAsChecked}
          />
        ))
      ) : (
        <p>No Tasks. Please click on add to add one.</p>
      )}
    </>
  );
};

export default Tasks;
