import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@mui/material/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../../assets/wow-logo.png";
import { Grid } from "@mui/material";
import SocialLinks from "../SoicalLinks/SocialLinks";
import CustomTypography from "../CustomTypography/CustomTypography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100px",
        paddingTop: "20px",
        [theme.breakpoints.up("md")]: {
            backgroundColor: "#3D0240",
        },
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#3D0240",
        },
    },
    dFlex: {
        display: "flex",
    },
    menuButton: {
        alignSelf: "center",
        color: "white !important",
    },
    title: {
        [theme.breakpoints.down("md")]: {
            flexGrow: 1,
        },
    },
    navBtn: {
        width: "10rem",
        height: "70%",
        alignSelf: "center",
        marginRight: "2rem",
        [theme.breakpoints.up("md")]: {
            color: "white !important",
        },
        margin: "10px",
        "&:hover": {
            backgroundColor: "#2a232d !important",
            border: "3px solid #FEC0CA",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: "0 0 5px #FEC0CA",
            textShadow: "0 0 5px #FEC0CA",
            padding: "5px",
        },
    },
    image: {
        width: "80px",
        heiht: "80px",
        transition: "transform 1.2s",
        transformStyle: "preserve-3d",
        "&:hover": {
            transform: "rotateZ(360deg)",
        },
        margin: "-5px",
    },
}));

const NavBarHeader = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        {
            menuTitle: "About Us",
            pageURL: "/about",
            id: "about-us",
            link: "#about-us",
        },
        {
            menuTitle: "Previous Works",
            pageURL: "/works",
            id: "prev-work",
            link: "#prev-work",
        },
        {
            menuTitle: "Roadmap",
            pageURL: "/roadmap",
            id: "roadmap",
            link: "#road-map",
        },
    ];

    return (
        <div className={classes.root} sx={{ background: "rgba(0,0,0,0.5)" }}>
            <Toolbar>
                {isMobile ? (
                    <Grid
                        container
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Grid>
                            <Button variant="image" onClick={handleMenu}>
                                <img
                                    src={logo}
                                    alt="img"
                                    className={classes.image}
                                />
                            </Button>
                        </Grid>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            style={{ background: "rgba(1,1,1,0.5)" }}
                        >
                            {menuItems.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.id}
                                        onClick={() => handleMenuClick(null)}
                                        style={{ backgroundColor: "#3D0240", margin: "-8px", padding: "20px" }}
                                    >
                                        <a
                                            href={item.link}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <CustomTypography variant="p" content={item.menuTitle} />
                                        </a>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                        <Grid alignItems="center" alignSelf="center">
                            <SocialLinks />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid
                        container
                        direction={"row"}
                        justifyContent={"space-around"}
                    >
                        <img src={logo} alt="img" className={classes.image} />
                        <Grid
                            item
                            md={8}
                            justifyContent={"space-around"}
                            className={classes.headerOptions}
                        >
                            {menuItems.map((item) => {
                                return (
                                    <a
                                        href={item.link}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            key={item.id}
                                            variant="text"
                                            className={classes.navBtn}
                                        >
                                            <CustomTypography variant="subtitle1" content={item.menuTitle} />
                                            {/* {item.menuTitle} */}
                                        </Button>
                                    </a>
                                );
                            })}
                        </Grid>
                        <SocialLinks />
                    </Grid>
                )}
            </Toolbar>
        </div>
    );
};

export default NavBarHeader;
