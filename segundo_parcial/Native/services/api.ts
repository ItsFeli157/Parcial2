import axios from 'axios';

const api = axios.create({
  baseURL: 'http://161.35.143.238:8000/flarumbe', // Cambia esta URL según tu API
});

export const fetchTeamData = async (teamId: string) => {
  const response = await api.get(`/teams/${teamId}`);
  return response.data;
};
