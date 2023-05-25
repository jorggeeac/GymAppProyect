import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { UsuarioRoutes } from "../pages/usuarioRoutes";
import { EntrenadoresRoutes } from "../pages/entrenadoresRoutes";


export const GymRoutes = () => {

  const { status, isAdminMode } = useSelector(state => state.auth);

  return (
    <Routes>

        { isAdminMode === 'true' && status ==='authenticated'
        //aqí habría que crear una ruta para las vistas de administrador y usuario. Mientras va a haber una página para que redireccione y funcione correctamente
          ? <Route path="/*" element={ <EntrenadoresRoutes /> } /> 
          : <Route path="/*" element={ <UsuarioRoutes /> } />  
        }

    </Routes>
  )
}