// File: FormsPage.jsx
import React from "react";
import { FileText } from "lucide-react";
import bgImage from "../assets/bg.jpg";

const items = [
    {
        title: "Manual on Model Code of Conduct(For the guidance of political parties and candidates).",
        link: "https://ceoelection.bihar.gov.in/pdf/Manual%20on%20Model%20Code%20of%20Conduct.pdf",
    },
    {
        title: "Compendium of Instructions on Model Code of Conduct, 2018.",
        link: "https://ceoelection.bihar.gov.in/pdf/Compendium_MCC.pdf",
    },
    {
        title: "FAQ Model Code of Conduct.",
        link: "https://ceoelection.bihar.gov.in/mcc/Faq_MCC.pdf",
    },
    {
        title: "PREVENTION OF DEFACEMENT OF PROPERTY ACT, 1987.",
        link: "https://ceoelection.bihar.gov.in/mcc/prevention_of_defacement_of_property.pdf",
    },
    {
        title: "THE BIHAR PREVENTION OF DEFACEMENT OF PROPERTY (AMENDMENT) ACT, 2010",
        link: "https://ceoelection.bihar.gov.in/mcc/THE%20BIHAR%20PREVENTION%20OF%20DEFACEMENT%20OF%20PROPERTY%20ACT,%201985%20(amendment).pdf",
    },
];

const ModelModeOfConduct = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
            {/* Page Heading */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                    Model Mode of Conduct
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Section Heading */}
                <div className="space-y-6 mt-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 pb-2">
                        Model Mode of Conduct
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

export default ModelModeOfConduct;
