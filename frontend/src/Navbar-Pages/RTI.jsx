// File: FormsPage.jsx
import React from "react";
import { FileText } from "lucide-react";
import bgImage from "../assets/bg.jpg";

const items = [
  {
    title: "Section 4(1)(b)-17 Manual",
    link: "https://ceoelection.bihar.gov.in/right%20to%20information/information/RTI.pdf",
  },
];

const RTI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Page Heading */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          Right To Information
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="space-y-6 mt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 pb-2">
            Right To Information
          </h2>

          {/* Items */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm px-6 py-4 hover:bg-blue-100 transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTI;
