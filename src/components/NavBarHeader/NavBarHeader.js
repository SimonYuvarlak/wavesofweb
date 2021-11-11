import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@mui/material/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../../assets/wow-logo.png";
import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100px",
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
        marginRight: theme.spacing(2),
        alignSelf: "center",
        color: "white ",
    },
    title: {
        [theme.breakpoints.down("md")]: {
            flexGrow: 1,
        },
    },
    navBtn: {
        width: "10rem",
        height: "100%",
        alignSelf: "center",
        marginRight: "2.2rem",
        [theme.breakpoints.up("md")]: {
            color: "white",
        },
        "&:hover": {
            textShadow: "0 0 30px #FEC0CA",
        },
    },
    image: {
        width: "100px",
        heiht: "100px",
        transition: "transform 1.2s",
        transformStyle: "preserve-3d",
        "&:hover": {
            transform: "rotateZ(360deg)",
        },
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
        },
        {
            menuTitle: "Previous Works",
            pageURL: "/works",
            id: "prev-work",
        },
        {
            menuTitle: "Services",
            pageURL: "/services",
            id: "used-tech",
        },
        {
            menuTitle: "Roadmap",
            pageURL: "/roadmap",
            id: "roadmap",
        },
        {
            menuTitle: "Contact Us",
            pageURL: "/contact-us",
            id: "contact",
        },
    ];

    return (
        <div className={classes.root} sx={{ background: "rgba(0,0,0,0.5)" }}>
            <Toolbar>
                {isMobile ? (
                    <Grid container>
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button className={classes.navBtn} variant="image">
                            <img
                                src={logo}
                                alt="img"
                                className={classes.image}
                            />
                        </Button>
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
                        >
                            {menuItems.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.id}
                                        onClick={() => handleMenuClick(null)}
                                        color="#000"
                                    >
                                        {item.menuTitle}
                                    </MenuItem>
                                );
                            })}
                        </Menu>
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
                            md={10}
                            justifyContent={"space-around"}
                            className={classes.headerOptions}
                        >
                            {menuItems.map((item) => {
                                return (
                                    <Button
                                        key={item.id}
                                        variant="text"
                                        className={classes.navBtn}
                                    >
                                        {item.menuTitle}
                                    </Button>
                                );
                            })}
                        </Grid>
                    </Grid>
                )}
            </Toolbar>
        </div>
    );
};

export default NavBarHeader;
