import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../noticias.json';
import '../hojas-de-estilo/NoticiaCompleta.css';

function NoticiaCompleta() {
  const params = useParams();
  const id = parseInt(params.id);
  const noticia = data.filter(n => n.idNoticia === id)[0];

  return (
    <div className='contenedor-noticia-completa'>
      <div className='titulo-noticia-completa'>{noticia.titulo}</div>
      <div className='fecha-noticia-completa'>{noticia.fecha}</div>
      <img className='imagen-noticia-completa' src={noticia.imagen} alt={noticia.titulo}/>
      <div className='noticia-completa'>{noticia.noticia}</div>
    </div>
  )
}

export default NoticiaCompleta;