import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { AdminPage } from "../pages/AdminPage";
import { UsuarioPage } from "../pages/UsuarioPage";


export const GymRoutes = () => {

  const { isAdminMode } = useSelector(state => state.auth);

  return (
    <Routes>

        { isAdminMode === 'true'
        //aqí habría que crear una ruta para las vistas de administrador y usuario. Mientras va a haber una página para que redireccione y funcione correctamente
          ? <Route path="/admin" element={ <AdminPage /> } /> 
          : <Route path="/user" element={ <UsuarioPage /> } />}


        { isAdminMode === 'true'
          ? <Route path="/*" element={ <Navigate to="/admin" /> } />
          : <Route path="/*" element={ <Navigate to="/user" /> } />}

    </Routes>
  )
}