import React, { useEffect } from 'react';
import { useState } from 'react';
import { collectionGroup, getDocs, query, where, doc, collection } from "firebase/firestore/lite";
import { getAuth } from 'firebase/auth';
import { FirebaseDB } from "../../firebase/config";
import '../hojas-de-estilo/UsuariosAsignados.css';

function UsuariosAsignados() {
  const getUsuariosAsignados = async () => {
    const usuarios = [];
    try {
      const entrenador = getAuth().currentUser;
      const entrenadorDocRef = doc(FirebaseDB, 'usuarios', entrenador.uid);
      const credentialsQuerySnapshot = await getDocs(collection(entrenadorDocRef, 'credentials'));
      const entrenadorID = credentialsQuerySnapshot.docs[0].id;
      console.log(entrenadorID);
      const q = query(collectionGroup(FirebaseDB, 'credentials'), where('idEntrenador', '==', entrenadorID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const usuario = {
          id: doc.id,
          displayName: doc.data().displayName,
          email: doc.data().email,
          telefono: doc.data().telefono,
          dias: doc.data().dias
        };
        usuarios.push(usuario);
      });

      return usuarios;
    } catch (error) {
      console.error(error);
    }
  };

    const [usuariosAsignados, setUsuariosAsignados] = useState([]);

    /**
     * Al cargar la página recibe los datos de todos los usuarios asignados
     */
    useEffect(() => {
      const loadData = async () => {
        const usuarios = await getUsuariosAsignados();
        setUsuariosAsignados(usuarios);
      }
      loadData();
    }, []);


    return (
      <div className='contenedor-usuarios'>
        <div className='titulo-usuarios-asignados'>Tienes los siguientes usuarios asignados:</div>
        {usuariosAsignados.map((usuario, i) => (
          <div className='contenedor-datos-usuario' key={usuario.id}>
            <div className={`contenedor-usuario ${i % 2 === 0 ? 'par' : 'impar'}`} >
              <div className='nombre-usuario'>{usuario.displayName}</div>
              <div className='telefono-usuario'>Número de teléfono: {usuario.telefono}</div>
              <div className='email-usuario'>Dirección de email: {usuario.email}</div>
              <div className='dias'>Días solicitados: {usuario.dias}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default UsuariosAsignados;