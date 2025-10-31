import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const FAQs = () => {
    const updates = [
  {
    title: "List of Star Campaigners (196-Tarari, 203-Ramgarh...)",
    link:"#",
    date: "Saturday 09 Aug 2025, 9:24 AM"
  },
  {
    title: "List of Star Campaigners (60-Rupauli AC)",
    link:"#",
    date: "Friday 08 Aug 2025, 8:27 PM"
  },
  {
    title: "List of Star Campaigners (Updated till 14/05/2024)",
    link:"#",
    date: "Friday 08 Aug 2025, 1:26 PM"
  },
  {
    title: "Gradation List of Bihar Election Service-2020",
    link:"#",
    date: "Friday 08 Aug 2025, 12:20 PM"
  },
  {
    title: "List of BLA",
    link:"#",
    date: "Friday 08 Aug 2025, 12:10 PM"
  }
];
return (
  <div className="space-y-2 h-96 overflow-scroll">
    {updates.map((item, index) => (
      <Link to={item.link}
        key={index}
        className="flex items-start gap-3 bg-red-50 p-4 rounded-lg hover:shadow-md cursor-pointer transition"
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
    {/* View More Button
    <div className="flex justify-end">
      <button className="text-blue-600 hover:bg-[#003366] hover:text-white px-3 py-2 rounded-lg flex items-center gap-1">
        View More →
      </button>
    </div> */}
  </div>);
}

export default FAQs
