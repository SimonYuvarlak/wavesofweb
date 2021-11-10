import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";

const Heading = withStyles({
    root: {
        textShadow: "0 0 2px #FEC0CA",
        textShadow: "0 0 2px #FEC0CA"
    }
})(Typography);

const CustomHeader = (props) => {
    return (
        <Grid xs item margin={5}>
            <Heading variant={props.variant} component="div" color="whitesmoke">
                {props.heading}
            </Heading>
        </Grid>
    );
};

export default CustomHeader;
