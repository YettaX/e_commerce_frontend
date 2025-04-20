// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'; 

function App() {
  return (
    <div className="app">
      <h1 className="text-4xl text-blue-500">Welcome to Vite + React + TailwindCSS!</h1>
      <p>This is a sample project using Vite, React, and TailwindCSS.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
