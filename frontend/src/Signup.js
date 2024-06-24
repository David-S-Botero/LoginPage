import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    fecha_nacimiento: '',
    clave: '',
    celular: '',
    numero_documento: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const response = await axios.post('http://localhost:8000/signup/', formData);
      console.log(response.data)   
      navigate('/welcome');
    } catch (error) {
      console.log('Fallo Login', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Email</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clave">clave</label>
          <input
            type="password"
            id="clave"
            name="clave"
            value={formData.clave}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numero_documento">Número de documento</label>
          <input
            type="text"
            id="numero_documento"
            name="numero_documento"
            value={formData.numero_documento}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
