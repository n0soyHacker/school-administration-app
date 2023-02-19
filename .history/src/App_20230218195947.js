import { useState } from "react";
import './styleForm.css';

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
        </form>
      </div>
    </div>
  );
}

export default App;
