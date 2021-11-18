import React from "react";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = () => {
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
                                                <a href="https://www.instagram.com/simon.ardayuvarlak/">
                                                    <InstagramIcon
                                                        sx={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </ListItemIcon>
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <a href="mailto: wowfreelancing@gmail.com">
                                                    <MailOutlineIcon
                                                        sx={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <a href="https://www.linkedin.com/in/seman-arda-yuvarlak-563572b3/">
                                                    <LinkedInIcon
                                                        sx={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
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
