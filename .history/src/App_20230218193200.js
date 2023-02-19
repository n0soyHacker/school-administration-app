import './styleForm.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <form>
            <h2>iniciar sesion de la plataforma</h2>
            <label for="username">Nombre</label>
            <input type="text" id="username" name='username' required></input>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required></input>
            <button type='submit'>Iniciar sesion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
