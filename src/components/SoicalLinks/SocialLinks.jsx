import React from "react";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = () => {
    const year = new Date().getFullYear();
    return (
        <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
        >
            <Grid direction="column" justifyContent="center">
                <Grid direction="row" justifyContent="space-around" container>
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
            </Grid>
        </Grid>
    );
};

export default SocialLinks;
