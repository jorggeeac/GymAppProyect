import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startRegisterUserWithEmailPassword} from "../../store/auth/thunks";
import { useForm } from "../../hooks/UseForm";
import { Alert, Button, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/authLayout";
import { AntSwitch } from "./ant";



const formData = {
    displayName: '',
    email: '',
    password: '',
    isAdminMode: false

}
const formValidation = {
    displayName: [( value ) => value.length >=3 , 'El nombre debe tener por lo menos  3 caracteres' ],
    email: [( value ) => value.includes('@') , 'El correo tiene que llevar @'],
    password: [( value ) => value.length >=8 && /[^\w\s]/.test(value) , 'La contraseña tiene que tener algún caracter especial y ser mayor o igual de 8 caracteres '],
}

export const RegisterPage = () => {
    
    const dispatch = useDispatch();

    const [formSubmitted, setformSubmitted] = useState(false);

    const { displayName, email, password, onInputChange,onToogleChange, formState, displayNameValid, passwordValid, emailValid, isFormValid } =useForm( formData, formValidation);

    const { status, errorMessage } = useSelector( state => state.auth);
    
    const isCheckingAuthetication = useMemo(() =>status ==='checking', [status] );


    const onSubmit = (event) =>{
        event.preventDefault();

        setformSubmitted(true);

        if (!isFormValid) return;

        dispatch(startRegisterUserWithEmailPassword( formState ));
    } 



  return (
    <AuthLayout title="Register">

        <form onSubmit={ onSubmit }>
            <Grid 
                container
                alignItems="center"
                justifyContent="center"
                sx={{}}
            >
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography color={"black"}>Usuario</Typography>
                    <AntSwitch name="isAdminMode"
                         onChange={ onToogleChange } inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography color={"black"}>Entrenador</Typography>
                </Stack>

                <Grid item className="itemGridLogin" xs={ 12 }>
                    <TextField
                        label=" Nombre completo"
                        type="text"
                        placeholder="Nombre completo"
                        fullWidth
                        name="displayName"
                        value={ displayName }
                        onChange={ onInputChange }
                        error={ !!displayNameValid && formSubmitted}
                        helperText={ formSubmitted ? displayNameValid : "" }
                    />
                </Grid>
                <Grid item className="itemGridLogin" xs={ 12 }>
                    <TextField
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@gmail.com"
                        autoComplete="username"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        error={ !!emailValid && formSubmitted }
                        helperText={ formSubmitted ? emailValid : "" }
                    />
                </Grid>

                <Grid item className="itemGridLogin" xs={ 12 }>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        error={ !!passwordValid && formSubmitted }
                        helperText={ formSubmitted ? passwordValid : "" }
                    />
                </Grid>


                <Grid container  justifyContent="center" ml={ 2.2 } mr={ 2.2 } mt={ 1.6 } sx={{ mb:1.6, gap:"19px"}}>

                    <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none'}>
                       
                         <Alert severity="error">{ errorMessage }</Alert>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Button disabled={ isCheckingAuthetication } type="submit" variant="contained" disableElevation sx={{ padding:1.2, border:"1px solid #0088D1" }} fullWidth>Registrarse</Button>
                        
                    </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='end' mb={0.9}>
                        <Link component={ RouterLink } className="crearCuenta" to="/login">
                            <Typography variant="p" className="crearCuentaP">Ya tienes cuenta? Inicia sesión</Typography>
                        </Link>
                </Grid>
                
            </Grid>

        </form>
            

    </AuthLayout>



  )
}

