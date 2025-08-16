import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageSlides = [
  "https://sdmntprwestus.oaiusercontent.com/files/00000000-8f9c-6230-ae57-d6dcff8342d2/raw?se=2025-08-16T08%3A11%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7fa5a8a5-caa2-51bd-a5a8-c8d0de2ae69f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A16Z&ske=2025-08-17T00%3A48%3A16Z&sks=b&skv=2024-08-04&sig=rCICN/pURyWw5C38hzcFOkvxXNsZL9vGuHR3ppVK%2Bd8%3D",
  "https://sdmntprwestus.oaiusercontent.com/files/00000000-8f9c-6230-ae57-d6dcff8342d2/raw?se=2025-08-16T08%3A11%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7fa5a8a5-caa2-51bd-a5a8-c8d0de2ae69f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A16Z&ske=2025-08-17T00%3A48%3A16Z&sks=b&skv=2024-08-04&sig=rCICN/pURyWw5C38hzcFOkvxXNsZL9vGuHR3ppVK%2Bd8%3D",
  "https://sdmntprwestus.oaiusercontent.com/files/00000000-8f9c-6230-ae57-d6dcff8342d2/raw?se=2025-08-16T08%3A11%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7fa5a8a5-caa2-51bd-a5a8-c8d0de2ae69f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A16Z&ske=2025-08-17T00%3A48%3A16Z&sks=b&skv=2024-08-04&sig=rCICN/pURyWw5C38hzcFOkvxXNsZL9vGuHR3ppVK%2Bd8%3D",
  "https://sdmntprwestus.oaiusercontent.com/files/00000000-8f9c-6230-ae57-d6dcff8342d2/raw?se=2025-08-16T08%3A11%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7fa5a8a5-caa2-51bd-a5a8-c8d0de2ae69f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A16Z&ske=2025-08-17T00%3A48%3A16Z&sks=b&skv=2024-08-04&sig=rCICN/pURyWw5C38hzcFOkvxXNsZL9vGuHR3ppVK%2Bd8%3D",
  "https://sdmntprwestus.oaiusercontent.com/files/00000000-8f9c-6230-ae57-d6dcff8342d2/raw?se=2025-08-16T08%3A11%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7fa5a8a5-caa2-51bd-a5a8-c8d0de2ae69f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A16Z&ske=2025-08-17T00%3A48%3A16Z&sks=b&skv=2024-08-04&sig=rCICN/pURyWw5C38hzcFOkvxXNsZL9vGuHR3ppVK%2Bd8%3D",
  
  // Add more image paths here
];

const ImageCarousel = () => {
  return (
    <div className="w-full h-full py-8 px-1 bg-gray-200">
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
