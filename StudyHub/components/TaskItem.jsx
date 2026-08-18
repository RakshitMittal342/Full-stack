function TaskItem({ task, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          dispatch({
            type: "TOGGLE_TASK",
            payload: task.id,
          })
        }
      />

      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </span>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TASK",
            payload: task.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
