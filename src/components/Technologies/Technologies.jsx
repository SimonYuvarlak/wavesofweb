import React from "react";
import TechnologiesArray from "./TechnologiesArray";
import Technology from "./Technology";
import { Grid } from "@mui/material";
import CustomHeader from "../CustomHeader/CustomHeader";

const Technologies = () => {
    return (
        <Grid>
            <CustomHeader heading={"Technologies"} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnSpacing={3}
                rowSpacing={3}
                padding={3}
            >
                {TechnologiesArray.map((item) => {
                    return (
                        <Grid key={item.name} item xs={6} md={4} lg={3}>
                            <Technology
                                src={item.source}
                                alt={item.alt}
                                name={item.name}
                                explanation={item.explanation}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default Technologies;
