import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const TenderVacancies = () => {
    const updates = [
  {
    title: "मुख्य निर्वाचन पदाधिकारी, बिहार का कार्यालय, 7, सरदार पटेल मार्ग (मेलस रोड), पटना-800015 के गोदाम में रखित निर्वाचन से संबंधित रद्दी / पुरानी / अप्रचलित पुस्तकों का निस्तारीकरण, Last Date:- 12.08.2025 (11:00 AM) ",
    link:"#",
    date: "Saturday 09 Aug 2025, 9:24 AM"
  },
  {
    title: "Supply, Installation of Office Appliances on Rental Basis for Office of the Chief Electoral Officer, Closing Date of online bids:- 12.06.2025 (02:00 PM)",
    link: "#",
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
