import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>{team.name}</h1>
      <p>{team.description}</p>
      <p>Puntos: {team.points}</p>
      <p>Goles: {team.goals}</p>
    </div>
  );
};

export default TeamDetails;
