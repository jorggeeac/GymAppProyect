import React, { useState } from 'react';
import Alimento from './Alimento';
// import '../hojas-de-estilo/Api.css';
import { AuthLayoutNavBar } from '../../ui/authLayoutNavBar';

function Api() {

  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7d9a8fcaa4mshc3b1e8bb9d7ca60p16653djsne871eb11bec9',
      'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
    }
  };

  const manejarCambio = e => {
    setQuery(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`, options)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  return (

    <>
    <AuthLayoutNavBar />


    <div className='contenedor-api'>
      <form
        className='busqueda-formulario'
        onSubmit={manejarEnvio} >
        <input
          className='busqueda'
          type='text'
          placeholder='Ejemplo: 1kg pollo'
          onChange={manejarCambio} />
        <button className='busqueda-boton'>
          Buscar
        </button>
      </form>
      <div className='informacion-nutricional-contenedor'>
        {
          data?.map((alimento) => (
            <Alimento
              name={alimento.name}
              serving_size_g={alimento.serving_size_g}
              calories={alimento.calories}
              fat_total_g={alimento.fat_total_g}
              fat_saturated_g={alimento.fat_saturated_g}
              protein_g={alimento.protein_g}
              sodium_mg={alimento.sodium_mg}
              potassium_mg={alimento.potassium_mg}
              cholesterol_mg={alimento.cholesterol_mg}
              carbohydrates_total_g={alimento.carbohydrates_total_g}
              fiber_g={alimento.fiber_g}
              sugar_g={alimento.sugar_g}
            />
          ))
        }
      </div>
    </div>
    </>
  );
}

export default Api;