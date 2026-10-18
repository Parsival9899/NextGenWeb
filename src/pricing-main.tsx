import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import Pricing from './pages/Pricing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Pricing />
    </ThemeProvider>
  </React.StrictMode>
);
