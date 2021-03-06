import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { cardItems } from "./Projects";
import MobileStepper from "@mui/material/MobileStepper";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./styles.css";
import CustomHeader from "../CustomHeader/CustomHeader";
import PaddingElement from "../PaddingElement/PaddingElement";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    projectContainer: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    descContainer: {
        display: "flex",
        height: "65%",
        alignItems: "center",
    },
    projectDesc: {
        color: "white",
        [theme.breakpoints.up("md")]: {
            paddingBottom: "10vh",
        },
    },
    cardImg: {
        [theme.breakpoints.up("md")]: {
            width: "200px",
            height: "auto",
        },
        [theme.breakpoints.down("sm")]: {
            width: "140px",
            height: "auto",
        },
    },
    cardImgSingle: {
        [theme.breakpoints.up("md")]: {
            width: "90%",
            height: "auto",
        },
        [theme.breakpoints.down("sm")]: {
            width: "250px",
            height: "auto",
        },
    },
    cardImgContain: {
        height: "auto",
        maxHeight: "45vh",
        objectFit: "contain !important",
    },
}));

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        return "active";
    } else if (indexes.nextIndex === cardIndex) {
        return "next";
    } else if (indexes.previousIndex === cardIndex) {
        return "prev";
    }
    return "inactive";
}

const CardCarousel = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    const handleCardTransition = useCallback(
        (index) => {
            if (index > 0) {
                if (indexes.currentIndex >= cardItems.length - 1) {
                    setIndexes({
                        previousIndex: cardItems.length - 1,
                        currentIndex: 0,
                        nextIndex: 1,
                    });
                } else {
                    setIndexes((prevState) => ({
                        previousIndex: prevState.currentIndex,
                        currentIndex: prevState.currentIndex + 1,
                        nextIndex:
                            prevState.currentIndex + 2 === cardItems.length
                                ? 0
                                : prevState.currentIndex + 2,
                    }));
                }
            } else {
                if (indexes.currentIndex === 0) {
                    console.log(indexes.currentIndex, "current");
                    setIndexes({
                        previousIndex: 0,
                        currentIndex: cardItems.length - 1,
                        nextIndex: cardItems.length - 2,
                    });
                } else {
                    setIndexes((prevState) => ({
                        previousIndex: prevState.currentIndex,
                        currentIndex: prevState.currentIndex - 1,
                        nextIndex:
                            prevState.currentIndex - 1 === 0
                                ? cardItems.length
                                : prevState.currentIndex - 2,
                    }));
                }
            }
        },
        [indexes.currentIndex]
    );

    return (
        <Box sx={{ flexGrow: 1 }} id="prev-work">
            <PaddingElement space={10} />
            <CustomHeader heading={"Previous Works"} variant={"h2"} />
            <Grid
                sx={{
                    width: "80%",
                    marginLeft: "7%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    onClick={() => handleCardTransition(1)}
                    variant="text"
                    color="inherit"
                >
                    <ArrowLeftIcon style={{ color: "white", fontSize: 60 }} />
                </Button>
                <MobileStepper
                    variant="dots"
                    steps={cardItems.length}
                    position="static"
                    activeStep={indexes.currentIndex}
                    sx={{
                        size: 60,
                        background: "border-box !important",
                        justifyContent: "center",
                    }}
                    size="large"
                />
                <Button
                    onClick={() => handleCardTransition(-1)}
                    variant="text"
                    color="inherit"
                >
                    <ArrowRightIcon style={{ color: "white", fontSize: 60 }} />
                </Button>
            </Grid>
            <PaddingElement space={10} />

            <Grid container>
                <Grid
                    xs={12}
                    md={12}
                    alignSelf={"center"}
                    marginTop={isMobile ? 12 : 15}
                >
                    <Grid className="d-flex">
                        <Grid className="card-carousel">
                            {cardItems.map((card, index) => (
                                <li
                                    key={card.id}
                                    style={{
                                        backgroundColor: "#2a232d",
                                        border: "3px solid #FEC0CA",
                                        borderRadius: "40px",
                                        boxShadow: "0 0 10px #FEC0CA",
                                    }}
                                    className={`card ${determineClasses(
                                        indexes,
                                        index
                                    )}`}
                                >
                                    <Grid className={classes.projectContainer}>
                                        <Grid item sm={12} md={6} lg={5}>
                                            <CustomHeader variant={"h3"} heading={card.title} />
                                            <Grid
                                                className={
                                                    classes.descContainer
                                                }
                                            >
                                                <TextareaAutosize
                                                    maxRows={isMobile ? 4 : 12}
                                                    defaultValue={
                                                        card.description
                                                    }
                                                    style={{
                                                        width: "90%",
                                                        background: "inherit",
                                                        border: "none",
                                                        "text-align":
                                                            "left !important",
                                                        color: "white",
                                                        fontFamily: "Rajdhani, sans-serif",
                                                        fontSize: 20,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                        {card.img2 ? (
                                            <Grid sm={12} md={6} lg={8}>
                                                <ImageList
                                                    sx={{
                                                        justifyContent:
                                                            "center",
                                                        display: "flex",
                                                        height: "auto",
                                                    }}
                                                    variant="quilted"
                                                    cols={3}
                                                >
                                                    <ImageListItem
                                                        className={
                                                            classes.cardImg
                                                        }
                                                    >
                                                        <img
                                                            src={card.img1}
                                                            alt={card.title}
                                                            loading="auto"
                                                            className={
                                                                classes.cardImgContain
                                                            }
                                                        />
                                                    </ImageListItem>
                                                    <ImageListItem
                                                        className={
                                                            classes.cardImg
                                                        }
                                                    >
                                                        <img
                                                            src={`${card.img2}?w=161&fit=crop&auto=format`}
                                                            srcSet={`${card.img2}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={card.title}
                                                            className={
                                                                classes.cardImgContain
                                                            }
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                    <ImageListItem
                                                        className={
                                                            classes.cardImg
                                                        }
                                                    >
                                                        <img
                                                            src={`${card.img3}?w=161&fit=crop&auto=format`}
                                                            srcSet={`${card.img3}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={card.title}
                                                            className={
                                                                classes.cardImgContain
                                                            }
                                                            loading="eager"
                                                        />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                        ) : (
                                            <Grid
                                                sm={12}
                                                md={6}
                                                lg={8}
                                                marginTop={5}
                                            >
                                                <img
                                                    sx={{
                                                        height: "auto",
                                                        width: "auto",
                                                    }}
                                                    src={card.img1}
                                                    alt={card.title}
                                                    loading="auto"
                                                    className={
                                                        classes.cardImgSingle
                                                    }
                                                />
                                            </Grid>
                                        )}
                                    </Grid>
                                </li>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <PaddingElement space={20} />
        </Box>
    );
};

export default CardCarousel;
