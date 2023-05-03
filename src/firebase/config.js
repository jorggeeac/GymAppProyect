import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAwkyCSke5MXKnyqVhdMFt5AkF0kMDgubM",
  authDomain: "proyecto-grupo6-e3b4e.firebaseapp.com",
  projectId: "proyecto-grupo6-e3b4e",
  storageBucket: "proyecto-grupo6-e3b4e.appspot.com",
  messagingSenderId: "414214806894",
  appId: "1:414214806894:web:9cf818aaf1830b7c87f57f",
  measurementId: "G-TBRQXLME5Q"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile (file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url= getDownloadURL(storageRef)
    return url; //guarda la url de la imagen
}
export async function uploadworkout (file){
  const storageRef2 = ref(storage, 'rutinas/videos')
  await uploadBytes(storageRef2, file)
  const url= getDownloadURL(storageRef2)
  return url; //guarda la url de la imagen
}
