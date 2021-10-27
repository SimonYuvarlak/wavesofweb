import React from "react";
import TechnologiesArray from "./TechnologiesArray";
import Technology from "./Technology";
import { Box } from "@mui/system";


const Technologies = (props) => {
    return (
        <Box
            sx={{display: "flex", flexDirection="row"}}
        >
            {TechnologiesArray.map((item) => {
            return (
                <Technology 
                    src={item.source}
                    alt={item.alt}
                />
            );
        })}
        </Box>
    );
}

export default Technologies;