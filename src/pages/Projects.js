import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
    return (
        <div style={{margin: "3% 7.5% 0% 7.5%"}}>
            <Typography variant="h2" style={{marginBottom: "3%"}} fontFamily={"inherit"}><strong>Projects :)</strong></Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="img/car.jpg"
                            title="car 1"
                        />
                        <CardContent>
                            <Typography variant="h3">car 1</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="img/car.jpg"
                            title="car 2"
                        />
                        <CardContent>
                            <Typography variant="h3">car 2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="img/car.jpg"
                            title="Car 3"
                        />
                        <CardContent>
                            <Typography variant="h3">car 3</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="img/car.jpg"
                            title="car 4"
                        />
                        <CardContent>
                            <Typography variant="h3">car 4</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;