import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Avatar, Box, Button, Divider, Grid, Input, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const Sections = () => {
    const projectId = new URLSearchParams(useLocation().search).get("id")

    const [projectData, setProjectData] = useState(null);
    const [locationData, setLocationData] = useState([]);
    const [addLocationToggle, setAddLocationToggle] = useState(false);

    useEffect(() => {
        axios("http://localhost:5000/api/projects/" + projectId)
        .then(response => {
            setProjectData(response.data);
        })
        .catch(error => {
            console.error("error getting project data: ", error);
        })
        axios("http://localhost:5000/api/locations/" + projectId)
        .then(response => {
            setLocationData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("error getting location data: ", error);
        })
    }, []);


    async function updateFavorite() {
        await axios.patch(
            "http://localhost:5000/api/projects/" + projectId,
            {"Favorite": (projectData && projectData[6] === 0 ? 1 : 0)}
        ).catch(error => {
            console.error("error sending data: ", error);
        })
    }


    if (projectData) {
        return (
            <>
                <div style={{padding: '3%'}}>
                    <Grid container spacing={2}>
                        {/* Left half of screen for project info */}
                        <Grid item xs={6}>
                            <Box
                                component="img"
                                sx={{
                                    width:350
                                }}
                                alt="The current project cover image"
                                src={"data:image/jpg;base64," + projectData[5]}
                            >
                            </Box>
                            <Typography variant="h2">{projectData[3] + " " + projectData[1] + " " + projectData[2]}<Button onClick={updateFavorite}>{projectData[6] ? <StarIcon /> : <StarOutlineIcon />}</Button></Typography>
                            <Typography variant="body1">{(projectData[4] === 'None') ? "A project" : projectData[4]}</Typography>
                        </Grid>

                        {/* Right half of screen for sub sections */}
                        <Grid item xs={6}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            { locationData.length > 0 &&
                                locationData?.map(location => 
                                    <ListItem key={location[0]}>
                                        <ListItemAvatar>
                                            <Avatar alt={location[2] + " image"} src={location[4]} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={location[2]}
                                            secondary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                >
                                                    {location[3]}
                                                </Typography>
                                            }
                                            />
                                    </ListItem>
                                )
                            }
                                <Divider variant="inset" component="li" />
                                
                                    { !addLocationToggle ?
                                        <ListItemButton onClick={() => setAddLocationToggle(true)}>
                                            <ListItemAvatar>
                                                <AddCircleOutlineIcon style={{marginLeft: "15%", marginTop: "5%"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={"Add new location..."}
                                                />
                                        </ListItemButton>
                                    :
                                        <>
                                            <ListItemButton onClick={() => setAddLocationToggle(false)}>
                                                <ListItemAvatar>
                                                    <CloseIcon style={{marginLeft: "15%", marginTop: "10%"}}/>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={"Cancel"}
                                                />
                                            </ListItemButton>
                                            <TextField id="newLocation" label="New Location" variant="outlined" style={{width: "100%"}} />
                                        </>
                                    }
                                
                            </List>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    } else {
        // TODO replace with loading icon or something and handle returned errors
        return(
            <Typography variant="body1">{"Loading..."}</Typography>
        )
    }
}


export default Sections;
