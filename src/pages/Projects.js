import { Button, Card, CardActions, CardContent, CardMedia, ImageList, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageUpload from "../components/ImageUpload";
import DeleteIcon from '@mui/icons-material/Delete';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [addDataToggle, setAddDataToggle] = useState(false);
    const [newProjectData, setNewProjectData] = useState({
        "Year": null,
        "Make": null,
        "Model": null,
        "Description": null,
    });
    const [newProjectImage, setNewProjectImage] = useState(null);
    const [updateGrid, setUpdateGrid] = useState(false);

    useEffect(() => {
        axios("http://localhost:5000/api/projects")
        .then(response => {
            setProjects(response.data);
        })
        .catch(error => {
            console.error("error getting data: ", error);
        })
    }, [addDataToggle, updateGrid]); // updates anytime the add window is toggled



    // TODO: handle response for errors in db entry/data
    async function handleSubmit() {
        const form = new FormData();

        if (newProjectImage){
            form.append('file', newProjectImage);
        }
        if (newProjectData){
            form.append('car_details', JSON.stringify(newProjectData));
        }

        await axios.post("http://localhost:5000/api/projects", form);
        setUpdateGrid(!updateGrid);
        // reset addDataToggle so it resets to project screen
        // TODO: maybe redirect to project page eventually
        setAddDataToggle(!addDataToggle);
    }

    async function handleDelete(column_id) {
        await axios.post("http://localhost:5000/api/del_project/" + column_id);
        setUpdateGrid(!updateGrid);
    }


    return (
        <div style={{margin: "3% 7.5% 0% 7.5%"}}>
            <div>
                <Button color="primary" onClick={() => setAddDataToggle(!addDataToggle)} variant={addDataToggle ? "outlined" : "contained"}>{addDataToggle ? "Back": "New Project"}</Button> 
                <Typography variant="h2" style={{marginBottom: "3%"}} fontFamily={"inherit"}><strong>Recent Projects</strong></Typography>
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
                        <Button style={{marginLeft: "69%"}} onClick={handleSubmit} variant="contained" disabled={!(newProjectData)}>Submit</Button>
                    </div>
                </>
            }
            <ImageList
                sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(25%,33%)) !important",
                    gridAutoColumns: "minmax(25%, 33%)"
                }}
                >
                { projects && !addDataToggle &&
                    projects.map(project => 
                        <Card key={project[0]}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={"data:image/jpg;base64," + project[5]}
                                title={project[1] + " " + project[2]}
                                component='img'
                            />
                            <CardContent>
                                <Typography variant="h3">{project[3] + " " + project[1] + " " + project[2]}</Typography>
                                { (project[4] !== 'None') ?
                                    <Typography variant="h4">{project[4]}</Typography>
                                    :
                                    <br />
                                }
                            </CardContent>
                            <CardActions style={{justifyContent: 'right'}}>
                                <Button onClick={() => {handleDelete(project[0]);}}><DeleteIcon /></Button>
                            </CardActions>
                        </Card>
                    )
                }
            </ImageList>
        </div>
    )
}

export default Projects;
