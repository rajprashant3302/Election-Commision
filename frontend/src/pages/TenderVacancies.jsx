import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const TenderVacancies = () => {
    const updates = [
  {
    title: "SHORT TERM REQUEST FOR PROPOSAL (RFP) For Selection of an Agency for providing a GPS Based Vehicle Tracking System for the Vidhan Sabha Election 2025 & Other Elections for the State of Bihar,Last Date:-13.10.2025 (03:00 PM) ",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/Tenders/GPSVehicle/Short%20Term%20RFP%20for%20Selection%20of%20an%20Agency%20for%20providing%20GPS%20Based%20Vehicle%20Tracking%20System.pdf",
    date: "Saturday 09 Aug 2025, 9:24 AM"
  },
  {
    title: "Nylon Navy Blue Bag for Presiding Officer to carry Materials,Last Date:-26.09.2025 (05:00 PM)",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/Tenders/Bag/Nylon%20Blue%20Bag%20re-Tender/RFP%20of%20Navy%20Blue%20Bag.pdf",
    date: "Friday 08 Aug 2025, 8:27 PM"
  }
];
return (
  <div className="space-y-2">
    {updates.map((item, index) => (
      <Link to={item.link}
        key={index}
        className="flex items-start gap-3 bg-green-50 p-4 rounded-lg hover:shadow-md cursor-pointer transition"
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

export default TenderVacancies
