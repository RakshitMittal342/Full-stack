export const initialTasks = [
  { id: 1, title: "Finish DBMS assignment", completed: false },
  { id: 2, title: "Revise React hooks", completed: false },
  { id: 3, title: "Submit lab report", completed: true },
];

export function taskReducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
