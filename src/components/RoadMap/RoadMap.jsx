import React from "react";
import Section from "./Section";
import { Grid } from "@mui/material";
import RoadMapArray from "./RoadMapArray";

const RoadMap =  () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {RoadMapArray.map((item) => {
                return (
                    <Grid item xs={12} md={6} lg={3}>
                        <Section heading={item.heading} date={item.date} itemArray={item.content}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default RoadMap;