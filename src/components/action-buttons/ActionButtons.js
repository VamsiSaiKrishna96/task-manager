import "./ActionButtons.css";

const ActionButtons = ({ setIsAddingTask, isAddingTask }) => {
  return (
    <div className="actions-container">
      <button className="add-button" onClick={setIsAddingTask}>
        {isAddingTask ? "Close" : "Add"}
      </button>
    </div>
  );
};
//sample commit to check branch permissions
export default ActionButtons;
