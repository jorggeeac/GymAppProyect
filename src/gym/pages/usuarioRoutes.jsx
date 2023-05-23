import { Navigate, Route, Routes } from "react-router-dom";
import Api from '../components/Api';
import ListaNoticias from '../components/ListaNoticias';
import NoticiaCompleta from '../components/NoticiaCompleta';
import { useSelector } from "react-redux";
import EntrenadoresDisponibles from "../components/EntrenadoresDisponibles";

export const UsuarioRoutes = () => {

  const { status, isAdminMode } = useSelector(state => state.auth);
  console.log(status+ " USUARIOS" )

  return (
      <Routes>
        <Route path='/inicio' element={<ListaNoticias />} />
        <Route path='/noticias/:id' element={<NoticiaCompleta />} />
        <Route path='/alimentacion' element={<Api />} /> 
        <Route path='/entrenadores' element={<EntrenadoresDisponibles />} /> 
        <Route path="/" element={ <Navigate to="/inicio" /> } />

      </Routes>
      );
}