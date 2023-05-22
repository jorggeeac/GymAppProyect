import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { AdminPage } from "../pages/AdminPage";
import { UsuarioPage } from "../pages/UsuarioPage";
import { UsuarioRoutes } from "../pages/usuarioRoutes";


export const GymRoutes = () => {

  const { status, isAdminMode } = useSelector(state => state.auth);

  return (
    <Routes>

        { isAdminMode === 'true' && status ==='authenticated'
        //aqí habría que crear una ruta para las vistas de administrador y usuario. Mientras va a haber una página para que redireccione y funcione correctamente
          ? <Route path="/*" element={ <AdminPage /> } /> 
          : <Route path="/*" element={ <UsuarioRoutes /> } />  
        }

    </Routes>
  )
}