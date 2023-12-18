import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import "./ImageSlider.css"; // Import your custom CSS file for styling
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImgC from "../../src/image1.jpg";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    // <section className="slider-container">
    //   <FaArrowAltCircleLeft className="arrow left-arrow" onClick={prevSlide} />
    //   <div className="slider">
    //     {slides.map((slide, index) => (
    //       <div
    //         className={`slide-card ${index === current ? "active" : ""}`}
    //         key={index}
    //         style={{
    //           transform: `translateX(${(index - current) * 100}%) scale(${
    //             index === current ? 1.1 : 1
    //           })`, // Adjust the scale factor as needed
    //           width: "auto",
    //           marginRight: "10px",
    //         }}
    //       >
    //         <div className="card">
    //           <img
    //             src={slides[index].image}
    //             alt="travel"
    //             className="image"
    //             style={{ width: "auto" }}
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <FaArrowAltCircleRight
    //     className="arrow right-arrow"
    //     onClick={nextSlide}
    //   />
    // </section>
    <div>
      <Carousel>
        <div>
          <img src={ImgC} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={ImgC} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={ImgC} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
