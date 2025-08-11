import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageSlides = [
  "https://www.eci.gov.in/eci-backend/public/banner/June/AgCETquH7goUOGV1748923090.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/March/IIaNlt2cwuKvzAR1743069808.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/February/bXDQo5fCrDutjvj1739956015.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/June/cGrGlk3na6SD9mN1717683100.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/June/A7V4NRwdc2UCsVL1748940714.jpg"
  // Add more image paths here
];

const ImageCarousel = () => {
  return (
    <div className="w-full h-full py-8 px-1 bg-gray-100">
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
          <div key={index} className="w-full h-[400px] md:h-[500px] bg-black">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=" h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
