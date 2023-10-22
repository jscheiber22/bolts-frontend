import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [addDataToggle, setAddDataToggle] = useState(false);
    const [newProjectData, setNewProjectData] = useState({
        "Year": "",
        "Make": "",
        "Model": "",
        "Description": ""
    })

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
            <div>
                <Button color="primary" onClick={() => setAddDataToggle(!addDataToggle)}>New Project</Button> 
                <Typography variant="h2" style={{marginBottom: "3%"}} fontFamily={"inherit"}><strong>Projects :)</strong></Typography>
            </div>
            { addDataToggle && 
                <>
                    <div>
                        <TextField name="year" label="Year" variant="filled" style={{marginRight: "5%"}} />
                        <TextField name="make" label="Make" variant="filled" style={{marginRight: "5%"}} />
                        <TextField name="model" label="Model" variant="filled" style={{marginRight: "5%"}} />
                    </div>
                    <div style={{width: "75%"}}>
                        <TextField name="description" label="Description" variant="filled" style={{marginTop: "3%"}} fullWidth multiline />
                    </div>
                </>
            }
            <Grid container spacing={2}>
                { projects && !addDataToggle &&
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
                }
            </Grid>
        </div>
    )
}

export default Projects;
