import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return alert("El campo esta vacio");
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Hacer la práctica obligatoria de laboratorio..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
};

export default AddTask;
