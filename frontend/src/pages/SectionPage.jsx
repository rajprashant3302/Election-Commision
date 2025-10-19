// File: SectionPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import sections from "./SectionData";

const colors = [
  "bg-teal-400",
  "bg-purple-400",
  "bg-indigo-400",
  "bg-pink-400",
  "bg-orange-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-cyan-400",
];

const SectionPage = () => {
  const { sectionPath } = useParams();

  const section = sections.find((s) => s.path === sectionPath);

  // If no section is found
  if (!section) {
    return (
      <p className="text-center mt-20 text-xl text-red-600 font-semibold">
        Section not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            {section.title}
          </h1>
          <p className="mt-2 text-gray-700 font-medium">
            Click on any link to navigate to detailed information.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {section.items.map((item, idx) => {
            const color = colors[idx % colors.length];
            return (
              <a
                key={idx}
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-center items-center h-36 p-4 rounded-2xl shadow-md ${color} text-white font-semibold text-lg hover:scale-105 transition-transform border-2 border-white hover:border-gray-200`}
              >
                <p className="text-center">{item.name} →</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
