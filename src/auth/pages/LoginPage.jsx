import { useMemo } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useForm } from "../../hooks/UseForm";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/authLayout";

export const LoginPage = () => {
  
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { status, errorMessage } = useSelector( state => state.auth );

  const{email, password, onInputChange} =useForm({
    email: '',
    password: ''
  });
  
  const isAuthenticating =useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) =>{
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({email, password}) );
    navigate('/inicio');
  }
  
  const onGoogleSignIn = ()=>{

    dispatch( startGoogleSignIn() );
    navigate('/inicio');
  }
  
    return (
    <AuthLayout title="Login">    
       
        <form onSubmit={onSubmit} >
            <Grid 
                container
                alignItems="center"
                justifyContent="center"
                sx={{}}
            >
                
                <Grid item className="itemGridLogin" xs={ 12 }>
                    <TextField
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@gmail.com"
                        autoComplete="username"
                        fullWidth
                        name="email"
                        value={ email }
                        onChange={onInputChange}
                    />
                </Grid>

                <Grid item className="itemGridLogin" xs={ 12 }>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        fullWidth
                        name="password"
                        value={ password }
                        onChange={onInputChange}
                    />
                </Grid>

                <Grid container  justifyContent="center" ml={ 2.2 } mr={ 2.2 } mt={ 1.6 } sx={{ mb:1.6, gap:"19px"}}>

                    <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none'}>
                       
                       <Alert severity="error">{ errorMessage }</Alert>
                    </Grid>


                    <Grid item xs={ 12 } sm={ 5.5 } >
                        <Button disabled={ isAuthenticating }  type="submit" variant="contained" disableElevation sx={{ padding:1.2, border:"1px solid #0088D1" }} fullWidth>Iniciar sesión</Button>
                        
                    </Grid>

                    <Grid item xs={ 12 } sm={ 5.5 }>
                        <Button 
                        disabled={ isAuthenticating } 
                        onClick={onGoogleSignIn} 
                        variant="outlined" sx={{padding:1.2}} fullWidth>
                            <Google />
                            <Typography variant="div" sx={{ ml:0.8, lineHeight:1}}>Google</Typography>
                        </Button>
                    </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='end' mb={0.9}>
                        <Link component={ RouterLink } className="crearCuenta" to="/register">
                            <Typography variant="p" className="crearCuentaP" >No tienes cuenta? Regístrate</Typography>
                        </Link>
                </Grid>
                
            </Grid>

        </form>
            

    </AuthLayout>
    


  )
}
