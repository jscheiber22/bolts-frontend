import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/api/projects")
        .then(response => {
            setProjects(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("error getting data: ", error);
        })
    }, []);



    return (
        <div style={{margin: "3% 7.5% 0% 7.5%"}}>
            <Typography variant="h2" style={{marginBottom: "3%"}} fontFamily={"inherit"}><strong>Projects :)</strong></Typography>
            <Grid container spacing={2}>
                { projects ?
                    projects.map(project => 
                        <Grid item xs={6} key={project[0]}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={project[5]}
                                    title={project[1] + " " + project[2]}
                                />
                                <CardContent>
                                    <Typography variant="h3">{project[3] + " " + project[1] + " " + project[2]}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                  :
                  <p> Loading... </p>
                }
            </Grid>
        </div>
    )
}

export default Projects;
