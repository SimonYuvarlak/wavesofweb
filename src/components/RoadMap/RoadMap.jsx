import React from "react";
import Section from "./Section";
import { Grid } from "@mui/material";

const RoadMap =  () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} md={6} lg={3}>
                <Section heading={"first"}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Section heading={"second"}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Section heading={"third"}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Section heading={"fourth"}/>
            </Grid>
        </Grid>
    );
}

export default RoadMap;