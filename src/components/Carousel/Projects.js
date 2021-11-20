import chainImg from "./assets/chainImg.jpeg";
import futkids1 from "./assets/futkids1.png";
import futkids2 from "./assets/futkids2.png";
import futkids3 from "./assets/futkids3.png";
import laundrative1 from "./assets/laundrative1.png";
import laundrative2 from "./assets/laundrative2.png";
import laundrative3 from "./assets/laundrative3.png";
import folk from "./assets/folk.jpeg";
import up1 from "./assets/up1.jpg";
import up2 from "./assets/up2.jpg";
import up3 from "./assets/up3.jpg";

export const cardItems = [
    {
        id: 1,
        title: "FUTKIDS",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "A mobile application for youth football academies to create player profiles, keep statistics regarding players and stream live matches online. Developed using React Native, NodeJS, Express, MongoDB and Firebase. Will be published in PlayStore and AppleStore soon.",
        img1: futkids1,
        img2: futkids2,
        img3: futkids3,
    },
    {
        id: 2,
        title: "LAUNDRATIVE",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Implementation of an online ordering and POS software for laundry and dry cleaning service providers.Developed using Angular,Ionic, Java, MySQL and",
        img1: laundrative1,
        img2: laundrative2,
        img3: laundrative3,
    },

    {
        id: 3,
        title: "CRYPTOCHAIN ",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Web application which has its own blockchain and ctyptocurrency with similar to bitcoin hashing, developed using NodeJS and Angular ",
        img1: chainImg,
    },
    {
        id: 4,
        title: "What Does The Folk Say",
        copy: "Lorem ipsum dolor sit amet",
        description: "This is an sentiment analysis api developed with NodeJs. With this api, you can find the common opinion in public based on recents tweets about that subject. Api returns a json object showing the what is the public opinion and what is the point of that query through sentiment analysis machine learning algorithm. ",
        img1: folk,
    },
    {
        id: 5,
        title: "UP",
        copy: "Lorem ipsum dolor sit amet",
        description: "UP is a social media platform for college students. Here students can use this app like twitter or directly message to each other. When students choose which courses they are taking, they automatically participate in group chat created with other students taking the same course. Also students can find job opportunities since this app connects companies and students.",
        img1: up1,
        img2: up2,
        img3: up3,
    },
];
