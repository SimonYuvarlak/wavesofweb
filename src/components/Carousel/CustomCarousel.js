import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { cardItems } from "./Projects";
import "./styles.css";
import CustomHeader from "../CustomHeader/CustomHeader";
import PaddingElement from "../PaddingElement/PaddingElement";

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
            <PaddingElement space={10} />
            <Grid container>
                <Grid
                    xs={12}
                    md={12}
                    lg={6}
                    alignSelf={"center"}
                    marginTop={5}
                    marginBottom={10}
                >
                    <Grid className="d-flex">
                        <Grid className="d-grid">
                            <Button
                                onClick={() => handleCardTransition(1)}
                                variant="text"
                                color="inherit"
                            >
                                <ArrowDropUpIcon
                                    style={{ color: "white", fontSize: 60 }}
                                />
                            </Button>
                            <Button
                                onClick={() => handleCardTransition(-1)}
                                variant="text"
                                color="inherit"
                            >
                                <ArrowDropDownIcon
                                    style={{ color: "white", fontSize: 60 }}
                                />
                            </Button>
                        </Grid>

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
                                    <h2 style={{ color: "white" }}>
                                        {card.title}
                                    </h2>
                                    <p style={{ color: "white" }}>
                                        {card.description}
                                    </p>
                                </li>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    sm={12}
                    lg={5}
                    alignSelf={"center"}
                    marginTop={5}
                    marginLeft={5}
                    className="center-img"
                >
                    {cardItems[indexes.currentIndex].img2 ? (
                        <ImageList
                            sx={{ width: "90%", height: "100%" }}
                            variant="quilted"
                            cols={3}
                        >
                            <ImageListItem>
                                <img
                                    src={cardItems[indexes.currentIndex].img1}
                                    alt={cardItems[indexes.currentIndex].title}
                                    loading="auto"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={`${cardItems[indexes.currentIndex].img2
                                        }?w=161&fit=crop&auto=format`}
                                    srcSet={`${cardItems[indexes.currentIndex].img2
                                        }?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={cardItems[indexes.currentIndex].title}
                                    sx={{ "object-fit": "fill !important" }}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={`${cardItems[indexes.currentIndex].img3
                                        }?w=161&fit=crop&auto=format`}
                                    srcSet={`${cardItems[indexes.currentIndex].img3
                                        }?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={cardItems[indexes.currentIndex].title}
                                    loading="eager"
                                />
                            </ImageListItem>
                        </ImageList>
                    ) : (
                        <ImageList
                            sx={{ width: "90%", height: "80%" }}
                            variant="woven"
                            cols={1}
                        >
                            <ImageListItem>
                                <img
                                    src={cardItems[indexes.currentIndex].img1}
                                    alt={cardItems[indexes.currentIndex].title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardCarousel;
