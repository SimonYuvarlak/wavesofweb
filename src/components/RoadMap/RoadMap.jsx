import React from "react";
import Section from "./Section";
import { Grid } from "@mui/material";
import RoadMapArray from "./RoadMapArray";
import PaddingElement from "../PaddingElement/PaddingElement";
import CustomHeader from "../CustomHeader/CustomHeader";

const RoadMap = () => {
    var index = 0;
    var index2 = 0;
    var index3 = 0;
    const colors = ["pink", "pink", "pink", "pink"];

    return (
        <>
            <PaddingElement space={10} />
            <CustomHeader heading={"Road Map"} variant={"h2"} />
            <PaddingElement space={10} />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                id="road-map"
            >
                {RoadMapArray.map((item) => {
                    return (
                        <Grid item xs={12} md={6} lg={3}>
                            <Section
                                heading={item.heading}
                                date={item.date}
                                itemArray={item.content}
                                color={colors[index++]}
                                headingColor={colors[index2++]}
                                dateColor={colors[index3++]}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default RoadMap;
