import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { withStyles } from "@material-ui/core/styles";

const ArrowDown = withStyles({
    root: {
        fontSize: "4rem",
        color: "pink",
        marginTop: "70px",
        borderRadius: "50%",
        transition: "width 0.7s, height 0.7s, background-color 0.7s, transform 0.7s",
        "&:hover": {
            boxShadow: "0 0 10px #FEC0CA",
            width: "80px",
            height: "80px",
            backgroundColor: "#2a232d",
        },
    },
})(ArrowDownwardIcon);

const ArrowLink = () => {
    return (
        <ArrowDown />
    );
}

export default ArrowLink;