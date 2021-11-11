import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./styles.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Footer = () => {
    const year = new Date().getFullYear();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            {isMobile ? (
                <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: "#3D0240" }}
                    p={2}
                >
                    <Grid
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid direction="column" justifyContent="center">
                            <Grid
                                direction="row"
                                justifyContent="space-around"
                                container
                            >
                                <Grid item>
                                    <Grid direction="row" container>
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <InstagramIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <MailOutlineIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <GitHubIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LinkedInIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                alignSelf="center"
                            >
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                    color="whitesmoke"
                                    mt={4}
                                >
                                    WoW&reg; {year}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: "#3D0240" }}
                    p={2}
                >
                    <Grid
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid direction="column" justifyContent="center">
                            <Grid
                                direction="row"
                                justifyContent="space-around"
                                container
                            >
                                <Grid item>
                                    <Grid direction="row" container>
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <InstagramIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <MailOutlineIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <GitHubIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LinkedInIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    alignSelf="center"
                                >
                                    <Typography
                                        variant="caption"
                                        display="block"
                                        gutterBottom
                                        color="whitesmoke"
                                        mt={4}
                                    >
                                        WoW&reg; {year}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        direction="row"
                                        container
                                        alignSelf="center"
                                    >
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <ArrowRightIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="About Us"
                                                            sx={{
                                                                color: "white",
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <ArrowRightIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="Previous Works"
                                                            sx={{
                                                                color: "white",
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <ArrowRightIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="Services"
                                                            sx={{
                                                                color: "white",
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <nav aria-label="footer" item>
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <ArrowRightIcon
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="Road Map"
                                                            sx={{
                                                                color: "white",
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default Footer;
