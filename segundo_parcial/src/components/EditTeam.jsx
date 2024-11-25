import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTeam = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', description: '', points: 0, goals: 0 });
  const navigate = useNavigate();

  
  const fetchTeam = async () => {
    const response = await axios.get(`http://161.35.143.238/flarumbe/${id}`);
    setForm(response.data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://161.35.143.238:8000/flarumbe/${id}`, form);
    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Equipo</h1>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="points"
        type="number"
        placeholder="Puntos"
        value={form.points}
        onChange={handleChange}
        required
      />
      <input
        name="goals"
        type="number"
        placeholder="Goles"
        value={form.goals}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditTeam;
