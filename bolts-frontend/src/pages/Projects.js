import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
    return (
        <div style={{margin: "5%"}}>
        <center><div> Projects :)</div></center>
            <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <Card>
                    <CardContent>
                        <Typography variant="h3">"xs=6 md=8"</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h3">"xs=6 md=4"</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card>xs=6 md=4</Card>
            </Grid>
            <Grid item xs={6} md={8}>
                <Card>xs=6 md=8</Card>
            </Grid>
            </Grid>
        </div>
    )
}

export default Projects;