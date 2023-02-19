import React, { useState } from 'react';
import axios from 'axios';

const FormularioRegistro = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://miendpoint.com/registro', usuario);
      console.log(response.data);
      alert('Registro exitoso!');
      setUsuario({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
      alert('Ha ocurrido un error en el registro.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={usuario.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={usuario.password} onChange={handleChange} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default FormularioRegistro;
