import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Divider } from "@mui/material";
import CustomTypography from "../CustomTypography/CustomTypography";
import PaddingElement from "../PaddingElement/PaddingElement";

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
                <Grid item>
                    <Grid container direction="row" justifyContent="center">
                        <CustomTypography
                            variant={"h4"}
                            component={"div"}
                            p={3}
                            align="center"
                            sx={{ color: props.headingColor }}
                            content={props.heading}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justifyContent="center">
                        <CustomTypography
                            variant={"subtitle2"}
                            display="block"
                            gutterBottom
                            align="center"
                            pl={3}
                            pr={3}
                            pb={3}
                            sx={{ color: props.dateColor }}
                            content={props.date}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <PaddingElement space={3} />
            <ul style={{ color: "whitesmoke" }}>
                {props.itemArray.map((item) => {
                    return (
                        <li>
                            <CustomTypography
                                variant={"body1"}
                                gutterBottom
                                p={1}
                                sx={{ color: "whitesmoke" }}
                                content={item}
                            />
                        </li>
                    );
                })}
            </ul>
        </Grid>
    );
};

export default Section;
