import React from "react";
import Technologies from "./Technologies";
import { Avatar } from "@mui/material";


const Technology = (props) => {
    return (
        <Avatar 
            src={props.source}
            alt={props.alt}
        />
    );
}

export default Technology;