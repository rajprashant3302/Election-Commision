import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import bgImage from "../assets/bg.jpg";


const affidavitSections = [
  {
    heading:
      "Candidate Affidavits (Assembly/Parliamentary Elections/Bye Elections May-2019 onwards)",
    items: ["CANDIDATE AFFIDAVIT MANAGEMENT"],
  },
  {
    heading: "Teacher's and Graduate's Constituency Election-2023",
    items: ["Teacher's and Graduate's Constituency Election-2023"],
  },
  {
    heading: "Biennial Election to the Bihar Legislative Council-2022",
    items: ["Biennial Election to the Bihar Legislative Council-2022"],
  },
  {
    heading: "ASSEMBLY BYE ELECTION 2021",
    items: ["ASSEMBLY BYE ELECTION 2021"],
  },
  {
    heading: "LEGISLATIVE COUNCIL BYE ELECTION 2021",
    items: ["LEGISLATIVE COUNCIL BYE ELECTION 2021"],
  },
  {
    heading: "Bihar Assembly General Election, 2020",
    items: ["Bihar Assembly General Election, 2020"],
  },
  {
    heading: "Parliamentary Constituency Bye-Election 2020",
    items: ["Parliamentary Constituency Bye-Election 2020"],
  },
  {
    heading: "RAJYA SABHA BYE-ELECTION 2020",
    items: ["RAJYA SABHA BYE-ELECTION 2020"],
  },
  {
    heading: "Lok Sabha General Election-2019",
    items: ["Lok Sabha General Election-2019"],
  },
  {
    heading: "Bihar Legislative Council Bye election 2019.",
    items: ["Bihar Legislative Council Bye election 2019."],
  },
  {
    heading: "Rajya Sabha Bye-Election-2019.",
    items: ["Rajya Sabha Bye-Election-2019."],
  },
  {
    heading: "Bye-Election (PC & State Legislative Assembly-2019)",
    items: ["Bye-Election (PC & State Legislative Assembly-2019)"],
  },
  {
    heading: "Bihar Legislative Council(Graduate & Teacher Constituency 2019)",
    items: ["Bihar Legislative Council(Graduate & Teacher Constituency 2019)"],
  },
  {
    heading: "Bihar Legislative Council(Graduate & Teacher Constituency 2017)",
    items: ["Bihar Legislative Council(Graduate & Teacher Constituency 2017)"],
  },
  {
    heading: "Bihar Assembly Election, 2015",
    items: ["Bihar Assembly Election, 2015"],
  },
  {
    heading: "Local Authorities Biennial Election 2015",
    items: ["Local Authorities Biennial Election 2015"],
  },
  {
    heading: "Lok Sabha General Election-2014",
    items: ["Lok Sabha General Election-2014"],
  },
  {
    heading: "Assembly Bye-Election - 2014",
    items: ["Assembly Bye-Election - 2014"],
  },
  {
    heading: "Teacher Constituency and Graduates Constituency(TC/GC) 2014",
    items: [
      "Teacher Constituency and Graduates Constituency(TC/GC) 2014",
    ],
  },
];

const PastElections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Header Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          Past Elections
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
          Past Elections
        </h2>

        {/* Table-like Structure */}
        <div className="bg-white rounded-xl shadow-lg p-6 divide-y divide-gray-200">
          {affidavitSections.map((section, idx) => (
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

export default PastElections;
