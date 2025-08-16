import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageSlides = [
  "https://ceoelection.bihar.gov.in/images/Year2025/SIR2025/SIR_2.jpg",
  "https://ceoelection.bihar.gov.in/images/Year2025/SIR2025/SIR_3.jpg",
  "https://ceoelection.bihar.gov.in/images/Year2025/SIR2025/SIR_1.jpg",
  "https://ceoelection.bihar.gov.in/images/Year2025/SIR2025/SIR_3.jpg",
  "https://ceoelection.bihar.gov.in/images/Year2025/SIR2025/SIR_2.jpg",
  // Add more image paths here
];

const ImageCarousel = () => {
  return (
    <div className="w-full h-fit py-8 px-1 bg-white">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        swipeable
        emulateTouch
        className="rounded-xl overflow-hidden"
      >
        {imageSlides.map((image, index) => (
          <div key={index} className="w-full h-fit bg-black">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=" h-fit"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
