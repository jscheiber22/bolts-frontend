import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageUpload from "../components/ImageUpload";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [addDataToggle, setAddDataToggle] = useState(false);
    const [newProjectData, setNewProjectData] = useState({
        "Year": "",
        "Make": "",
        "Model": "",
        "Description": ""
    });
    const [newProjectImage, setNewProjectImage] = useState(null);

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

    // useEffect(() => {
    //     console.log(newProjectImage);
    // }, []);

    const handleSubmit = () => {
        const form = new FormData();

        if (newProjectImage){
            form.append('file', newProjectImage);
        }
        if (newProjectData){
            form.append('car_details', JSON.stringify(newProjectData));
        }

        console.log(form);

        axios.post("http://localhost:5000/api/new_project", form);
    }


    return (
        <div style={{margin: "3% 7.5% 0% 7.5%"}}>
        { newProjectImage &&
            <img src={URL.createObjectURL(newProjectImage)} width="240"></img>
        }
            <div>
                <Button color="primary" onClick={() => setAddDataToggle(!addDataToggle)} variant={addDataToggle ? "outlined" : "contained"}>{addDataToggle ? "Back": "New Project"}</Button> 
                <Typography variant="h2" style={{marginBottom: "3%"}} fontFamily={"inherit"}><strong>Projects :)</strong></Typography>
            </div>
            { addDataToggle && 
                <>
                    <div>
                        <TextField name="Year" label="Year" variant="filled" style={{marginRight: "5%"}} onChange={e => setNewProjectData({...newProjectData, [e.target.name]: e.target.value})} />
                        <TextField name="Make" label="Make" variant="filled" style={{marginRight: "5%"}} onChange={e => setNewProjectData({...newProjectData, [e.target.name]: e.target.value})}/>
                        <TextField name="Model" label="Model" variant="filled" style={{marginRight: "5%"}}  onChange={e => setNewProjectData({...newProjectData, [e.target.name]: e.target.value})}/>
                    </div>
                    <div style={{width: "75%"}}>
                        <TextField name="Description" label="Description" variant="filled" style={{marginTop: "3%"}} onChange={e => setNewProjectData({...newProjectData, [e.target.name]: e.target.value})} fullWidth multiline />
                    </div>
                    <ImageUpload image={setNewProjectImage}/>
                    <div>
                        <Button style={{marginLeft: "69%"}} onClick={handleSubmit} variant="contained" disabled={!(newProjectData && newProjectImage)}>Submit</Button>
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
