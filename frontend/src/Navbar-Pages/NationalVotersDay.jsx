import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import bgImage from "../assets/bg.jpg";

// Replace the YouTube links with your actual video URLs
const videos = [
  { year: "National Voters’ Day 2023", link: "https://www.youtube.com/embed/xNSPp93DuX8?si=4aHPEL0A7df2EzDL" },
  { year: "National Voters’ Day 2022", link: "https://www.youtube.com/embed/UJpfrZNCD8M?si=hLSH7RRAgsoUtuf7" },
  { year: "National Voters’ Day 2021", link: "https://www.youtube.com/embed/7HFsuN9RRxI?si=qYlZgGj-XGNPDhQl" },
  { year: "National Voters’ Day 2020", link: "https://www.youtube.com/embed/p0e61Bhjz9k?si=9zPCdaqR2BXE-LF5" },
  { year: "National Voters’ Day 2019", link: "https://www.youtube.com/embed/psS43px0SPE?si=8HPwqBaGgYI0PhZE" },
];

const NationalVotersDay = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Header */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          National Voters’ Day
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-6">
          National Voters’ Day Videos
        </h2>

        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
          {videos.map((video, idx) => (
            <div key={idx} className="py-4">
              {/* Heading */}
              <button
                onClick={() => toggleSection(idx)}
                className="flex items-center justify-between w-full text-left px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-md transition-all"
              >
                <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-indigo-700">
                  {openIndex === idx ? (
                    <ChevronDown className="text-indigo-600 transition-transform" />
                  ) : (
                    <ChevronRight className="text-indigo-600 transition-transform" />
                  )}
                  {video.year}
                </h3>
              </button>

              {/* Video Embed */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-[600px] mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={video.link}
                      title={video.year}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 md:h-96 rounded-md shadow-md"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NationalVotersDay;
