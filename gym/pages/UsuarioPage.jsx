import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";


export const UsuarioPage = () => {


  const dispatch = useDispatch();
    const logout = () => {
    dispatch(startLogout());
  }


  return (
    <>
      <div>UsuarioPage</div>
      <button onClick={logout}>Salir</button>
    </>
  )
}