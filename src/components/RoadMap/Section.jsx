import FastForwardIcon from '@mui/icons-material/FastForward';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { textAlign } from '@mui/system';
import React from "react";

const Section = (props) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <FastForwardIcon /><FastForwardIcon /><FastForwardIcon /><FastForwardIcon /><FastForwardIcon />
            </Grid>
            <Grid item padding={4}>
                <Typography variant="h4" gutterBottom component="div" sx={{textAlign:"left"}}>
                    {props.heading}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Section;