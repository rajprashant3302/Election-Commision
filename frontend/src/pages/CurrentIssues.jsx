import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import React from "react";
import { Link } from 'react-router-dom'

export default function UpdatesList() {
  const updates = [
    {
      title: "Press release & News clipping related to Randomisation for Bihar Assembly Election 2025",
      link: "/evm-randomisation-list",
      date: "Saturday 01 Jul 2025, 9:24 AM"
    },
    {
      title: "SIR Final Electoral Roll w.r.t. 01.07.2025",
      link: "https://voters.eci.gov.in/download-eroll?stateCode=S04",
      date: "Friday 08 Aug 2025, 8:27 PM"
    },
    {
      title: "RUPPs delisted Commission Order 19-09-2025",
      link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/ImportantInstructionsAndLetters/Commissions%20Delisting%20Order%2019-09-2025.pdf",
      date: "Friday 08 Aug 2025, 1:26 PM"
    },
    {
      title: "Notice to Registered Unrecognized Political Parties (RUPPS)",
      link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/ImportantInstructionsAndLetters/Notice%20to%20Registered%20Unrecognized%20Political%20Parties%20(RUPPS).pdf",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Supplement Revision-2 Electoral Roll w.r.t. 01.04.2025",
      link: "https://voters.eci.gov.in/download-eroll?stateCode=S04",
      date: "Friday 08 Aug 2025, 12:10 PM"
    },
    // {
    //   title: "ECI Microsite (Lok Sabha General Elections-2024)",
    //   link: "/election-management",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Integrated Election Expenditure Monitoring System",
    //   link: "/sections/nomination",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Internal Complaint Committee (Prevention, Prohibition and Redressal Rules, 2013)",
    //   link: "/sections/eci/compendium",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Registered Unrecognized Political Parties (RUPPs)",
    //   link: "/sections/newpartyregistration",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Publication of criminal antecedents by contesting candidates and political parties reg.",
    //   link: "/sections/affidavit",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Notification of Result (BLAGE-2020)",
    //   link: "/past-elections",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // },
    // {
    //   title: "Election Planner",
    //   link: "/semp-demp",
    //   date: "Friday 08 Aug 2025, 12:20 PM"
    // }
  ];

  return (
    <div className="space-y-2 h-96 overflow-scroll">
      {updates.map((item, index) => (
        <Link to={item.link}
          key={index}
          className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg hover:shadow-md cursor-pointer transition"
        >
          {/* Icon */}
          <FaCheckCircle className="text-yellow-500 text-xl mt-1" />

          {/* Text */}
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-medium text-lg text-ellipsis line-clamp-2">{item.title}</h3>
            <div className="flex items-start gap-2 text-sm text-gray-500 mt-1">
              <FaRegClock />
              <span>{item.date}</span>
            </div>
          </div>
        </Link>
      ))}

      {/* View More Button */}
      <div className="flex justify-end">
        <button className="text-blue-600 hover:bg-[#003366] hover:text-white px-3 py-2 rounded-lg flex items-center gap-1">
          View More →
        </button>
      </div>
    </div>
  );
}
