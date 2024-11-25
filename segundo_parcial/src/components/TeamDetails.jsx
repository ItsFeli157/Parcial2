import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TeamDetails.css';


const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  const fetchTeam = async () => {
    const response = await axios.get(`http://161.35.143.238:8000/flarumbe/${id}`);
    setTeam(response.data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  if (!team) return <p>Cargando...</p>;

  return (
    <div className="container">
      <h1>{team.name}</h1>
      <p><span>Descripción:</span> {team.description}</p>
      <p><span>Puntos:</span> {team.points}</p>
      <p><span>Goles:</span> {team.goals}</p>
      <Link to="/" className="back-button">Volver</Link>
    </div>
  );
  
};

export default TeamDetails;
