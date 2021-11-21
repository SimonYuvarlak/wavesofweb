import React from "react";
import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SocialLinks from "../SoicalLinks/SocialLinks";
import CustomTypography from "../CustomTypography/CustomTypography";

const Footer = () => {
    const year = new Date().getFullYear();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div id="footer">
            {isMobile ? (
                <Grid sx={{ backgroundColor: "#3D0240" }}>
                    <SocialLinks />
                    <Grid
                        item
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignSelf="center"
                    >
                        <CustomTypography
                            variant={"caption"}
                            display="block"
                            gutterBottom
                            mt={4}
                            content={"Wow®" + year}
                        />
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
                                    <SocialLinks />
                                </Grid>
                                <Grid
                                    item
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    alignSelf="center"
                                >
                                    <CustomTypography
                                        variant={"p"}
                                        display="block"
                                        gutterBottom
                                        mt={4}
                                        content={"Wow®" + year}
                                    />
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
                                                        <a
                                                            href="#about-us"
                                                            style={{
                                                                textDecoration:
                                                                    "none",
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={<CustomTypography variant="subtitle1" content="About Us" />}
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </a>
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
                                                        <a
                                                            href="#prev-work"
                                                            style={{
                                                                textDecoration:
                                                                    "none",
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={<CustomTypography variant="subtitle1" content="Previous Works" />}
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </a>
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
                                                        <a
                                                            href="#road-map"
                                                            style={{
                                                                textDecoration:
                                                                    "none",
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={<CustomTypography variant="subtitle1" content="Road Map" />}
                                                                sx={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        </a>
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
            )
            }
        </div >
    );
};

export default Footer;
