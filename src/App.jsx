import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import LoginPage from './components/login';
import HomePage from './components/home';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRoute><HomePage /></ProtectedRoute>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;
