import React from 'react';

function RegistroEnsenantes() {
  return (
    <div>
      <h1>Formulario de registro de enseñantes</h1>
      <form>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" required /><br />

        <label htmlFor="correo">Correo electrónico institucional:</label>
        <input type="email" id="correo" name="correo" required /><br />

        <label htmlFor="departamento">Departamento o área de enseñanza:</label>
        <input type="text" id="departamento" name="departamento" required /><br />

        <label htmlFor="nivel">Nivel de enseñanza:</label>
        <select id="nivel" name="nivel">
          <option value="preescolar">Preescolar</option>
          <option value="primaria">Primaria</option>
          <option value="secundaria">Secundaria</option>
          <option value="universidad">Universidad</option>
        </select><br />

        <label htmlFor="especializacion">Área de especialización o materia que enseña:</label>
        <input type="text" id="especializacion" name="especializacion" required /><br />

        <label htmlFor="educacion">Nivel de educación:</label>
        <input type="radio" id="licenciatura" name="educacion" value="licenciatura" required />
        <label htmlFor="licenciatura">Licenciatura</label>
        <input type="radio" id="maestria" name="educacion" value="maestria" />
        <label htmlFor="maestria">Maestría</label>
        <input type="radio" id="doctorado" name="educacion" value="doctorado" />
        <label htmlFor="doctorado">Doctorado</label><br />

        <label htmlFor="usuario">Nombre de usuario:</label>
        <input type="text" id="usuario" name="usuario" required /><br />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required /><br />

        <p>
          <label htmlFor="privacidadLetrero">Preferencias de privacidad y notificaciones:</label>
          <br />
          <input type="checkbox" id="privacidad" name="privacidad" required />
          <label htmlFor="privacidad">
            He leído y acepto la <a href="#">política de privacidad</a>
          </label>
          <br />
          <input type="checkbox" id="notificacionesAceptar" name="notificacionesAceptar" required />
          <label htmlFor="notificaciones">
            Deseo recibir notificaciones sobre la plataforma en mi correo electrónico.
          </label>
          <br />
        </p>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default RegistroEnsenantes;

