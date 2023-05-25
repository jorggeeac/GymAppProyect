import React from 'react';
import '../hojas-de-estilo/Alimento.css';

function Alimento( {name, serving_size_g, calories, fat_total_g, fat_saturated_g, protein_g, sodium_mg, potassium_mg, cholesterol_mg, carbohydrates_total_g, fiber_g, sugar_g}) {
  return (
      
      <div className='contenedor-alimento'>
        <div className='informacion-nutricional'>Nombre: {name}</div>
        <div className='informacion-nutricional'>Cantidad servida: {serving_size_g}g</div>
        <div className='informacion-nutricional'>Calorías: {calories}</div>
        <div className='informacion-nutricional'>Grasas totales: {fat_total_g}g</div>
        <div className='informacion-nutricional'>Grasas saturadas: {fat_saturated_g}g</div>
        <div className='informacion-nutricional'>Proteínas: {protein_g}g</div>
        <div className='informacion-nutricional'>Sodio: {sodium_mg}mg</div>
        <div className='informacion-nutricional'>Potasio: {potassium_mg}mg</div>
        <div className='informacion-nutricional'>Colesterol: {cholesterol_mg}mg</div>
        <div className='informacion-nutricional'>Hidratos de carbono: {carbohydrates_total_g}g</div>
        <div className='informacion-nutricional'>Fibra: {fiber_g}g</div>
        <div className='informacion-nutricional'>Azúcar: {sugar_g}g</div>
      </div>

  );
}

export default Alimento;