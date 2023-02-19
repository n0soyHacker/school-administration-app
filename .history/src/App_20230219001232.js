import { useState } from "react";
import './styleForm.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="topbar">
        <div className="toggle" onClick={handleToggleDarkMode}>
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </div>
      </div>
      {/* inicia el contenedor del formulario */}
      <div className="form-container">
        <form>
          <h2>iniciar sesion de la plataforma</h2>
          <div className="form-group">
            <label htmlFor="username">Nombre</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Iniciar sesión</button>
          <br>
            ¿Aun no te has registrado?  <link to="/FormularioRegistro.jsx">Regístrate</link>
          </br>
        </form>
      </div>
    </div>
  );
}

export default App;
