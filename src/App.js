import "./App.css";
import CardCarousel from "./components/Carousel/CustomCarousel";
import AboutUs from "./components/AboutUs/AboutUs";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import NavBarHeader from "./components/NavBarHeader/NavBarHeader";
import RoadMap from "./components/RoadMap/RoadMap";
import Footer from "./components/Footer/Footer";
import PaddingElement from "./components/PaddingElement/PaddingElement";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./components/Intro/Intro";

//#3D0240

let theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#2a232d",
        },
    },
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

function App(props) {
    const context = `
  body1. Lorem ipsum dolor sit amet, consectetur 
  adipisicing elit. Quos blanditiis tenetur unde suscipit, 
  quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam 
  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  `;

    function ScrollTop(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (
                event.target.ownerDocument || document
            ).querySelector("#back-to-top-anchor");

            if (anchor) {
                anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        };

        return (
            <Zoom in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: "fixed", bottom: 16, right: 16 }}
                >
                    {children}
                </Box>
            </Zoom>
        );
    }

    function ElevationScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };

    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar sx={{ background: "rgba(0,0,0,0)" }}>
                        <Toolbar sx={{ padding: "0 !important" }}>
                            <NavBarHeader />
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>

                <Toolbar id="back-to-top-anchor" />
                <div className="App">
                    <PaddingElement space={15} />
                    meraba
                    <Intro p={5} />
                    <PaddingElement space={15} />
                    <AboutUs context={context} />
                    <PaddingElement space={15} />
                    <CardCarousel />
                    <PaddingElement space={15} />
                    <RoadMap />
                    <PaddingElement space={15} />

                    <Footer />
                </div>
                <ScrollTop {...props}>
                    <Fab
                        size="large"
                        aria-label="scroll back to top"
                        sx={{
                            backgroundColor: "#2a232d !important",
                            border: "3px solid #FEC0CA !important",
                            borderRadius: "40px !important",
                            boxShadow: "0 0 12px #FEC0CA !important",
                        }}
                    >
                        <KeyboardArrowUpIcon
                            sx={{
                                color: "white",
                            }}
                        />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
