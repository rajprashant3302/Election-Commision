import React, { useState } from "react";
import { FileText, ChevronRight, ChevronDown } from "lucide-react";
import bgImage from "../assets/bg.jpg";

// Data Structure for All Sections
const sections = [
  {
    heading: "Special Intensive Revision, 2025",
    items: [
      "Campaign Materials",
      "Radio Jingles",
      "Videos",
      "Video Spot, Documentary, Animation",
      "SIR (Claim and Objection period) SVEEP Materials",
      "Testimonials",
      "FINAL PUBLICATION DATA 30.09.2025",
    ],
  },
  {
    heading: "Bihar Legislative Election, 2025",
    items: [
      "Posters",
      "SVEEP - 2025",
      "ECI VISIT - 2025",
      "MCC political meeting district wise Vidhan Sabha election 2025",
      "Audio Jingle",
      "EVM-VVPAT TRAINING VIDEOS (POLL DAY)",
    ],
  },
  {
    heading:
      "Endline Survey of Knowledge, Attitude, Practices (KAP) of citizens in Bihar for General Elections of Lok Sabha, 2024",
    items: ["केएपी एंडलाइन सर्वेक्षण, 2024", "Endline Survey of KAP, 2024 (English)"],
  },
  {
    heading: "National Voters 25",
    items: ["CEC Message on NVD-2025", "NVD Posters", "RADIO-JINGLE (Audio/Video)", "Logo"],
  },
];

const Sweep = () => {
  // Keeps track of which section is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle section open/close
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Header Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          SVEEP
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
          SVEEP Materials
        </h2>

        {/* Accordion Section */}
        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
          {sections.map((section, idx) => (
            <div key={idx} className="py-4">
              {/* Heading (clickable) */}
              <button
                onClick={() => toggleSection(idx)}
                className="flex items-center justify-between w-full text-left px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 rounded-md transition-all"
              >
                <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-purple-700">
                  {openIndex === idx ? (
                    <ChevronDown className="text-indigo-600 transition-transform" />
                  ) : (
                    <ChevronRight className="text-indigo-600 transition-transform" />
                  )}
                  {section.heading}
                </h3>
              </button>

              {/* Sub-items (collapsible area) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-8 space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-pink-50 hover:to-purple-50 rounded-md px-4 py-2 transition-all shadow-sm cursor-pointer"
                    >
                      <span className="flex items-center gap-2 text-gray-800 font-medium">
                        <span className="text-indigo-600">❖</span>
                        {item}
                      </span>
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweep;
