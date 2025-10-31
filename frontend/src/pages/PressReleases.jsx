import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'
const PressReleases = () => {
  const updates = [
  {
    title: "Press Release Dated:- 24-10-2025",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/PressRelease2025/OCT/24-10-2025%20Press%20Note.pdf",
    date: "Saturday 19 Jul 2025, 9:24 AM"
  },
  {
    title: "Press Release Dated:- 24-10-2025",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/PressRelease2025/OCT/24.10.2025%20Press%20Note%20Seizure%20Report.pdf",
    date: "Friday 12 Jul 2025, 8:27 PM"
  },
  {
    title: "Press Release Dated:- 23-10-2025",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/PressRelease2025/OCT/23-10-2025%20Press%20Note.pdf",
    date: "Friday 08 Aug 2025, 1:26 PM"
  },
  {
    title: "Press Release Dated:- 22-10-2025",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/PressRelease2025/OCT/22-10-2025%20Press%20Note%20Seizure%20Report.pdf",
    date: "Friday 08 Aug 2025, 12:20 PM"
  },
  {
    title: "Press Release Dated:- 21-10-2025",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/PressRelease2025/OCT/21-10-2025%20Press%20Note.pdf",
    date: "Friday 08 Aug 2025, 12:10 PM"
  }
];
return (
  <div className="space-y-2 h-96 overflow-scroll">
    {updates.map((item, index) => (
      <Link to={item.link}
        key={index}
        className="flex items-start gap-3 bg-lime-100 p-4 rounded-lg hover:shadow-md cursor-pointer transition"
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

export default PressReleases
