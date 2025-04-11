// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '@/assets/scss/header.scss';
function Header() {
  return (
    <header className="appHeader"> 
      <div className="logoContainer">
        <Link to="/" className="logoLink">
            <img src="/img/header/logo-img.png" alt="Logo" className="logoImage" />
        </Link>
      </div>

      {/* Navegación Principal */}
      <nav className="mainNav">
        <ul>
          <li>
            <Link to="/" className="navLink"><i class='bx bx-home-alt-2'></i>Inicio</Link>
          </li>
          <li>
            <Link to="/form" className="navLink"><i class='bx bx-message-add'></i>Añadir libro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;