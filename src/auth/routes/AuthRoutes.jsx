import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useSelector } from "react-redux";


export const AuthRoutes = () => {

  const { status } = useSelector( state => state.auth );


  return (
    <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />


    </Routes>
  )
}
