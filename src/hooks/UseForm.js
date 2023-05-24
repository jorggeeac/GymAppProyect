import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidation = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );


    const [formValidationState, setFormValidationState] = useState({});
    
    useEffect(() => {
   
        createValidations();

    }, [formState])
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidationState )) {
            //miramos si el formValidation en la propiedad formValue no es null si no lo es devuelve false
            if( formValidationState[formValue] !== null) return false;
            
        }
        return true;
    }, [formValidationState])
 

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onToogleChange = (event) => {
        const { name, checked } = event.target;
        setFormState({
          ...formState,
          [name]: checked
        });
        console.log(checked);
      }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidations = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidation )) {
           // console.log(formField);
            const [ inputCheckValue, errorMessage ] = formValidation[formField];

            // Creamos propiedades computadas (displayNameValid) - comprobamos que se cumpla que el valor del formState (displayName, email y password) que está dentro de formField. Si se cumple será null sino saltará el mensaje de error
            formCheckedValues[`${ formField }Valid`] = inputCheckValue( formState[formField] ) ? null : errorMessage;
        }
        setFormValidationState(formCheckedValues);
        //console.log(formCheckedValues);

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onToogleChange,
        onResetForm,
        ...formValidationState,
        isFormValid,
    }
}