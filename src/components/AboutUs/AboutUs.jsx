import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import image from "./assets/about-us.jpg";
import "./style.css";

const AboutUs = (props) => {
    return (
        <Grid container marginTop={3}>
            <Grid
                container
                margin={3}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "black", borderRadius: 1 }}
            >
                <Grid item xs={12} md={6} lg={6}>
                    <Typography
                        item
                        variant="body1"
                        gutterBottom
                        xs
                        textAlign={"left"}
                        padding={3}
                        sx={{ color: "white" }}
                    >
                        {props.context}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={image} alt="img" className="image" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
