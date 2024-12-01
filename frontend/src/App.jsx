import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';
import OperatorPage from './components/OperatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/operator" element={<OperatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
