import React, { useState } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="bg-[#fffef2] flex-1">
          <Routes>
          <Route path='/' element={<HomePage />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};


export default App;
