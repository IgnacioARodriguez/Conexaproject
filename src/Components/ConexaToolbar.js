import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ConexaLogo from '../Components/ConexaLogo.png'
import ClearIcon from '@mui/icons-material/Clear';
import { Switch, Route, useHistory } from "react-router-dom";


export default function ConexaToolbar() {
    const history = useHistory()

    return (
        <Box className='navbarBox' sx={{ flexGrow: 1 }}>
            <AppBar className='AppBar' position="static">
                <Toolbar className='toolbar'>
                    <div className='container'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img className='ConexaLogo' alt='ConexaLogo' src={ConexaLogo} />
                            <div className='verticalLine'>.</div>
                            <Typography className='frase'>Drive your projects to their maximum potential</Typography>
                        </IconButton>
                        <Button onClick={() => {
                            window.localStorage.removeItem('token')
                            history.push('/login')
                        }} className='login' color="inherit">Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}