import React from 'react';
import '../hojas-de-estilo/Header.css';

const Header = () => {
  return (
    <header>
      <div className='contenedor-header'>
        <a className='enlace-inicio' href='/inicio'>Pocket Gym</a>
      </div>
    </header>
  );
};

export default Header;
