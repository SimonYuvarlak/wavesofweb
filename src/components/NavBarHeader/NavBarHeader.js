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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("md")]: {
            flexGrow: 1,
        },
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        width: "100%",
    },
    navBtn: {
        width: "14rem",
        height: "5rem",
        marginTop: "3.7rem",
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
                    <>
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="img" className="image" />

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
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
                    </>
                ) : (
                    <div className="d-flex">
                        <img src={logo} alt="img" className="image" />
                        <div className={classes.headerOptions}>
                            {menuItems.map((item) => {
                                return (
                                    <Button
                                        key={item.id}
                                        variant="contained"
                                        className={classes.navBtn}
                                    >
                                        {item.menuTitle}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </Toolbar>
        </div>
    );
};

export default NavBarHeader;
