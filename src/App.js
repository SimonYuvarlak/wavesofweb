import "./App.css";
import CardCarousel from "./components/Carousel/CustomCarousel";
import Technologies from "./components/Technologies/Technologies";
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

    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <NavBarHeader />
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <div className="App">
                <AboutUs context={context} id="about-us" />
                <CardCarousel id="prev-work" />
                <Technologies id="used-tech" />
            </div>
            <ScrollTop {...props}>
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

export default App;
