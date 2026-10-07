import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main>
      <h1>My Drawing App</h1>
      <div className="drawing-area" role="region" aria-label="Drawing area" />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
