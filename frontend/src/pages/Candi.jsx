import React from "react";
import { Link } from "react-router-dom";
import ImageBar from "../Components/Imagebar";
import {
  FileText,
  Info,
  FileSignature,
  ClipboardList,
  BookOpen,
  FileBadge,
} from "lucide-react";

const candidateCards = [
  {
    title: "CANDIDATE NOMINATION & OTHER FORMS",
    description:
      "List of Forms for Nomination etc. in Elections for use by Candidates (Except Legislative Assembly and Legislative Council Elections of Jammu & Kashmir).",
    icon: FileText,
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "INFORMATION RELATED WITH NOMINATION",
    description:
      "Qualifications & Disqualifications for contesting elections to Parliament and State Legislature (except J & K), and required documents at the time of filing nomination papers.",
    icon: Info,
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
  {
    title: "ONLINE NOMINATION & AFFIDAVIT",
    description:
      "Candidates/political parties can apply for online nomination, election permission, and e-affidavit with reference ID to track the application status.",
    icon: FileSignature,
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "NOMINATION STATUS & PERMISSIONS",
    description:
      "Track the nomination and permission application status using the Candidate App. Receive periodic updates via notifications.",
    icon: ClipboardList,
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
  {
    title: "HANDBOOK FOR CANDIDATE",
    description:
      "Contains information about qualifications, disqualifications, nominations, allotment of symbols, Model Code of Conduct, and other rules.",
    icon: BookOpen,
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "AFFIDAVIT PORTAL",
    description:
      "Candidate Affidavit Portal allows citizens to view the complete list of candidate nominations & affidavits who have applied for elections.",
    icon: FileBadge,
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
];

const Candidates = () => {
  return (
    <div className="bg-[#f5f9fc] min-h-screen flex flex-col">
      {/* Navbar */}
      <Nav />

      {/* Header Section */}
      <div className="mt-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#0b376d] mb-2">
          Candidates
        </h1>
        <div className="flex justify-center mt-2">
          <div className="flex border border-[#0b376d] rounded-lg overflow-hidden">
            <Link
              to="/political-parties"
              className="px-4 py-2 bg-white text-[#0b376d] font-semibold hover:bg-gray-100"
            >
              Political Parties
            </Link>
            <button className="px-4 py-2 bg-[#0b376d] text-white font-semibold">
              Candidates
            </button>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20 pb-12">
        {candidateCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`${card.bg} p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className={`${card.textColor} w-7 h-7`} />
                <h3
                  className={`text-lg font-bold ${card.textColor} tracking-wide`}
                >
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <ImageBar />
      <Footer />
    </div>
  );
};

export default Candidates;
