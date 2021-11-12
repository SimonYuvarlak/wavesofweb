import chainImg from "./assets/chainImg.jpeg";
import futkids1 from "./assets/futkids1.png";
import futkids2 from "./assets/futkids2.png";
import futkids3 from "./assets/futkids3.png";
import laundrative1 from "./assets/laundrative1.png";
import laundrative2 from "./assets/laundrative2.png";
import laundrative3 from "./assets/laundrative3.png";
import folk from "./assets/wdtfs.png";

export const cardItems = [
    {
        id: 1,
        title: "FUTKIDS",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Implementation of a mobile application, for youth football academies, using React Native, NodeJS, Express and MongoDB, Firebase",
        img1: futkids1,
        img2: futkids2,
        img3: futkids3,
    },
    {
        id: 2,
        title: "LAUNDRATIVE",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Implementation of business solution for laundry and dry cleaners, using Angular, Java and MySQL",
        img1: laundrative1,
        img2: laundrative2,
        img3: laundrative3,
    },
    {
        id: 3,
        title: "EDJOY ",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Implementation of a website, an online learning platform, using React, ASP .NET and Amazon Web Services",
        img1: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        img2: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        img3: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    },
    {
        id: 4,
        title: "CRYPTOCHAIN ",
        copy: "Lorem ipsum dolor sit amet",
        description:
            "Build a Blockchain and Cryptocurrency | Full-Stack Edition",
        img1: chainImg,
        img2: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        img3: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    },
    {
        id: 5,
        title: "What Does The Folk Say",
        copy: "Lorem ipsum dolor sit amet",
        description: `
            This is an sentiment analysis api developed with NodeJs. With this api, you can find the common opinion in public
            based on recents tweets about that subject. Api returns a json object showing the what is the public opinion and what is
            the point of that query through sentiment analysis machine learning algorithm.
        `,
        img1: folk,
        img2: folk,
        img3: folk,
    },
    {
        id: 6,
        title: "UP",
        copy: "Lorem ipsum dolor sit amet",
        description: `
            UP is a social media platform for college students. Here students can use this app like twitter or directly message to each other.
            When students choose which courses they are taking, they automatically participate in group chat created with other students taking the same course.
            Also students can find job opportunities since this app connects companies and students.
        `,
    },
];
