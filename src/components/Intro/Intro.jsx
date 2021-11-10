import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles"
//Yukarinin mobile uyarlanmasi lazim


const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        fontSize: "3rem",
        fontFamily: "Copperplate"
    }
})(Typography);

const WhiteTextTypographySlogan = withStyles({
    root: {
        color: "#FFFFFF",
        fontSize: "1.5rem",
        fontFamily: "Copperplate"
    }
})(Typography);

const BlackGrid = withStyles({
    root: {
        backgroundColor: "#2a232d",
        backgorundColor: "rgba(0, 0, 0, 0.8)",
        padding: "20px 40px 10px 0px",
        border: "3px solid #FEC0CA",
        borderRadius: "40px 40px 40px 40px",
        boxShadow: "0 0 10px #FEC0CA",
        boxShadow: "0 0 10px #FEC0CA",
    }
})(Grid);

const ArrowDown = withStyles({
    root: {
        fontSize: "4rem",
        color: "pink",
        marginTop: "70px",
        borderRadius: "50%",
        "&:hover": {
            boxShadow: "0 0 10px #FEC0CA",
        }
    }
})(ArrowDownwardIcon);

const ContainerGrid = withStyles({
    root: {
        // padding: "0px 250px 0px 250px",
        padding: "0% 25% 5% 25%"
    }
})(Grid);

const Intro = () => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    //Mobile a uyarlanmasi lazim

    const terminal = [" ", "_"];
    const text = "Welcome to Code Brewery. Our services. Web Desing. Web Development. App Development. Api Development.";

    const arr = text.split(".");

    const getLetter = (letter) => {
        return (
            <Typography item variant="h1" component="div" gutterBottom>
                letter
            </Typography>
        );
    }

    return (
        <Grid container justifyContent="center" direction="column">
            <ContainerGrid item>
                <BlackGrid container direction="row">
                    <Grid item xs={12} md={5} lg={5}>
                        <Grid container justifyContent="center" direction="row">
                            <WhiteTextTypography item variant="h1" component="div" gutterBottom>
                                {">"}
                            </WhiteTextTypography>
                            <WhiteTextTypography item variant="h1" component="div" gutterBottom sx={{ color: "#ffffff" }} >
                                <Typewriter
                                    words={terminal}
                                    delaySpeed={500}
                                    deleteSpeed={50}
                                    loop={false}
                                />
                            </WhiteTextTypography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7}>
                        <Grid container alignItems="letf">
                            <WhiteTextTypography item variant="h1" component="div" gutterBottom>
                                Waves of Web
                            </WhiteTextTypography>
                        </Grid>
                    </Grid>
                </BlackGrid>
            </ContainerGrid>
            <Grid item>
                <Grid container justifyContent="center" direction="row" alignItems="center">
                    <WhiteTextTypographySlogan item variant="overline" component="div" gutterBottom>
                        ARE YOU CODING ALONE TONIGHT ?
                    </WhiteTextTypographySlogan>
                </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
                <Grid container justifyContent="center" direction="row" alignItems="center">
                    <WhiteTextTypographySlogan item variant="overline" component="div" gutterBottom>
                        <Button><ArrowDown /></Button>
                    </WhiteTextTypographySlogan>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Intro;