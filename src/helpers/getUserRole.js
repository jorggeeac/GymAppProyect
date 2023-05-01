import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const getUserRole = async( uid ) =>{

    const docUserRole = collection( FirebaseDB, `${ uid }/auth/userRole/` );
    const showDocIsAdminMode =await getDocs( docUserRole );
    
    const role = [];
    showDocIsAdminMode.forEach( userRole =>{

        role.push( userRole._document.data.value.mapValue.fields.role.booleanValue);
       
    })
    return role.join();
    
}