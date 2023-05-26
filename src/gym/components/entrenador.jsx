import { useState } from 'react'
import { uploadFile } from '../../firebase/config'
import {uploadworkout} from '../../firebase/config'
import {Button, Form } from 'react-bootstrap'



function Entrenador() {

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

  const alertOnClick = () => {
    alert('Se ha subido correctamente');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control size="lg" type="text" placeholder="Ejercicios" />
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadFile(e.target.files[0])}
      />
      <Button  variant="outline-success" onClick={alertOnClick}> Subir </Button>

      <Form.Control size="lg" type="text" placeholder="Rutinas" />
      <input 
        type='file' 
        name='' 
        id='' 
        onChange={e => uploadworkout(e.target.files[0])}
      />
      <Button variant="outline-success" onClick={alertOnClick}> Subir </Button>
    </Form>
  )
}

export default Entrenador;