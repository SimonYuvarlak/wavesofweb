import React from "react";
import Section from "./Section";
import { Grid } from "@mui/material";
import RoadMapArray from "./RoadMapArray";

const RoadMap = () => {
    var index = 0;
    var index2 = 0;
    var index3 = 0;
    const colors = ["pink", "pink", "pink", "pink"];

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
                        <Section heading={item.heading} date={item.date} itemArray={item.content} color={colors[index++]} headingColor={colors[index2++]} dateColor={colors[index3++]} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default RoadMap;