import React from 'react';
import '../hojas-de-estilo/Header.css';
import header from '../../assets/header.png';

const Header = () => {
  return (
    <header>
      <a href='/inicio'><img className='imagen-header' src={header} /></a>
    </header>
  );
};

export default Header;
