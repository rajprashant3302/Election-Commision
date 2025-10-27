jsx
import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import ImageBar from "../Components/Imagebar";
import { FileText, ClipboardList, BarChart3, PieChart, FileSpreadsheet } from "lucide-react";

const politicalCards = [
  {
    title: "POLITICAL PARTY REGISTRATION",
    description:
      "Registration of new political parties under section 29 A of the Representation of the People Act, 1951.",
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "PPRTMS",
    description:
      "Online Political Parties Registration Tracking Management System.",
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
  {
    title: "POLITICAL PARTIES & ELECTION SYMBOL",
    description:
      "Allotment of reserved symbol under para 10, 10A, para 10B and Misc. Orders reg. Election Symbols and Symbol orders.",
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "CONSTITUTIONS OF POLITICAL PARTIES",
    description:
      "See the Constitutions of Recognized National and State Political Parties.",
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
  {
    title: "ORGANIZATIONAL ELECTION",
    description:
      "Organizational Election of Recognized National and State Political Parties.",
    bg: "bg-blue-100",
    textColor: "text-[#0b376d]",
  },
  {
    title: "GUIDELINES FOR POLITICAL PARTIES",
    description:
      "Guidelines on transparency and accountability in party funds and election expenditure matter.",
    bg: "bg-pink-100",
    textColor: "text-[#d03ce7]",
  },
];

const reportsData = [
  {
    title: "ELECTORAL BONDS",
    description: "Disclosure of Electoral Bonds 2024",
    icon: <FileText size={30} className="text-pink-600" />,
  },
  {
    title: "EXPENDITURE REPORTS",
    description:
      "Election Expenditure Statements of Recognised National and State Political Parties for Legislative Assembly Elections and Lok Sabha Elections",
    icon: <BarChart3 size={30} className="text-pink-600" />,
  },
  {
    title: "CONTRIBUTION REPORTS",
    description:
      "Annual Contribution Reports of Recognised National and State Political Parties",
    icon: <ClipboardList size={30} className="text-pink-600" />,
  },
  {
    title: "ANNUAL AUDIT REPORTS",
    description:
      "Annual Audit Reports of Recognised National and State Political Parties",
    icon: <FileSpreadsheet size={30} className="text-pink-600" />,
  },
  {
    title: "ELECTORAL TRUSTS REPORTS",
    description:
      "Annual Contribution Reports of Electoral Trusts",
    icon: <PieChart size={30} className="text-pink-600" />,
  },
];

const PoliticalPartyHome = () => {
  return (
    <div className="bg-[#f5f9fc] min-h-screen flex flex-col">
      {/* Navbar */}
      <Nav />

      {/* Header Section */}
      <div className="mt-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#0b376d] mb-2">
          Political Parties
        </h1>
        <div className="flex justify-center mt-2">
          <div className="flex border border-[#0b376d] rounded-lg overflow-hidden">
            <button className="px-4 py-2 bg-[#0b376d] text-white font-semibold">
              Political Parties
            </button>
            <Link
              to="/candidate-politicalparty"
              className="px-4 py-2 bg-white text-[#0b376d] font-semibold hover:bg-gray-100"
            >
              Candidates
            </Link>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20 pb-12">
        {politicalCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${card.textColor} tracking-wide`}
            >
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Reports Section */}
      <div className="bg-gradient-to-r from-[#001f4d] via-[#3a0ca3] to-[#7209b7] py-16 px-6 md:px-12 lg:px-20 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {reportsData.map((report, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center mb-4 gap-3">
                {report.icon}
                <h3 className="text-lg font-bold text-pink-400 uppercase">
                  {report.title}
                </h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                {report.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* New Grid Section from Image */}
      <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
            <h2 className="text-2xl font-bold text-black mb-2">List of Political Parties</h2>
            <p className="text-gray-600 text-sm">Find all political parties registered with ECI</p>
          </div>

          {/* Second Card */}
          <div className="border-b md:border-b-0 pb-6 md:pb-0 md:pl-6">
            <h2 className="text-2xl font-bold text-black mb-2">Recognition & De-recognition of parties</h2>
            <p className="text-gray-600 text-sm">Find list of all recognition and De-recognition parties</p>
          </div>

          {/* Third Card */}
          <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6 pt-6 md:pt-0">
            <h2 className="text-2xl font-bold text-black mb-2">Dispute, Merger etc.</h2>
            <p className="text-gray-600 text-sm">Press release about disputes and Merger</p>
          </div>

          {/* Fourth Card */}
          <div className="pt-6 md:pt-0 md:pl-6">
            <h2 className="text-2xl font-bold text-black mb-2">Miscellaneous, Orders, Notices etc.</h2>
            <p className="text-gray-600 text-sm">ECI orders, instructions and Notices</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ImageBar />
      <Footer />
    </div>
  );
};

export default PoliticalPartyHome;
