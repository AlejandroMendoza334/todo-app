import React, { useState } from "react";
import "./App.css";

function App() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setLista([...lista, tarea]);
    setTarea("");
  };
  const eliminarTarea = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              agregarTarea();
            }
          }}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {lista.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => eliminarTarea(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
