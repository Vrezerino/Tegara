import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { Lyrics } from './components/Lyrics';
import Footer from './components/Footer';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/lyrics/:album/:song' element={<Lyrics />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);