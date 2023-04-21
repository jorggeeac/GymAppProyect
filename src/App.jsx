import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from './componentes/Api';
import ListaNoticias from './componentes/ListaNoticias';
import NoticiaCompleta from './componentes/NoticiaCompleta';

function App() {
  return (
    <div className='contenedor'>
      <div className='contenedor-botones'>
        <a href='/'><button className='boton-noticias'>NOTICIAS</button></a>
        <a href='/nutricion'><button className='boton-nutricion'>NUTRICION</button></a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaNoticias />}></Route>
          <Route path='/noticias/:id' element={<NoticiaCompleta />}></Route>
          <Route path='/nutricion' element={<Api />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
