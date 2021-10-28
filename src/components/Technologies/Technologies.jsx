import React from "react";
import TechnologiesArray from "./TechnologiesArray";
import Technology from "./Technology";
import { Grid } from "@mui/material";


const Technologies = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={3} rowSpacing={3} padding={3}
        >
            {TechnologiesArray.map((item) => {
            return (
                <Grid item xs={6} md={4} lg={3}>
                    <Technology 
                    src={item.source}
                    alt={item.alt}
                    name={item.name}
                    explanation={item.explanation}
                    />
                </ Grid>
            );
        })}
        </Grid>
    );
}

export default Technologies;