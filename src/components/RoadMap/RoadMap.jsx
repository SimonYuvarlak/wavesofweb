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
        <Grid id="road-map">
            <PaddingElement space={10} />
            <CustomHeader heading={"Road Map"} variant={"h2"} />
            <PaddingElement space={5} />
            <Grid
                container
                direction="row"
                alignContent="center"
                alignItems="center"
            >
                <Grid item direction="column" xs={12} md={6}>
                    <Section
                        heading={RoadMapArray[0].heading}
                        date={RoadMapArray[0].date}
                        itemArray={RoadMapArray[0].content}
                        color={colors[index++]}
                        headingColor={colors[index2++]}
                        dateColor={colors[index3++]}
                    />
                    <Section
                        heading={RoadMapArray[1].heading}
                        date={RoadMapArray[1].date}
                        itemArray={RoadMapArray[1].content}
                        color={colors[index++]}
                        headingColor={colors[index2++]}
                        dateColor={colors[index3++]}
                    />
                </Grid>
                <Grid item direction="row" xs={12} md={6}>
                    <Section
                        heading={RoadMapArray[2].heading}
                        date={RoadMapArray[2].date}
                        itemArray={RoadMapArray[2].content}
                        color={colors[index++]}
                        headingColor={colors[index2++]}
                        dateColor={colors[index3++]}
                    />
                    <Section
                        heading={RoadMapArray[3].heading}
                        date={RoadMapArray[3].date}
                        itemArray={RoadMapArray[3].content}
                        color={colors[index++]}
                        headingColor={colors[index2++]}
                        dateColor={colors[index3++]}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RoadMap;
