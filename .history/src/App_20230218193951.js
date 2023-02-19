import './styleForm.css';

function App() {
  return (
    <div className="App">
      
      <div className="form-container">
        <form>
          <h2>iniciar sesion en la plataforma</h2>
          <div className="form-group">
            <label for="username">Nombre</label>
            <input type="text" id="username" name='username' required></input>
          </div>
          <div className="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required></input>
          </div>
          <button type='submit'>Iniciar sesion</button>
        </form>
      </div>

    </div>
  );
}

export default App;
