// src/api/api.js
import axios from 'axios';

const API_URL = 'http://161.35.143.238:8000/flarumbe';

export const getAllTeams = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTeamById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addTeam = async (team) => {
  await axios.post(API_URL, team);
};

export const updateTeam = async (id, team) => {
  await axios.put(`${API_URL}/${id}`, team);
};

export const deleteTeam = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
