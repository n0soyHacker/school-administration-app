import logo from './logo.svg';
import './styleForm.css';

function App() {
  return (
    <div className="App">
      
      <form>
        <h2>iniciar sesion</h2>
        <label for="username">Nombre</label>
          <input type="text" id="username" name='username' required></input>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" required></input>
          <button type='submit'>Iniciar sesion</button>
      </form>

    </div>
  );
}

export default App;
