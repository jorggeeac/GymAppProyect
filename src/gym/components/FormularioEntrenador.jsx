import React, { useState } from 'react';
import '../hojas-de-estilo/FormularioEntrenador.css';
import { doc, updateDoc, getDocs, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { getAuth } from 'firebase/auth';

function FormularioEntrenador({ entrenador }) {

  const [telefono, setTelefono] = useState('');
  const [dias, setDias] = useState(0);

  /**
   * Actualiza el estado correspondiente según el valor introducido en el campo de entrada
   * @param {object} e Evento del cambio de entrada
   */
  const manejarCambio = (e) => {
    const value = e.target.value;
    switch(e.target.name) {
      case 'telefono':
        setTelefono(value);
        break;
      case 'dias':
        setDias(value);
        break;
    }
  }

  /**
   * Maneja el evento de pegado en los campos de entrada numéricos, impidiendo que se peguen otro tipo de valores
   * @param {object} e El objeto del evento
   */
  const manejarPegado = (e) => {
    const valorPegado = e.clipboardData.getData('text');
    if (isNaN(valorPegado)) {
      e.preventDefault();
      alert('El valor debe ser numérico.');
    }
  }

  /**
   * Maneja el evento de envío del formulario, actualizando los datos del usuario en la base de datos
   * @param {object} e El objecto del evento
   */
  const manejarEnvio = async (e) => {
    e.preventDefault();
    try{ 
      const user = getAuth().currentUser;
      const userDocRef = doc(FirebaseDB, 'usuarios', user.uid);
      const credentialsQuerySnapshot = await getDocs(collection(userDocRef, 'credentials'));
      const credentialsDocId = credentialsQuerySnapshot.docs[0].id;
      await updateDoc(doc(FirebaseDB, 'usuarios', user.uid, 'credentials', credentialsDocId), {
        telefono: telefono,
        dias: dias,
        idEntrenador: entrenador.id,
        entrenador: entrenador.displayName
      });
      alert(`Has solicitado al entrenador ${entrenador.displayName} con mail: ${entrenador.email}`);
    } catch (error) {
      console.error(error);
      alert('Hubo un error al actualizar el usuario.');
    }
  }

  return(
    <div className='contenedor-formulario'>
      <form action='' onSubmit={manejarEnvio}>
          <label htmlFor='telefono'>Teléfono</label>
          <input type='tel' name='telefono' onChange={manejarCambio} required />

          <label htmlFor='dias'>Días</label>
          <input type='number' name='dias' onChange={manejarCambio} onPaste={manejarPegado} required />

          <input type='submit' value='Solicitar entrenador' />

        </form>
    </div>
  );
}

export default FormularioEntrenador;