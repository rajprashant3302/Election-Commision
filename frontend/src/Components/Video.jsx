import React from "react";

const Video = ({ videoUrl }) => {
  return (
    <div className="flex justify-center items-center p-6 h-[60vw] md:max-h-[40vh]">
      <div className="relative w-full max-w-lg group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500  to-blue-500 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
        
        {/* Glassmorphism video container */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-lg transition transform group-hover:scale-[1.02] group-hover:shadow-pink-500/40 duration-500">
          {/* Video */}
          <iframe
            className="w-full aspect-video"
            src={videoUrl}
            title="Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          {/* Bottom Info Bar */}
          <div className="p-4 flex items-center justify-between bg-white/5 backdrop-blur-md">
            <span className="text-white/90 font-medium">🎥 Featured Video</span>
            <button className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm hover:scale-105 transition">
              Watch Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;