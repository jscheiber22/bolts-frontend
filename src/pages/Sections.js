import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Sections = () => {
    const projectId = new URLSearchParams(useLocation().search).get("id")

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        axios("http://localhost:5000/api/projects/" + projectId)
        .then(response => {
            setProjectData(response.data);
        })
        .catch(error => {
            console.error("error getting data: ", error);
        })
    }, [projectData]); // updates anytime the add window is toggled


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
                                alt="The current project"
                                src={"data:image/jpg;base64," + projectData[5]}
                            >
                            </Box>
                            <Typography variant="h2">{projectData[3] + " " + projectData[1] + " " + projectData[2]}<Button onClick={updateFavorite}>{projectData[6] ? <StarIcon /> : <StarOutlineIcon />}</Button></Typography>
                            <Typography variant="body1">{(projectData[4] === 'None') ? "A project" : projectData[4]}</Typography>
                        </Grid>

                        {/* Right half of screen for sub sections */}
                        <Grid item xs={6}>

                        </Grid>
                    </Grid>
                </div>
            </>
        )
    } else {
        // TODO replace with loading icon or something
        return(
            <Typography variant="body1">{"Loading..."}</Typography>
        )
    }
}


export default Sections;
