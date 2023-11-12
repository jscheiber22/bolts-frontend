import { Button, Typography } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <center>
            <Button href="projects" color="primary" style={{"marginTop": "5%"}}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Get Started
                </Typography>
            </Button>
        </center>
    );
}

export default Home;