import { useState } from 'react'
import './App.css'
import { uploadFile } from './firebase/config'
import {uploadworkout} from './firebase/config'

function App() {

  const [file, setFile] = useState (null);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const result = await uploadFile(file);
      const result2 = await uploadworkout(file);
      console.log(result, result2)
    }catch(error){
      console.error(error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Ejercicios</div>
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadFile(e.target.files[0])}
      />
      <button> Subir </button>

      <div>Rutinas</div>
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadworkout(e.target.files[0])}
      />
      <button> Subir </button>
    </form>
  )
}

export default App
