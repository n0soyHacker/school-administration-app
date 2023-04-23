import { useState } from "react";
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styleForm.css';
import RegistroEnsenantes from './Formulario/RegistroEnsenantes';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
   
    <BrowserRouter>
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
        </form>
       
  
  <div className="vinculo">
    <br></br>
  <Link to="/formulario/RegistroEnsenantes">¿Aún no te has registrado? Regístrate aquí</Link>
  <Routes>
        <Route path="/formulario/RegistroEnsenantes" element={<RegistroEnsenantes />} />
  </Routes>
      </div>
    </div>
    </div></BrowserRouter>
   
   
  );
}

export default App;
