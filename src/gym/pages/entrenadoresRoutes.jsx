import { Navigate, Route, Routes } from "react-router-dom";
import Api from '../components/Api';
import ListaNoticias from '../components/ListaNoticias';
import NoticiaCompleta from '../components/NoticiaCompleta';
import UsuariosAsignados from "../components/UsuariosAsignados";
import Rutinas from "../components/Rutinas";
import Entrenador from '../components/entrenador';

export const EntrenadoresRoutes = () => {

  return (
      <Routes>
        <Route path='/inicio' element={<ListaNoticias />} />
        <Route path='/noticias/:id' element={<NoticiaCompleta />} />
        <Route path='/alimentacion' element={<Api />} /> 
        <Route path='/entrenadores' element={<UsuariosAsignados />} /> 
        <Route path='/rutinas' element={<Rutinas />} /> 
        <Route path='/ejercicios' element={<Entrenador />} /> 
        <Route path="/*" element={ <Navigate to="/inicio" /> } />

      </Routes>
      );
}