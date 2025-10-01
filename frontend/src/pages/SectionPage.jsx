// File: SectionPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Data for all sections
const sections = [
  {
    title: "VOTER'S CORNER",
    path: "voters-corner",
    links: [
      "Electors Registration",
      "Track Your Registration Status",
      "Offline Forms For Registration In E-Roll",
      "Know Your Polling Booth",
      "Know Your BLO, ERO & DEO",
      "List of Booth Level Officers (BLO)",
      "Draft & Final Electoral Roll w.r.t. 01.01.2025 and Supplement-2 w.r.t. 01.04.2025",
      "Search in Electoral Roll",
      "Form 9, 10, 11, 11A, 11B",
      "List Of Claims & Objections in SSR-2025",
      "Monthly list of Additions, Modifications & Deletions",
    ],
  },
  {
    title: "VOTER INFORMATION",
    path: "voter-information",
    links: [
      "National Voters Day",
      "Electors Registration (04-Tirhut Graduate Constituency)",
      "GC - Tirhut Electoral Roll (Final Roll W.R.T. 01.11.2024)",
      "TC/GC Electoral Search",
      "Claims and Objections (TC & GC)",
      "Register Complaints",
      "Service Voters and Overseas Voters",
      "PwD Voters",
      "SVEEP (Voter’s Education)",
      "Voter Helpline No: 1950",
      "Fact Check",
    ],
  },
  {
    title: "ELECTIONS",
    path: "elections",
    links: [
      "Important Instructions",
      "Status of Ex-Gratia Payments",
      "SEMP/DEMP",
      "Past Elections",
      "Electoral Roll",
      "ERMS",
      "Election Law",
      "Model Code of Conduct",
      "Judicial References",
    ],
  },
  {
    title: "MEDIA/PUBLICATION",
    path: "media-publication",
    links: [
      "Workshop/Events",
      "Media Corner",
      "Statistical Report",
      "Compendium of Instructions",
      "Press Release",
      "Handbooks/ Manuals/ Model Check List",
      "Latest News",
      "Right to Information",
      "Tender",
    ],
  },
  {
    title: "CANDIDATE/POLITICAL PARTIES",
    path: "candidate-parties",
    links: [
      "Political Parties (Guidelines/Instructions)",
      "Candidate Affidavits",
      "Candidate Nominations/ Other forms",
      "List of Political Parties/Election Symbols by ECI",
      "Candidate/Political Parties Expenditure Balance Sheets",
      "List of Disqualified Persons",
    ],
  },
  {
    title: "EVM/VVPAT",
    path: "evm-vvpat",
    links: [
      "List of EVMs after First & Second Randomisation for General Elections 2024",
      "Credibility of EVM",
      "EVM Brochure for Electors",
      "EVM Brochure for Presiding Officers",
      "EVM Brochure for Candidates and Political Parties",
      "FLC OK EVMs for Upcoming Lok Sabha Election 2024",
    ],
  },
  {
    title: "CEO OFFICIALS",
    path: "ceo-officials",
    links: [
      "SPARROW",
      "Budget/Allotments",
      "Organizational Structure",
      "DEO’s Portal",
      "Important Instructions & Letters (CEO Officials)",
      "E-Office",
      "Asset Declarations",
      "Transfers/Postings/Promotions",
      "Contact Us",
    ],
  },
  {
    title: "REFERENCE MATERIAL",
    path: "reference-material",
    links: [
      "Handbook References",
      "Important Maps",
      "Training Materials",
      "Hand Books",
      "e-Books",
      "Question Bank",
      "List of AC’s with Division and District",
      "Format 1-8 (Final Roll)",
      "Form-20 | Form-21E",
      "Polling Station List",
    ],
  },
];

const colors = [
  "bg-teal-400",
  "bg-purple-400",
  "bg-indigo-400",
  "bg-pink-400",
  "bg-orange-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-cyan-400",
]; // rotating colors for cards

const SectionPage = () => {
  const { sectionPath } = useParams();
  const section = sections.find((s) => s.path === sectionPath);

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
          {section.links.map((link, idx) => {
            const color = colors[idx % colors.length];
            return (
              <Link
                key={idx}
                to="#"
                className={`group relative flex flex-col justify-center items-center h-36 p-4 rounded-2xl shadow-md ${color} text-white font-semibold text-lg hover:scale-105 transition-transform border-2 border-white hover:border-gray-200`}
              >
                <p className="text-center">{link}→</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
