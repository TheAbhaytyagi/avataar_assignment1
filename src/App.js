import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImgC from "../src/image1.jpg";
import ImgD from "../src/image2.jpg";
import ImgE from "../src/image3.jpg";
import ImgF from "../src/image4.jpg";
import ImgG from "../src/image5.jpg";

function App() {
  return (
    <>
      <Header />
      {/* <ImageSlider slides={SliderData} /> */}
      <Carousel>
        <div>
          <img src={ImgC} />
          <p className="legend"></p>
        </div>
        <div>
          <img src={ImgD} />
          <p className="legend"></p>
        </div>
        <div>
          <img src={ImgE} />
          <p className="legend"></p>
        </div>
        <div>
          <img src={ImgF} />
          <p className="legend"></p>
        </div>
        <div>
          <img src={ImgG} />
          <p className="legend"></p>
        </div>
      </Carousel>{" "}
    </>
  );
}

export default App;
