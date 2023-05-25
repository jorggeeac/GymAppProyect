import React from 'react';
import data from '../Ejercicios,.json';
import Ejercicios from './Ejercicios';
import '../hojas-de-estilo/ListaEjercicios.css';


function ListaEjercicios() {

  return (
    <div className='contenedor-ejercicios'>
      <div> EJERCICOS FOCALIZADOS </div>
      {data.slice(0).reverse().map(ejercicios =>
        <Ejercicios
          key={ejercicios.idEjercicios}
          id={ejercicios.idEjercicios}
          nombre={ejercicios.nombre}
          imagen={ejercicios.imagen} 
          resumen={ejercicios.resumen}/>
      )}
    </div>
  );
}

export default ListaEjercicios;