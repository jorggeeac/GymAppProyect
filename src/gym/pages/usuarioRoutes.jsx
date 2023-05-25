import { Navigate, Route, Routes } from "react-router-dom";
import Api from '../components/Api';
import ListaNoticias from '../components/ListaNoticias';
import NoticiaCompleta from '../components/NoticiaCompleta';
import { useSelector } from "react-redux";

export const UsuarioRoutes = () => {

  const { status, isAdminMode } = useSelector(state => state.auth);

  return (
      <Routes>
        <Route path='/inicio' element={<ListaNoticias />} />
        <Route path='/:id' element={<NoticiaCompleta />} />
        <Route path='/nutricion' element={<Api />} /> 

        <Route path="/" element={ <Navigate to="/inicio" /> } />

      </Routes>
      );
}