import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Divider } from "@mui/material";

const Section = (props) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container justifyContent="center" direction="row" p={1.5}>
                <Divider sx={{ color: props.color }}>
                    .............................................................
                    <FlightTakeoffIcon sx={{ color: props.color }} />
                </Divider>
            </Grid>
            <Grid container direction="column">
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    p={3}
                    align="center"
                    sx={{ color: props.headingColor }}
                >
                    {props.heading}
                </Typography>
                <Typography
                    variant="subtitle2"
                    display="block"
                    gutterBottom
                    align="center"
                    pl={3}
                    pr={3}
                    pb={3}
                    sx={{ color: props.dateColor }}
                >
                    {props.date}
                </Typography>
                {props.itemArray.map((item) => {
                    return (
                        <Typography
                            variant="body1"
                            gutterBottom
                            pl={3}
                            pr={3}
                            pb={3}
                            align="center"
                            sx={{ color: "whitesmoke" }}
                        >
                            {item}
                        </Typography>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default Section;
