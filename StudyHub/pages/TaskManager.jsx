import { useEffect, useReducer, useState } from "react";
import TaskList from "../components/TaskList";
import {
  taskReducer,
  initialTasks,
} from "../reducers/taskReducer";

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch({
      type: "SET_TASKS",
      payload: initialTasks,
    });
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setNewTask("");
  };

  return (
    <div>
      <h2>MY TASKS</h2>

      <input
        value={newTask}
        onChange={(e) =>
          setNewTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
      />
    </div>
  );
}

export default TaskManager;
