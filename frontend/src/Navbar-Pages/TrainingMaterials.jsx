import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import bgImage from "../assets/bg.jpg";

// Data Structure for All Sections
const sections = [
    {
        heading:
            "ECI Training Materials",
        items: [
            "ECI IIIDEM resource material, instructions, manual, handbooks, SOPs, DOs Donts",
            "Case studies of mistakes done due to lack of training – complication arose",
        ],
    },
    {
        heading: "Landmark Judgements",
        items: [
            "Vol-I",
            "Vol-II",
            "Vol-III",
            "Vol-IV",
        ],
    },
];

const TrainingMaterials = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
            {/* Header Section */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
                    Training Materials
                </h1>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
                    Training Materials
                </h2>

                {/* Table-like Structure */}
                <div className="bg-white rounded-xl shadow-lg p-6 divide-y divide-gray-200">
                    {sections.map((section, idx) => (
                        <div key={idx} className="py-4">
                            {/* Heading */}
                            <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-purple-700 mb-3">
                                <ChevronRight className="text-indigo-600" />
                                {section.heading}
                            </h3>

                            {/* Sub-items */}
                            <ul className="pl-6 space-y-2">
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainingMaterials;
