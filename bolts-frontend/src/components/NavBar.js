import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import HandymanIcon from '@mui/icons-material/Handyman';
import React from "react";

const NavBar = () => {
    return (
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <HandymanIcon style={{marginRight: "1%"}}/>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                      Bolts
                    </Typography>
                    <Button color="inherit" href="projects">Projects</Button>
                    <Button color="inherit" href="/">Login</Button>
                  </Toolbar>
                </AppBar>
              </Box>
    );
}

export default NavBar;