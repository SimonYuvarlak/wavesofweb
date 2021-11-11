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
import "./styles.css";
import CustomHeader from "../CustomHeader/CustomHeader";
import PaddingElement from "../PaddingElement/PaddingElement";

const useStyles = makeStyles((theme) => ({
    projectContainer: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    projectDesc: {
        color: "white",
        [theme.breakpoints.up("md")]: {
            paddingBottom: "50px",
        },
    },
    cardImg: {
        [theme.breakpoints.up("md")]: {
            width: "200px",
            height: "200px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "120px",
            height: "180px",
        },
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
            <PaddingElement space={5} />
            <Grid container>
                <Grid xs={12} md={12} alignSelf={"center"} marginBottom={5}>
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
                            <ArrowLeftIcon
                                style={{ color: "white", fontSize: 60 }}
                            />
                        </Button>
                        <MobileStepper
                            variant="dots"
                            steps={cardItems.length}
                            position="static"
                            activeStep={indexes.currentIndex}
                            sx={{
                                size: 30,
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
                            <ArrowRightIcon
                                style={{ color: "white", fontSize: 60 }}
                            />
                        </Button>
                    </Grid>

                    <Grid className="d-flex">
                        <Grid className="card-carousel">
                            {cardItems.map((card, index) => (
                                <li
                                    key={card.id}
                                    style={{ backgroundColor: "#3D0240" }}
                                    className={`card ${determineClasses(
                                        indexes,
                                        index
                                    )}`}
                                >
                                    <h1 style={{ color: "white" }}>
                                        {card.title}
                                    </h1>

                                    <Grid className={classes.projectContainer}>
                                        <Grid
                                            item
                                            sm={12}
                                            md={6}
                                            lg={5}
                                            alignSelf={"center"}
                                        >
                                            <p className={classes.projectDesc}>
                                                {card.description}
                                            </p>
                                        </Grid>

                                        <Grid
                                            sm={12}
                                            md={6}
                                            lg={8}
                                            marginLeft={5}
                                        >
                                            <ImageList
                                                sx={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                }}
                                                variant="quilted"
                                                cols={3}
                                            >
                                                <ImageListItem
                                                    className={classes.cardImg}
                                                >
                                                    <img
                                                        src={card.img1}
                                                        alt={card.title}
                                                        loading="auto"
                                                    />
                                                </ImageListItem>
                                                <ImageListItem
                                                    className={classes.cardImg}
                                                >
                                                    <img
                                                        className="card-img"
                                                        src={`${card.img2}?w=161&fit=crop&auto=format`}
                                                        srcSet={`${card.img2}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={card.title}
                                                        sx={{
                                                            "object-fit":
                                                                "fill !important",
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                                <ImageListItem
                                                    className={classes.cardImg}
                                                >
                                                    <img
                                                        className="card-img"
                                                        src={`${card.img3}?w=161&fit=crop&auto=format`}
                                                        srcSet={`${card.img3}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={card.title}
                                                        loading="eager"
                                                    />
                                                </ImageListItem>
                                            </ImageList>
                                        </Grid>
                                    </Grid>
                                </li>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardCarousel;
