import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title="" }) => {



  return (
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: '100vh', backgroundColor: 'primary.main'}}
    >

        <Grid 
            item
            className="gridPrueba"
            sx={{backgroundColor:'#d7ecfc'}}
        >
            <Typography variant="h3" fontSize={ 38 } fontWeight={ 600 } mb={ 4 } mt={ 5 }>{ title }</Typography>

            { children }

        </Grid>

    </Grid>
  )
}
