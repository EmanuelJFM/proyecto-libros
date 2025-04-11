import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '@/components/Header';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
//import './App.scss'; // Importa tus estilos globales o de App

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes> {/* El contenedor principal para tus rutas */}
          {/* Define cada ruta */}
          <Route path="/" element={<HomePage />} /> {/* Ruta raíz */}
          <Route path="/form" element={<FormPage />} /> {/* Ruta /about */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;