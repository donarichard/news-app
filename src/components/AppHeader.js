import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


function appBarLabel(label, navigation) {
    const onCustomButtonClick = () => {
        //window.history.push('/checkout') // <-- no
        navigation('/login')
      }
    return (
        <Toolbar>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
            <IconButton onClick={onCustomButtonClick} edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <AccountCircle />
            </IconButton>
        </Toolbar>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function HeaderComponent() {
    const navigation = useNavigate()
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary" enableColorOnDark>
                    {appBarLabel('News',navigation)}
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}