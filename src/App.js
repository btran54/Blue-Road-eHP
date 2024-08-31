import React from 'react';
import { ThemeProvider } from './ThemeContext';
import LandingPage from './components/LandingPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;