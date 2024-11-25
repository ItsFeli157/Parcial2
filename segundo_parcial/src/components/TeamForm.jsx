import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeamForm = () => {
  const [form, setForm] = useState({ name: '', description: '', points: 0, goals: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://161.35.143.238:8000/flarumbe', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Agregar Equipo</h1>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="description" placeholder="Descripción" onChange={handleChange} required />
      <input name="points" type="number" placeholder="Puntos" onChange={handleChange} required />
      <input name="goals" type="number" placeholder="Goles" onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TeamForm;
