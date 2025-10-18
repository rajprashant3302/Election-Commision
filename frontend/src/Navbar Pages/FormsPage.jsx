// File: FormsPage.jsx
import React from "react";
import bgImage from "../assets/bg.jpg";

const eligibleForms = [
    {
        name: "Form-6",
        description: "Application for inclusion of name in Electoral Roll.",
        link: "#",
    },
    {
        name: "Form-6A",
        description: "Application for inclusion of name in Electoral Roll by an overseas Indian elector.",
        link: "#",
    },
    {
        name: "Form-6B",
        description: "Letter of Information of Aadhaar number for the purpose of electoral roll authentication.",
        link: "#",
    },
    {
        name: "Form-7",
        description: "Voter Application Form for Objection for Proposed Inclusion/Deletion of Name in Existing Electoral Roll.",
        link: "#",
    },
    {
        name: "Form-8",
        description: "Voter Application Form for shifting of Residence/Correction of Entries in Existing Electoral Roll.",
        link: "#",
    },
    {
        name: "Form-18",
        description: "Claim for inclusion of name in the electoral roll for a graduates’ constituency of state legislative council.",
        link: "#",
    },
    {
        name: "Form-19",
        description: "Claim for inclusion of name in the electoral roll for a teachers’ constituency.",
        link: "#",
    },
];

const candidateForms = [
    {
        name: "Form-2A",
        description: "Nomination Paper for Contesting Election to the Lok Sabha (House of The People).",
        link: "#",
    },
    {
        name: "Form-2B",
        description: "Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly).",
        link: "#",
    },
    {
        name: "Form-2C",
        description: "Nomination Paper for Contesting Election to the Rajya Sabha (Council of States).",
        link: "#",
    },
    {
        name: "Form-2D",
        description: "Nomination Paper for Contesting Election to the Vidhan Parishad by Members of Legislative Assembly.",
        link: "#",
    },
    {
        name: "Form-2E",
        description: "Nomination Paper for Contesting Election to the Vidhan Parishad from a Council constituency.",
        link: "#",
    },
    {
        name: "Form-26",
        description: "Affidavit to be submitted by Candidates along with nomination paper.",
        link: "#",
    },
    {
        name: "Form-A&B",
        description: "Annexure-25",
        link: "#",
    },
    {
        name: "Form-AA & BB",
        description: "Biennial election to Council of States-Form AA and BB and Checklist of documents for filing of nominations-reg",
        link: "#",
    },
];

const FormsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 py-10">
            {/* Page Heading */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    Forms For Registration In Electoral Roll
                </h1>
            </div>
            <div className=" mx-auto px-4">

                {/* Breadcrumb */}
                <p className="text-sm text-blue-600 mb-4 py-4">
                    Home / Electors / <span className="text-pink-600 font-semibold">Forms For Registration In Electoral Roll</span>
                </p>

                {/* Eligible Person Forms */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-blue-400 inline-block">
                        Forms for Eligible Person
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eligibleForms.map((form, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-purple-400">
                                <div className="flex items-center mb-3">
                                    <div className="bg-purple-200 text-purple-800 p-3 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-lg">{form.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-3">{form.description}</p>
                                <a href={form.link} target="_blank" rel="noopener noreferrer" className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors inline-block">
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Candidate Forms */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-pink-400 inline-block">
                        Forms for Candidate
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {candidateForms.map((form, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-pink-400">
                                <div className="flex items-center mb-3">
                                    <div className="bg-pink-200 text-pink-800 p-3 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-lg">{form.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-3">{form.description}</p>
                                <a href={form.link} target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition-colors inline-block">
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormsPage;
