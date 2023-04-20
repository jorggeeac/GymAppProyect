import React from 'react';
import '../hojas-de-estilo/Noticia.css';


function Noticia({ id, titulo, fecha, imagen, resumen }) {
  return (
    <div className='contenedor-noticia'>
      <div className='titulo-noticia'>{titulo}</div>
      <div className='fecha-noticia'>{fecha}</div>
      <img className='imagen-noticia' src={imagen} alt={titulo}/>
      <div className='resumen-noticia'>{resumen}</div>
      <div className='contenedor-boton'>
        <button className='leer-mas'>Leer más</button>
      </div>
    </div>
  );
}
// TODO: Implementar funcionalidad del botón "Leer más"
export default Noticia;