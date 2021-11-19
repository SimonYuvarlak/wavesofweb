import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@material-ui/core";
import "./styles.css";
import image from "../../assets/pink-beast.png";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        fontSize: "3rem",
        fontFamily: "Copperplate",
    },
})(Typography);

const WhiteTextTypographySlogan = withStyles({
    root: {
        color: "#FFFFFF",
        fontSize: "1.5rem",
        fontFamily: "Copperplate",
    },
})(Typography);

const BlackGrid = withStyles({
    root: {
        backgroundColor: "#2a232d",
        backgorundColor: "rgba(0, 0, 0, 0.8)",
        padding: "20px 40px 10px 0px",
        border: "3px solid #FEC0CA",
        borderRadius: "30px 30px 30px 30px",
        boxShadow: "0 0 10px #FEC0CA",
    },
})(Grid);

const ContainerGrid = withStyles({
    root: {
        padding: "0% 5% 5% 5%",
    },
})(Grid);

const useStyles = makeStyles((theme) => ({
    pinkBeast: {
        "&:hover": {
            border: "3px solid #FEC0CA",
            borderRadius: "40px 40px 40px 40px",
            boxShadow: "0 0 10px #FEC0CA",
        },
    },
}));

const Intro = () => {
    const classes = useStyles();
    const terminal = [" ", "_"];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container justifyContent="center" direction="column" id="intro">
            <ContainerGrid item>
                <BlackGrid container direction="row">
                    <Grid item xs={6} md={5} lg={5}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                        >
                            <WhiteTextTypography
                                item
                                variant="h1"
                                component="div"
                                gutterBottom
                            >
                                {">"}
                            </WhiteTextTypography>
                            <WhiteTextTypography
                                item
                                variant="h1"
                                component="div"
                                gutterBottom
                                sx={{ color: "#ffffff" }}
                            >
                                <Typewriter
                                    words={terminal}
                                    delaySpeed={500}
                                    deleteSpeed={50}
                                    loop={false}
                                />
                            </WhiteTextTypography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={7} lg={7}>
                        <Grid container alignItems="left">
                            <WhiteTextTypography
                                item
                                variant="h1"
                                component="div"
                                gutterBottom
                                sx={{ color: "#ffffff" }}
                            >
                                {isMobile ? "Wow" : "Waves of Web"}
                            </WhiteTextTypography>
                        </Grid>
                    </Grid>
                </BlackGrid>
            </ContainerGrid>
            <Grid item>
                <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                >
                    <WhiteTextTypographySlogan
                        item
                        variant="overline"
                        component="div"
                        gutterBottom
                    >
                        <Button>
                            <a href="#about-us">
                                <img
                                    src={image}
                                    className={classes.pinkBeast}
                                    style={{ height: "200px" }}
                                    alt="waves of web"
                                />
                            </a>
                        </Button>
                    </WhiteTextTypographySlogan>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                >
                    <WhiteTextTypographySlogan
                        item
                        variant="overline"
                        component="div"
                        gutterBottom
                    ></WhiteTextTypographySlogan>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Intro;
