import { useState } from "react";
import "./App.css";
import AddTask from "./components/addTask/AddTask";
import TasksList from "./components/tasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks((prevState) => prevState.concat(newTask));
  };

  const handleToggleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <header>
        <h1>Lista de Tareas</h1>
        <AddTask onAddTask={handleAddTask} />
      </header>
      <main>
        <TasksList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onRemoveTask={handleRemoveTask}
        />
      </main>
    </div>
  );
}

export default App;
