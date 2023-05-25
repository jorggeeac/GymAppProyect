import React from 'react';
import '../hojas-de-estilo/Ejercicios.css'

function Ejercicios({ id, Ejercicios,imagen, resumen}) {
  return (
    <div className='contenedor-ejercicios'>
      <a href={`Ejercicios/${id}`}>
        <div className='titulo-Ejercicios'>{Ejercicios}</div>
      </a>
      <img className='imagen-Ejercicios' src={imagen} alt={Ejercicios} />
      <div className='resumen-Ejercicios'>{resumen}</div>
    </div>
  );
}
export default Ejercicios;