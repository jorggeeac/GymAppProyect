import { Switch, styled } from "@mui/material";



export const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 18.6,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 14,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(1px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#0D47A1',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 14,
      height: 14,
      display:'flex',
      borderRadius: 12,
      transition: theme.transitions.create(['width'], {
        duration: 400,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
