import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Technology = (props) => {
    return (
        <Card sx={{ boxShadow: "10"}}>
                <CardMedia
                component="img"
                image={props.src}
                alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.explanation}
                    </Typography>
                </CardContent>
    </Card>
    );
}

export default Technology;