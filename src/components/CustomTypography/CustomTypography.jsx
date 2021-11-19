import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledTypography = withStyles({
    root: {
        fontFamily: "Rajdhani, sans-serif",
        color: "whitesmoke",
        aign: "left",
    },
})(Typography);

const CustomTypography = (props) => {
    return (
        <StyledTypography variant={props.variant} component={props.component}>
            {props.content}
        </StyledTypography>
    );
};

export default CustomTypography;