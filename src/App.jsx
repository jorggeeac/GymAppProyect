import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { uploadFile } from './firebase/config'


function App() {

  const [file, setFile] = useState (null);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const result = await uploadFile(file);
      console.log(result)
    }catch(error){
      console.error(error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadFile(e.target.files[0])}
      />
      <button> Subir </button>
    </form>
    
  )
}

export default App
