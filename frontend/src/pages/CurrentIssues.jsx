import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import React from "react";
import { Link } from 'react-router-dom'

export default function UpdatesList() {
  const updates = [
    {
      title: "SIR Electoral draft Roll",
      link: "https://voters.eci.gov.in/download-eroll?stateCode=S04",
      date: "Saturday 01 Jul 2025, 9:24 AM"
    },
    {
      title: "Notice to Registered Unrecognized Political Parties (RUPPS))",
      link:"#",
      date: "Friday 08 Aug 2025, 8:27 PM"
    },
    {
      title: "Supplement Revision-2 Electoral Roll w.r.t. 01.04.2025",
      link:"#",
      date: "Friday 08 Aug 2025, 1:26 PM"
    },
    {
      title: "Draft & Final Electoral Roll w.r.t. 01.01.2025",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Bye Election Bihar Legislative Council-2024",
      link:"#",
      date: "Friday 08 Aug 2025, 12:10 PM"
    },
    {
      title: "Draft & Final Electoral Roll w.r.t. 01.01.2025",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "ECI Microsite (Lok Sabha General Elections-2024)",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Integrated Election Expenditure Monitoring System",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Internal Complaint Committee (Prevention, Prohibition and Redressal Rules, 2013)",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Registered Unrecognized Political Parties (RUPPs)",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Publication of criminal antecedents by contesting candidates and political parties reg.",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Notification of Result (BLAGE-2020)",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    },
    {
      title: "Election Planner",
      link:"#",
      date: "Friday 08 Aug 2025, 12:20 PM"
    }
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
