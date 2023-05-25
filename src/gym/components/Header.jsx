import React from 'react';
import '../hojas-de-estilo/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='contenedor-header'>
        <Link className='enlace-inicio' to='/inicio'>Pocket Gym</Link>
      </div>
    </header>
  );
};

export default Header;
