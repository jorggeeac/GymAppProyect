import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import { FirebaseAuth } from './config';
import { getUserRole } from '../helpers/getUserRole';


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() =>{
    try{

        const result = await signInWithPopup(FirebaseAuth, googleProvider)

        const {displayName, email, photoURL, uid} = result.user;
        

        return{
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error){

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode,
            errorMessage
        }
        

    }

}


export const registerUserWithEmailPassword = async({ displayName, email, password }) =>{

    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, isAdminMode } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        } );
       
        return{ ok: true,
                uid, photoURL, displayName, email, isAdminMode
            }
          

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

       const isAdminMode = await getUserRole( resp.user.uid );

        return {
            ok: true,
            uid, photoURL, displayName, isAdminMode
        }
        
    } catch (error) {
        return { 
            ok: false, 
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async() =>{

    return await FirebaseAuth.signOut();
    
}