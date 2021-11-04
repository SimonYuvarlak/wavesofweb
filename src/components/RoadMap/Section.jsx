import FastForwardIcon from '@mui/icons-material/FastForward';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { borderTop, textAlign } from '@mui/system';
import React from "react";
import { Divider } from '@mui/material';

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
                p={3}
            >
                <Divider>
                    <FlightTakeoffIcon />
                </Divider>
            </Grid>
            <Grid container direction="column">
                <Typography variant="h4" gutterBottom component="div" p={3} align="left">
                    {props.heading}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom align="left" pl={3} pr={3} pb={3}>
                    {props.date}
                </Typography>
                {props.itemArray.map((item) => {
                    return (
                        <Typography variant="body1" gutterBottom pl={3} pr={3} pb={3} align="left">
                            {item}
                        </Typography>
                    );
                })}
            </Grid>
        </Grid>
    );
}

export default Section;