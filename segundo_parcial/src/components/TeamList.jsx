import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TeamList.css';


const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [sorted, setSorted] = useState(false);

  const fetchTeams = async () => {
    const response = await axios.get('http://161.35.143.238:8000/flarumbe');
    setTeams(response.data);
  };

  const deleteTeam = async (id) => {
    await axios.delete(`http://161.35.143.238:8000/flarumbe/${id}`);
    fetchTeams();
  };

  const sortTeams = () => {
    const sortedTeams = [...teams].sort((a, b) => b.points - a.points);
    setTeams(sortedTeams);
    setSorted(true);
  };

  const resetSort = () => {
    fetchTeams();
    setSorted(false);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Equipos</h1>
      <button onClick={sortTeams} disabled={sorted}>Ordenar por puntos</button>
      <button onClick={resetSort} disabled={!sorted}>Restablecer</button>
      <ul>
      {teams.map((team) => (
        <li key={team.id}>
        <h3>{team.name}</h3>
        <p>{team.description}</p>
        <Link to={`/team/${team.id}`}>Ver Detalles</Link>
        <button onClick={() => deleteTeam(team.id)}>Eliminar</button>
        <Link to={`/edit-team/${team.id}`}>
        <button>Editar</button>
        </Link>
        </li>
      ))}
      </ul>
      <Link to="/add-team">
        <button>Agregar Nuevo Equipo</button>
      </Link>
    </div>
  );
};

export default TeamList;


