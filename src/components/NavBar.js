import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandymanIcon from '@mui/icons-material/Handyman';
import React from "react";

const NavBar = () => {
    return (
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <HandymanIcon style={{marginRight: "1%"}}/>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                      Bolts - Dev
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="settings">Settings</Button>
                  </Toolbar>
                </AppBar>
              </Box>
    );
}

export default NavBar;