import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@mui/material/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../../assets/logo.png";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up("md")]: {
            backgroundColor: "#white",
        },
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#white",
        },
    },
    dFlex: {
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("md")]: {
            flexGrow: 1,
        },
    },
    navBtn: {
        width: "10rem",
        height: "3rem",
        marginRight: "2.2rem",
        marginTop: "1.7rem",
        [theme.breakpoints.up("md")]: {
            color: "#7B1EA2",
        },
    },
    image: {
        width: "150px",
        heiht: "200px",
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
            menuTitle: "Provided Services",
            pageURL: "/services",
            id: "used-tech",
        },
        {
            menuTitle: "Roadmap",
            pageURL: "/roadmap",
            id: "roadmap",
        },
        {
            menuTitle: "Footer",
            pageURL: "/footer",
            id: "footer",
        },
    ];

    return (
        <div className={classes.root}>
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
                        <img src={logo} alt="img" className={classes.image} />

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
