import { useState } from 'react'
import './App.css'
import { uploadFile } from './firebase/config'
import {uploadworkout} from './firebase/config'
import {Button, Form } from 'react-bootstrap'



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
    <Form onSubmit={handleSubmit}>
      <Form.Control size="lg" type="text" placeholder="Ejercicios" />
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadFile(e.target.files[0])}
      />
      <Button  variant="outline-success"> Subir </Button>

      <Form.Control size="lg" type="text" placeholder="Rutinas" />
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadworkout(e.target.files[0])}
      />
      <Button variant="outline-success"> Subir </Button>
    </Form>
  )
}

export default App
