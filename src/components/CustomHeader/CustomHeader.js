import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const CustomHeader = (props) => {
    return (
        <Grid xs item margin={5}>
            <Typography variant={props.variant} component="div">
                {props.heading}
            </Typography>
        </Grid>
    );
};

export default CustomHeader;
