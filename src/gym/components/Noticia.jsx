import React from 'react';
import '../hojas-de-estilo/Noticia.css';


function Noticia({ id, titulo, fecha, imagen, resumen }) {
  return (
    <div className='contenedor-noticia' style={{ marginLeft: "61px" }}>
      <a href={`noticias/${id}`}>
        <div className='titulo-noticia'>{titulo}</div>
        <div className='fecha-noticia'>{fecha}</div>
      </a>
      <img className='imagen-noticia' src={imagen} alt={titulo} />
      <div className='resumen-noticia'>{resumen}</div>
      <div className='contenedor-boton'>
        <a href={`noticias/${id}`}><button className='leer-mas'>Leer más</button></a>
      </div>
    </div>
  );
}
export default Noticia;