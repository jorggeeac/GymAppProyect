import React from 'react';
import data from '../noticias.json';
import Noticia from './Noticia';
import '../hojas-de-estilo/ListaNoticias.css';

function ListaNoticias() {

  return (
    <div className='contenedor-noticias'>
      {data.map(noticia =>
        <Noticia
          key={noticia.id}
          id={noticia.id}
          titulo={noticia.titulo}
          fecha={noticia.fecha}
          imagen={noticia.imagen}
          resumen={noticia.resumen} />
      )}
    </div>
  );
}

export default ListaNoticias;