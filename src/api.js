const btnBuscar = document.getElementById('buscar');
let query = '';
let url = '';

/**
 * Detecta cuando el usuario da click al botón de búsqueda
 */
btnBuscar.addEventListener('click', () => {
  query = document.getElementById('contenedor').value;
  console.log(query);
  url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`;
  mostrarInfo();
});

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7d9a8fcaa4mshc3b1e8bb9d7ca60p16653djsne871eb11bec9',
    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
  }
};

/**
 * Muestra la información nutricional del alimento buscado
 */
function mostrarInfo() {
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      let info = '';
      if (json.length > 0) {
        for (let i = 0; i < json.length; i++) {
          info += `
          <div class="info">
            <h3>Nombre: ${json[i].name}</h3>
            <h3>Cantidad servida: ${json[i].serving_size_g}g</h3>
            <h3>Calorías: ${json[i].calories}</h3>
            <h3>Grasas totales: ${json[i].fat_total_g}g</h3>
            <h3>Grasas saturadas: ${json[i].fat_saturated_g}g</h3>
            <h3>Proteínas: ${json[i].protein_g}g</h3>
            <h3>Sodio: ${json[i].sodium_mg}mg</h3>
            <h3>Potasio: ${json[i].potassium_mg}mg</h3>
            <h3>Colesterol: ${json[i].cholesterol_mg}mg</h3>
            <h3>Hidratos de carbono: ${json[i].carbohydrates_total_g}g</h1>
            <h3>Fibra: ${json[i].fiber_g}g</h3>
            <h3>Azúcar: ${json[i].sugar_g}g</h3>
            <p>=============================================</p>
          </div>
          `;
        }
      } else {
        info = `<h2>¡ERROR! No se ha obtenido ningún resultado con ${query}</h2>`;
      }
      document.getElementById('info').innerHTML = info;

    })
    .catch(err => console.error('error:' + err));
}


// TODO: Mejorar la presentación