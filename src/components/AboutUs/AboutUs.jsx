import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./style.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CustomHeader from "../CustomHeader/CustomHeader";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import EvStationIcon from '@mui/icons-material/EvStation';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const AboutUs = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const text = `
        We are a software company developing its on products as well as freelance products using modern technologies.
    `;



    return (
        <Grid
            container
            direction="column"
        >
            <Typography variant="h6" gutterBottom component="div" item paddingTop={2} paddingBottom={5} sx={{ textShadow: "1px 1px #7B1EA2" }}>
                {text}
            </Typography>
            <Grid item>
                <Grid
                    container
                    direciton="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={4} lg={4}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            container
                            sx={!isMobile ? { border: "5px ridge #7B1EA2", borderRadius: "40px 0px 0px 40px" } : { border: "5px ridge #7B1EA2", borderRadius: "40px 40px 0px 0px" }}
                        >
                            <CustomHeader heading={"Services"} variant="h3" item />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <PhoneIphoneIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="IOS and Android App Development" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <WebIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Web Development" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CodeIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Api Development" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Grid item xs={12} md={1} lg={1}>
                        <Grid
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                            container
                            sx={{ height: "100%", transform: isMobile && "rotate(90deg)" }}
                        >
                            <ElectricalServicesIcon item color="secondary" style={{ fontSize: isMobile ? "4rem" : "7rem" }} />
                        </Grid>
                    </Grid>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            container
                            sx={!isMobile ? { border: "5px ridge #7B1EA2", borderRadius: "0px 40px 40px 0px" } : { border: "5px ridge #7B1EA2", borderRadius: "0px 0px 40px 40px" }}
                        >
                            <CustomHeader heading={"Technologies"} variant="h3" />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="React Native" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="React and NodeJS" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon color="secondary" />
                                    </ListItemAvatar>
                                    <ListItemText primary="NodeJS and C#" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
