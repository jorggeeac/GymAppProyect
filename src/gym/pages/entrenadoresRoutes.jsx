import { Navigate, Route, Routes } from "react-router-dom";
import Api from '../components/Api';
import ListaNoticias from '../components/ListaNoticias';
import NoticiaCompleta from '../components/NoticiaCompleta';
import UsuariosAsignados from "../components/UsuariosAsignados";
import Rutinas from "../components/Rutinas";
import ListaEjercicios from "../components/ListaEjercicios";

export const EntrenadoresRoutes = () => {

  return (
      <Routes>
        <Route path='/inicio' element={<ListaNoticias />} />
        <Route path='/noticias/:id' element={<NoticiaCompleta />} />
        <Route path='/alimentacion' element={<Api />} /> 
        <Route path='/entrenadores' element={<UsuariosAsignados />} /> 
        <Route path='/rutinas' element={<Rutinas />} /> 
        <Route path='/ejercicios' element={<ListaEjercicios />} /> 
        <Route path="/*" element={ <Navigate to="/inicio" /> } />

      </Routes>
      );
}