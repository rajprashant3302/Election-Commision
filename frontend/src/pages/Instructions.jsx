import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Instructions = () => {
    const updates = [
  {
    title: "Gazette of the first phase Notification of the Bihar Assembly general election 2025.",
    link: "https://ceoelection.bihar.gov.in/PDF/Year_2025/ImportantInstructionsAndLetters/Gazette%20of%20the%20first%20phase%20Notification%20of%20the%20Bihar%20Assembly%20general%20election%202025.pdf",
    date: "Saturday 09 Aug 2025, 9:24 AM"
  },
  {
    title: "Notification regarding change in scheduled time of voting",
    link: "https://ceoelection.bihar.gov.in/pdf/NotificationForChangeOfPollTime.pdf",
    date: "Friday 08 Aug 2025, 8:27 PM"
  },
  {
    title: "Advertisement Rate list (DAVP) of Television channels/Radio channels/Newspapers/Broadcast",
    link: "https://ceoelection.bihar.gov.in/pdf/4995-Advertisement%20Rate.pdf",
    date: "Friday 08 Aug 2025, 1:26 PM"
  },
  {
    title: "Notification No-1594-2nd MACP",
    link: "https://ceoelection.bihar.gov.in/pdf/1594-2ndMACP.pdf",
    date: "Friday 08 Aug 2025, 12:20 PM"
  },
  {
    title: "Notification No-1593-1st MACP",
    link: "https://ceoelection.bihar.gov.in/pdf/1593-1stMACP.pdf",
    date: "Friday 08 Aug 2025, 12:10 PM"
  }
];
return (
  <div className="space-y-2 h-96 overflow-scroll">
    {updates.map((item, index) => (
      <Link to={item.link}
        key={index}
        className="flex items-start gap-3 bg-orange-100 p-4 rounded-lg hover:shadow-md cursor-pointer transition"
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
  </div>);
}

export default Instructions
