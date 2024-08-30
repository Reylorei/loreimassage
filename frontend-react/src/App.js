import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LanguageSelectionPage from './components/LanguageSelectionPage/LanguageSelectionPage';
import CurriculumPage from './components/CurriculumPage/CurriculumPage';
import { LanguageProvider } from './context/LanguageContext'; // Importa el LanguageProvider
import './App.css';

function App() {
  return (
    <Router>
      <LanguageProvider> {/* Envuelve tus rutas en el LanguageProvider */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/language-selection" element={<LanguageSelectionPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
