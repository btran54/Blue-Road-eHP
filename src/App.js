import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import LandingPage from './components/LandingPage.jsx';
import Ranking from './components/Ranking.jsx';
import Updates from './components/Updates.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;