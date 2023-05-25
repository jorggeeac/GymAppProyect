import React, { useEffect } from 'react';
import { useState } from 'react';
import '../hojas-de-estilo/EntrenadoresDisponibles.css';
import { collectionGroup, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import FormularioEntrenador from './FormularioEntrenador';

function EntrenadoresDisponibles() {

  /**
   * Recibe todos los entrenadores disponibles desde la base de datos
   * @returns un array que contiene todos los entrenadores disponibles
   */
  const getEntrenadoresDisponibles = async () => {
    const entrenadores = [];
    try {
      const q = query(collectionGroup(FirebaseDB, 'credentials'), where('role', '==', true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const entrenador = {
          id: doc.id,
          displayName: doc.data().displayName,
          email: doc.data().email
        };
        entrenadores.push(entrenador);
      });

      return entrenadores;
    } catch (error) {
      console.error(error);
    }
  };

  const [entrenadoresDisponibles, setEntrenadoresDisponibles] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState({});

  /**
   * Al cargar la página recibe los datos de todos los entrenadores disponibles y oculta todos los formularios
   */
  useEffect(() => {
    const loadData = async () => {
      const entrenadores = await getEntrenadoresDisponibles();
      const mostrarFormularioInicial = entrenadores.reduce((acc, entrenador) => {
        acc[entrenador.id] = false;
        return acc;
      }, {});
      setEntrenadoresDisponibles(entrenadores);
      setMostrarFormulario(mostrarFormularioInicial);
    }
    loadData();
  }, []);

  /**
   * Función que muestra el formulario correspondiente al entrenador seleccionado por el usuario y oculta todos los demás.
   * @param {} id el id del entrenador
   */
  const manejarMostrarFormulario = (id) => {
    setMostrarFormulario((prevState) => {
      const newState = Object.entries(prevState).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: key === String(id) ? !value : false,
        }),
        {}
      );
      return newState;
    });
  };


  // const getUser = async () => {
  //   try {
  //     const user = getAuth().currentUser;
  //     const userDocRef = doc(FirebaseDB, 'usuarios', user.uid);
  //     const credentialsQuerySnapshot = await getDocs(collection(userDocRef, 'credentials'));
  //     const credentialsDoc = credentialsQuerySnapshot.docs[0];

  //     return credentialsDoc.data();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const comprobarStatus = async () => {
  //   try {
  //     const user = getAuth().currentUser;
  //     const userDocRef = doc(FirebaseDB, 'usuarios', user.uid);
  //     const credentialsQuerySnapshot = await getDocs(collection(userDocRef, 'credentials'));
  //     const credentialsDocEntrenador = credentialsQuerySnapshot.docs[0].data().entrenador;
  //     console.log(credentialsDocEntrenador);
  //     if (credentialsDocEntrenador) {
  //       setStatus(1); // Ya ha solicitado un entrenador
  //     } else {
  //       setStatus(0); // No ha solicitado ningún entrenador
  //     }
  //     console.log(status);

  //     localStorage.setItem(STATUS_KEY, status.toString());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const manejarCancelacion = async () => {
  //   try {
  //     const user = getAuth().currentUser;
  //     const userDocRef = doc(FirebaseDB, 'usuarios', user.uid);
  //     const credentialsQuerySnapshot = await getDocs(collection(userDocRef, 'credentials'));
  //     const credentialsDocId = credentialsQuerySnapshot.docs[0].id;
  //     await updateDoc(doc(FirebaseDB, 'usuarios', user.uid, 'credentials', credentialsDocId), {
  //       telefono: '',
  //       dias: '',
  //       idEntrenador: '',
  //       entrenador: ''
  //     });
  //     setStatus(0);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

//  if (status == 0) {
    return (
      <div className='contenedor-entrenadores'>
        {entrenadoresDisponibles.map((entrenador, i) => (
          <div className='contenedor-formulario-entrenador' key={entrenador.id}>
            <div className={`contenedor-entrenador ${i % 2 === 0 ? 'par' : 'impar'}`} onClick={() => manejarMostrarFormulario(entrenador.id)}>
              <div className='nombre-entrenador'>{entrenador.displayName}</div>
            </div>
            <div className='contenedor-formulario'>
              {mostrarFormulario[entrenador.id] && (<FormularioEntrenador entrenador={entrenador} />)} {/* Solo muestra el formulario si el usuario le ha dado click */}
            </div>
          </div>
        ))}
      </div>
    );
//  }

//   if (status == 1) {
//     return (
//       <div className='contenedor-informacion'>
//         Actualmente has solicitado al entrenador {user.entrenador} durante {user.dias} días.
//         ¿Deseas cancelar la solicitud?
//         <div className='contenedor-boton-cancelar'>
//           <button onClick={manejarCancelacion}>Cancelar solicitud</button>
//         </div>
//       </div>
//     )
//   }
}



export default EntrenadoresDisponibles;
