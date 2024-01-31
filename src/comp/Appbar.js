import * as React from 'react';
import './Appbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" x>
        <Toolbar className="header">
          <Typography className="titulo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CINEREVIEW
          </Typography>
          <Link className="botaoheader" to="/addfilme">Adicionar Filme</Link>
          <Link color="inherit" aria-label="home" to="/">
          <HomeIcon className="icon"/>
        
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
