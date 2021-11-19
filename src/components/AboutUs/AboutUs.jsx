import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./style.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CustomHeader from "../CustomHeader/CustomHeader";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import EvStationIcon from "@mui/icons-material/EvStation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PaddingElement from "../PaddingElement/PaddingElement";
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import AirIcon from '@mui/icons-material/Air';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CustomTypography from "../CustomTypography/CustomTypography";
// import { withStyles } from "@material-ui/core/styles";

const AboutUs = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const text = `We are a software company developing its on products as well as freelance products using modern technologies.
    With the servies we are developing, we aim to minimize the pain of working with a freelancer. We specialized in technologies
    which we believe will give you the result that you wanted. We have three different services.`;

    return (
        <Grid container direction="column" id="about-us">
            <PaddingElement space={10} />
            <CustomHeader heading={"About Us"} variant={"h2"} />
            <Grid item>
                <Grid container direction="row" p={10}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CustomTypography
                                variant={"h6"}
                                component={"div"}
                                content={text}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container justifyContent="center" alignItems="center">
                            <List sx={{ width: '100%', maxWidth: 360 }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CheckIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={<CustomHeader variant={"h6"} heading={"Modern"} />} sx={{ fontStyle: "bold !important" }} secondary={<CustomTypography variant="p" content={"New and up to date frameworks"} style={{ color: 'gray', fontStyle: "italic" }} />} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AirIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={<CustomHeader variant={"h6"} heading={"Fast"} />} sx={{ fontStyle: "bold !important" }} secondary={<CustomTypography variant="p" content={"Native performance"} style={{ color: 'gray', fontStyle: "italic" }} />} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <LockOpenIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={<CustomHeader variant={"h6"} heading={"Secure"} />} sx={{ fontStyle: "bold !important" }} secondary={<CustomTypography variant="p" content={"Backed and used by tech giants"} style={{ color: 'gray', fontStyle: "italic" }} />} />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direciton="row" justifyContent="center">
                    <Grid item xs={11} md={5}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            padding={5}
                            container
                            sx={{
                                backgroundColor: "#2a232d",
                                backgorundColor: "rgba(0, 0, 0, 0.8)",
                                padding: "20px 40px 10px 0px",
                                border: "3px solid #FEC0CA",
                                borderRadius: isMobile
                                    ? "40px 40px 0px 0px"
                                    : "40px 0px 0px 40px",
                                boxShadow: "0 0 10px #FEC0CA",
                            }}
                        >
                            <CustomHeader
                                heading={"Services"}
                                variant="h3"
                                item
                            />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <PhoneIphoneIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"IOS and Android App Development"} />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <WebIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"Web Development"} />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CodeIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"Api Development"} />}
                                    />
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
                            sx={{
                                height: "100%",
                                transform: isMobile && "rotate(90deg)",
                            }}
                        >
                            <ElectricalServicesIcon
                                item
                                sx={{ color: "pink" }}
                                style={{ fontSize: isMobile ? "4rem" : "7rem" }}
                            />
                        </Grid>
                    </Grid>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Grid item xs={11} md={5}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            padding={5}
                            container
                            sx={{
                                backgroundColor: "#2a232d",
                                backgorundColor: "rgba(0, 0, 0, 0.8)",
                                padding: "20px 40px 10px 0px",
                                border: "3px solid #FEC0CA",
                                borderRadius: isMobile
                                    ? "0px 0px 40px 40px"
                                    : "0px 40px 40px 0px",
                                boxShadow: "0 0 10px #FEC0CA",
                            }}
                        >
                            <CustomHeader
                                heading={"Technologies"}
                                variant="h3"
                            />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"React Native"} />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"ReactJS and AngularJS"} />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<CustomTypography variant={"h6"} content={"NodeJS and C#"} />}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default AboutUs;
