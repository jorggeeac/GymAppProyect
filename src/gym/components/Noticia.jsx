import React from 'react';
import '../hojas-de-estilo/Noticia.css';
import { Link} from 'react-router-dom';


function Noticia({ id, titulo, fecha, imagen, resumen }) {
  return (
    <div className='contenedor-noticia' style={{ marginLeft: "61px" }}>
      <Link to={`/noticias/${id}`}>
        <div className='titulo-noticia'>{titulo}</div>
        <div className='fecha-noticia'>{fecha}</div>
      </Link>
      <img className='imagen-noticia' src={imagen} alt={titulo} />
      <div className='resumen-noticia'>{resumen}</div>
      <div className='contenedor-boton'>
        <Link to={`/noticias/${id}`}><button className='leer-mas'>Leer más</button></Link>
      </div>
    </div>
  );
}
export default Noticia;