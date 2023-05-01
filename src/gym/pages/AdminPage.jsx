import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";



export const AdminPage = () => {

  const dispatch = useDispatch();
  const logout = () => {
  dispatch(startLogout());
}
  return (
    <>
      <div>admin</div>
      <button onClick={logout}>Salir</button>
    </>
  )
}