// File: PoliticalPartiesPage.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import bgImage from "../assets/bg.jpg";
// import pdfIcon from "../assets/pdf-icon.png"; // optional if using FileText icon

const guidelines = [
    {
        title: "Amended Guidelines for Party registration",
        date: "Monday 02 Dec 2019, 7:32 PM",
        pdfs: [
            { name: "PDF 1", url: "/pdfs/pdf1.pdf" },
            { name: "PDF 2", url: "/pdfs/pdf2.pdf" },
        ],
    },
    {
        title: "Registration of political parties under section 29 A of the Representation of the People Act, 1951 – issue of additional guidelines",
        date: "Friday 20 Jun 2014, 5:30 AM",
        pdfs: [
            { name: "PDF 1", url: "/pdfs/pdf1.pdf" },
            { name: "PDF 2", url: "/pdfs/pdf2.pdf" },
        ],
    },
    {
        title: "Registration of Political Parties – Choice of Name for Political Party",
        date: "Sunday 25 May 2014, 5:30 AM",
        pdfs: [
            { name: "PDF 1", url: "/pdfs/pdf1.pdf" },
            { name: "PDF 2", url: "/pdfs/pdf2.pdf" },
        ],
    },
    {
        title: "Political Parties Registration Guidelines",
        date: "Sunday 25 May 2014, 5:30 AM",
        pdfs: [],
    },
];

const newParties = [
    {
        title: "New parties seeking registration (Dated 24/09/2025)",
        date: "Wednesday 24 Sep 2025, 9:44 AM",
        pdfs: [
            { name: "PDF 1", url: "/pdfs/pdf1.pdf" },
            { name: "PDF 2", url: "/pdfs/pdf2.pdf" },
        ],
    },
    {
        title: "Registration of Political Parties – Choice of Name for Political Party",
        date: "Sunday 25 May 2014, 5:30 AM",
        pdfs: [
            { name: "PDF 1", url: "/pdfs/pdf1.pdf" },
            { name: "PDF 2", url: "/pdfs/pdf2.pdf" },
        ],
    },
    {
        title: "Political Parties Registration Guidelines",
        date: "Sunday 25 May 2014, 5:30 AM",
        pdfs: [],
    },
];

const Section = ({ title, items }) => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="space-y-6 mt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 pb-2">
                {title}
            </h2>
            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm"
                    >
                        <button
                            onClick={() => toggleExpand(idx)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-500">{item.date}</p>
                            </div>
                            <span className="text-xl text-gray-700">
                                {expanded === idx ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </button>

                        {/* Expandable PDF Links */}
                        {expanded === idx && item.pdfs.length > 0 && (
                            <div className="px-4 py-4 flex  gap-8 ">
                                {item.pdfs.map((pdf, i) => (
                                    <a
                                        key={i}
                                        href={pdf.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex  items-center bg-white w-fit rounded-2xl px-4 py-2 gap-3 text-blue-700 hover:text-blue-900  font-medium text-base md:text-lg"
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
    );
};

const PoliticalPartiesPage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 mb-2">
            {/* Header */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                    Political Parties Registration
                </h1>
            </div>

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 mt-4 text-sm md:text-base text-gray-600">
                Home / Political Parties / Political Parties Registration
            </div>

            {/* Sections */}
            <div className="max-w-6xl mx-auto px-4 ">
                <Section title="Guidelines / Instructions" items={guidelines} />
                <Section title="Political Parties Registration – New parties seeking registration" items={newParties} />
            </div>
        </div>
    );
};

export default PoliticalPartiesPage;
