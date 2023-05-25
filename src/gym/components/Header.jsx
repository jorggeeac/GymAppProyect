import React from 'react';
import '../hojas-de-estilo/Header.css';
import header from '../../assets/header.png';

const Header = () => {
  return (
    <header>
      <div className='contenedor-header'>
        <a href='/inicio'>Pocket Gym</a>
      </div>
    </header>
  );
};

export default Header;
