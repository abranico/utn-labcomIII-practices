import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "o")
      return alert("Por favor, ¡Nombres de usuario sin la letra o!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || username.toLowerCase().includes("o"))
      return alert("Usuario inválido para registrarse");

    alert("¡Usuario registrado correctamente!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onKeyDown={handleKeyDown}
        onChange={handleUsername}
      />
      <button>Registrarse</button>
      <p>{username}</p>
    </form>
  );
};

export default Login;
