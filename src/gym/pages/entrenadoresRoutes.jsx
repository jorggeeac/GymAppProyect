import { Navigate, Route, Routes } from "react-router-dom";
import Api from '../components/Api';
import ListaNoticias from '../components/ListaNoticias';
import NoticiaCompleta from '../components/NoticiaCompleta';
import EntrenadoresDisponibles from "../components/EntrenadoresDisponibles";
import Rutinas from "../components/Rutinas";
import ListaEjercicios from "../components/ListaEjercicios";

export const EntrenadoresRoutes = () => {

  return (
      <Routes>
        <Route path='/inicio' element={<ListaNoticias />} />
        <Route path='/noticias/:id' element={<NoticiaCompleta />} />
        <Route path='/alimentacion' element={<Api />} /> 
        <Route path='/entrenadores' element={<EntrenadoresDisponibles />} /> 
        <Route path='/rutinas' element={<Rutinas />} /> 
        <Route path='/ejercicios' element={<ListaEjercicios />} /> 
        <Route path="/*" element={ <Navigate to="/inicio" /> } />

      </Routes>
      );
}