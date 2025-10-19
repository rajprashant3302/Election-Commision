import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import bgImage from "../assets/bg.jpg";

// Data Structure for All Sections
const affidavitSections = [
  {
    heading:
      "Candidate Affidavits (Assembly/Parliamentary Elections/Bye Elections May-2019 onwards)",
    items: ["CANDIDATE AFFIDAVIT MANAGEMENT"],
  },
  {
    heading: "Assembly Election",
    items: [
      "Assembly Bye Election-2022 (91-Bochahan- A.C.)",
      "Assembly Bye Election 2021.",
      "Assembly Election 2020.",
      "Assembly Election 2015.",
      "Assembly Election 2010.",
      "Assembly Election Oct-Nov 2005.",
      "Assembly Election Jan-Feb 2005.",
    ],
  },
  {
    heading: "Lok Sabha Election",
    items: [
      "Lok Sabha Election 2024.",
      "Lok Sabha Election 2019.",
      "Lok Sabha Election 2014.",
      "Lok Sabha Election 2009.",
      "Lok Sabha Election 2004.",
    ],
  },
  {
    heading: "Council Elections",
    items: [
      "बिहार विधान परिषद्‌ के उप निर्वाचन, 2025",
      "Bye Election Bihar Legislative Council-2024",
      "बिहार विधान परिषद के द्विवार्षिक निर्वाचन 2024",
      "Biennial/Bye Election Bihar Legislative Council-2023.",
      "Bihar Legislative Council Biennial-Election 2022",
      "Council Election 2022 (Local Authority)",
      "Council Election 2019(Graduate & Teacher Cons.).",
      "बिहार विधान परिषद के द्विवार्षिक निर्वाचन 2018",
      "Council Election 2017(Graduate & Teacher Cons.).",
      "Council Elections 2016.",
      "बिहार विधान परिषद के द्विवार्षिक निर्वाचन 2014",
      "Council Elections 2014.",
      "Council Elections 2012.",
      "Council Elections 2011",
      "Council Elections 2010",
      "Council Elections 2009",
      "Council Elections 2008",
      "Council Elections 2006",
      "Council Elections 2004",
    ],
  },
  {
    heading: "Rajya Sabha Elections",
    items: [
      "Rajya Sabha Elections 2024",
      "Rajya Sabha Elections 2022.",
      "Rajya Sabha Elections 2020.",
      "Rajya Sabha Elections 2018.",
      "Rajya Sabha Elections 2016.",
      "Rajya Sabha Elections 2014.",
      "Rajya Sabha Elections 2010.",
      "Rajya Sabha Elections 2008.",
      "Rajya Sabha Elections 2006.",
      "Rajya Sabha Elections 2004.",
    ],
  },
  {
    heading: "Assembly Bye-Election",
    items: [
      "Assembly Bye - Election(October-November) 2024",
      "Assembly Bye - Election(October) 2022.",
      "Assembly Bye - Election(March) 2022",
      "Assembly Bye - Election(October) 2021",
      "212 & 237 Assembly Bye-Election 2019.",
      "50-Jokihat Assembly Bye Election 2018",
      "205-Bhabhua Assembly Bye Election 2018",
      "216-Jehanabad Assembly Bye Election 2018",
      "31-Harlakhi Assembly Bye-Election 2016",
      "Assembly Bye-Election July-Aug-2014",
      "Assembly Bye-Election March-May-2014.",
      "131-Kalyanpur Assembly Bye-Election 2013.",
      "40-Laukaha Assembly Bye-Election 2011.",
      "109-Daraunda Assembly Bye-Election 2011.",
      "Assembly Bye-Election 2009.",
    ],
  },
  {
    heading: "Lok Sabha Bye-Election",
    items: [
      "01-Valmikinagar Lok Sabha Bye - Election 2020.",
      "Lok Sabha Bye - Election(October) 2019.",
      "09-Araria Lok Sabha Bye - Election 2018.",
      "19-Maharanjganj Lok Sabha bye - Election 2013.",
      "27-Banka Lok Sabha bye - Election 2010.",
      "31-Nalanda Lok Sabha bye - Election 2006.",
      "27-Bhagalpur Lok Sabha bye - Election 2006.",
    ],
  },
  {
    heading: "Rajya Sabha Bye-Election",
    items: [
      "Rajya Sabha Bye-Election,2024.",
      "Rajya Sabha Bye-Election-2022.",
      "Rajya Sabha Bye-Election,2020.",
      "Rajya Sabha Bye-Election,2019.",
      "Council of States Bye Election 2019.",
      "Rajya Sabha Bye-Election,2014.",
      "Rajya Sabha Bye-Election,2013.",
      "Rajya Sabha Bye-Election 2012.",
    ],
  },
  {
    heading: "Council Bye-Election",
    items: [
      "Bihar Legislative Council Bye- Election Sep-2021.",
      "Bihar Legislative Council Bye- Election 2021.",
      "बिहार विधान परिषद के द्विवार्षिक निर्वाचन 2020.",
      "Council Bye Election 2019.",
      "Council Bye Election by Assembly Members 2016.",
      "Bye-Election to the Bihar Legislative Council by MLA-2014.",
      "Bye-Election Bihar Legislative Council for Siwan Local Authorities Counstituency-2014.",
      "Bihar Legislative Council Bye- Election 2013.",
      "Council Bye-Election 2009.",
    ],
  },
];

const CandidateAffidavits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Header Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          Candidate Affidavits
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
          Candidate Affidavit Management Portal
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

export default CandidateAffidavits;
