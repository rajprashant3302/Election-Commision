import React, { useState } from "react";
import { ChevronRight, ChevronDown, Link2 } from "lucide-react";
import bgImage from "../assets/bg.jpg";

const sections = [
  {
    heading: "Contact Details",
    items: [
      {
        title: "List of STD Codes",
        link: "https://ceoelection.bihar.gov.in/pdf/STD_codes_List.pdf",
      },
      {
        title:
          "District Contact Centre (DCC) एवं State Contact Centre (SCC) की मार्गदर्शिका",
        link: "https://ceoelection.bihar.gov.in/pdf/scc.pdf", 
      },
    ],
  },
  {
    heading: "Call 1950",
    description: `Citizens can call the Voter Helpline, the number is 1950. Now any citizen from any part of the country can call on the toll-free in English or Hindi with any query or complaint at any time of the day. Callers can enquire on subjects such as elections, voting dates, EPIC, electoral roll, online registration and lodge a complaint by simply dialling into the toll-free no. Not only this, executives also make outbound calls for educating the electors and spreading voter awareness.`,
  },
  {
    heading: "SMS to 1950",
    description: `SMS <space> <EPIC No.> to 1950 (EPIC stands for Electors Photo Identity Card, also commonly known as Voter ID card). Example - If your EPIC is 12345678 then send SMS: ECI 12345678 to 1950.`,
  },
  {
    heading: "Visit Voters' Service Portal - voters.eci.gov.in",
    description: `The portal was developed with an aim to provide a single-window service to electors. Through the Voters' Service Portal, a user can access various services such as the electoral roll, apply for voter ID card (EPIC), make online corrections, view polling booth and constituency details, and get Booth Level Officer or ERO contacts. The portal works on both desktop and mobile, supporting searches by details or EPIC number.`,
    link: "https://voters.eci.gov.in",
  },
];

const Helpline1950 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Header Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          Helpline – 1950
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-6">
          Voter Helpline Information
        </h2>

        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
          {sections.map((section, idx) => (
            <div key={idx} className="py-4">
              {/* Heading */}
              <button
                onClick={() => toggleSection(idx)}
                className="flex items-center justify-between w-full text-left px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-md transition-all"
              >
                <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-indigo-700">
                  {openIndex === idx ? (
                    <ChevronDown className="text-indigo-600 transition-transform" />
                  ) : (
                    <ChevronRight className="text-indigo-600 transition-transform" />
                  )}
                  {section.heading}
                </h3>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                {/* If there are clickable items */}
                {section.items && (
                  <ul className="pl-8 space-y-2">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-pink-50 hover:to-purple-50 rounded-md px-4 py-2 transition-all shadow-sm"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-800 font-medium hover:text-indigo-700"
                        >
                          <span className="text-indigo-600">❖</span>
                          {item.title}
                        </a>
                        <Link2 className="w-5 h-5 text-indigo-600" />
                      </li>
                    ))}
                  </ul>
                )}

                {/* If there’s a description paragraph */}
                {section.description && (
                  <p className="text-gray-700 leading-relaxed px-6 mt-2">
                    {section.description}
                  </p>
                )}

                {/* If there’s a portal link */}
                {section.link && (
                  <div className="px-6 mt-3">
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 font-semibold underline hover:text-indigo-900 flex items-center gap-1"
                    >
                      Visit Portal <Link2 className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpline1950;
