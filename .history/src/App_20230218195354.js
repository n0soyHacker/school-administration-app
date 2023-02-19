import React, { useState } from 'react';
import './styleForm.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };

  const containerClasses = `container ${darkMode ? 'dark-mode' : 'light-mode'}`;

  return (
    <div className="App">
      <div className="header">
        <button className="mode-toggle" onClick={handleModeChange}>
          {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </div>
      <div className={containerClasses}>
        <form>
          <h2>Iniciar sesión en la plataforma</h2>
          <div className="form-group">
            <label htmlFor="username">Nombre</label>
            <input type="text" id="username" name='username' required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type='submit'>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default App;
