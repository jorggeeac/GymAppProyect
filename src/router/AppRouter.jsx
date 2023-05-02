import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { getUserRole } from "../helpers/getUserRole"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GymRoutes } from "../gym/routes/gymRoutes"




export const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async( user ) =>{
      if(!user) return dispatch( logout() );

      const {uid, photoURL, displayName, email} = user;

      const isAdminMode = await getUserRole( user.uid );

      return dispatch(login( {uid, photoURL, displayName, email, isAdminMode} ));

    })


  }, []);

  const { status } = useSelector( state => state.auth );
 
  return (
    <Routes>

        {
          (status === 'authenticated')
            ? <Route path="/*" element={ <GymRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }
          <Route path='/*' element={ <Navigate to='/auth/login' />  } />

    </Routes>
  )
}