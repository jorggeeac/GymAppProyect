import { Route, Routes } from "react-router-dom";
import '../hojas-de-estilo/UsuarioRoutes.css';
import Api from '../componentes/Api';
import ListaNoticias from '../componentes/ListaNoticias';
import NoticiaCompleta from '../componentes/NoticiaCompleta';

export const UsuarioRoutes = () => {

  return (
      <Routes>
        <Route path='/' element={<ListaNoticias />}></Route>
        <Route path='/noticias/:id' element={<NoticiaCompleta />}></Route>
        <Route path='/nutricion' element={<Api />}></Route>
      </Routes>);
}