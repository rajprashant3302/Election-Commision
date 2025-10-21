// File: FormsPage.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import bgImage from "../assets/bg.jpg";

const items = [
  {
    title: "First Randomisation (First Phase)",
    para: "बिहार विधानसभा आम निर्वाचन, 2025 के दौरान उपयोग किये जाने वाले ई०वी०एम० एवं वी०वी०पैट के प्रथम रैंडमाइजेशन",
    pdfs: [
      { name: "pdf1", url: "https://ceoelection.bihar.gov.in/pdf/Year_2025/Randomisation/FirstRandomisationFirstPhase.pdf" },
    ],
  },
  {
  title: "First Randomisation (Second Phase)",
  para: "बिहार विधानसभा आम निर्वाचन, 2025 के दौरान उपयोग किये जाने वाले ई०वी०एम० एवं वी०वी०पैट के प्रथम रैंडमाइजेशन",
  pdfs: [
    { name: "pdf1", url: "https://ceoelection.bihar.gov.in/pdf/Year_2025/Randomisation/FirstRandomisationSecondPhase.pdf" },
  ],
},
];

const Randomisation = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Page Heading */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          Randomisation for Bihar Assembly Election 2025
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-sm text-blue-600 mb-4 py-4">
          Home / Press Release / <span className="text-pink-600 font-semibold">Randomisation</span>
        </p>

        {/* Section Heading */}
        <div className="space-y-6 mt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 pb-2">
            Randomisation for Bihar Assembly Election 2025
          </h2>

          {/* Items */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex justify-between items-start px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
                      {item.title}
                    </h3>

                    {/* Paragraph: initially one line with ellipsis */}
                    <p
                      className={`text-gray-700 text-base md:text-lg mt-2 ${
                        expanded === idx
                          ? "line-clamp-none" // full text when expanded
                          : "line-clamp-1"   // single-line with ellipsis
                      }`}
                    >
                      {item.para}
                    </p>

                  </div>

                  <span className="text-xl text-gray-700 mt-1">
                    {expanded === idx ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>

                {/* Expandable PDF Links */}
                {expanded === idx && item.pdfs.length > 0 && (
                  <div className="px-6 py-4 flex gap-8 flex-wrap">
                    {item.pdfs.map((pdf, i) => (
                      <a
                        key={i}
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white w-fit rounded-2xl px-4 py-2 gap-3 text-blue-700 hover:text-blue-900 font-medium text-base md:text-lg"
                      >
                        <FileText className="w-6 h-6" />
                        {pdf.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randomisation;
