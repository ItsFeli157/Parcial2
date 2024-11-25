import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';
import TeamForm from './components/TeamForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
      <Route path="/team/:id" element={<TeamDetails />} />
      <Route path="/add-team" element={<TeamForm />} />
    </Routes>
  );
};

export default App;
