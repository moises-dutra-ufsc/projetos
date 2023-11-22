import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    const num = Math.random(state);
    return num / 2;
  });

  const [taskText, setTaskText] = useState("");

  const todoTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
    { id: 3, text: "Fazer mais uma coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [newTask, ...state];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, todoTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
