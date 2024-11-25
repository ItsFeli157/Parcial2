import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';
import TeamForm from './components/TeamForm';
import EditTeam from './components/EditTeam';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
      <Route path="/team/:id" element={<TeamDetails />} />
      <Route path="/add-team" element={<TeamForm />} />
      <Route path="/edit-team/:id" element={<EditTeam />} />
    </Routes>
  );
};

export default App;