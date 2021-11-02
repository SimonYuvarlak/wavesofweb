import "./App.css";
import CardCarousel from "./components/Carousel/CustomCarousel";
import Technologies from "./components/Technologies/Technologies";
import AboutUs from "./components/AboutUs/AboutUs";
import RoadMap from "./components/RoadMap/RoadMap";
function App() {
    const context = `
  body1. Lorem ipsum dolor sit amet, consectetur 
  adipisicing elit. Quos blanditiis tenetur unde suscipit, 
  quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam 
  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  `;
    return (
        <div className="App">
            <AboutUs heading={"About Us"} context={context} />
            <CardCarousel />

            <Technologies />
            <RoadMap />
        </div>
    );
}

export default App;
