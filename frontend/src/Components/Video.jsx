import React from "react";

const Video = ({videoUrl}) => {
  return (
    <div className="relative w-80 h-[28rem]">
      {/* Background rectangles */}
      <div className="absolute top-6 left-7 w-36 h-72 bg-blue-900 rounded-3xl"></div>
      <div className="absolute bottom-5 right-7 w-36 h-72 bg-pink-900 rounded-3xl"></div>

      {/* Video container with rounded corners and border */}
      <div className="relative w-60 h-96 mx-auto my-9 rounded-2xl overflow-hidden border-2 border-gray-200">
        <iframe
          className="w-full h-full"
          src={videoUrl}
    
          title="YouTube video"
          
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
