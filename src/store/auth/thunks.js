import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { getUserRole } from "../../helpers/getUserRole";

export const checkingAuthentication = ( email, password ) => {
    return async (dispatch) =>{

        dispatch( checkingCredentials() );

    }
}


export const startGoogleSignIn = () =>{
    return async (dispatch) =>{

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
  
       if ( !result.ok ) return  dispatch( logout ( result.errorMessage ));

       dispatch( login( result ));
    }

}

export const startRegisterUserWithEmailPassword = ({ email, password, displayName, isAdminMode }) =>{
    return async( dispatch ) => {
        

        dispatch( checkingCredentials() );

        const { ok, photoURL, uid, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout( {errorMessage} ) );

        dispatch( login({ displayName, photoURL, uid, email, isAdminMode }) );

        
        const newDoc = doc( collection( FirebaseDB, `${ uid }/auth/userRole/` ) );
        await setDoc( newDoc, {role: isAdminMode});

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch) => {

        dispatch( checkingCredentials() );
        
        
        const result = await loginWithEmailPassword({ email, password });

        
        const isAdminMode = await getUserRole( result.uid );
       

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( {
            uid: result.uid,
            photoURL: result.photoURL,
            displayName: result.displayName,
            isAdminMode

        } ));
    }
}

export const startLogout = () =>{
    return async( dispatch ) =>{
        await logoutFirebase();

        dispatch( logout() );
    }
}