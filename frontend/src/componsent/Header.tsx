import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom';
import '../css/Header.css'

export default function Header() {

    return (
        <Box sx={{flexGrow: 1}} color={"white"}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: 'white', color: '#1976d2'}}>
                    <Typography variant="h5" component="div" sx={{flexGrow: 4}}>
                        iBlog
                    </Typography>
                    <NavLink className={({ isActive }) => isActive ? "active navlink": "navlink"} to={"/"}>Accueil</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active navlink": "navlink"}  to={"/admin"}>Admin</NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
