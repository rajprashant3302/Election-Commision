import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const LatestNews = () => {
    const latest = [
        {
            title: "Reminder - Submission of details in respect of Electoral Bonds - Hon'ble Supreme Court Order dated 2nd November, 2023",
            link: "#",
            date: "Saturday 19 Jul 2025, 9:24 AM"
        },
        {
            title: "Submission of details in respect of Electoral Bonds - Hon'ble Supreme Court Order dated 2nd November, 2023 - Reg",
            link: "#",
            date: "Friday 12 Jul 2025, 8:27 PM"
        },
        {
            title: "राष्ट्रपति निर्वाचन, 2022 के अवसर पर निगमित भारत निर्वाचन आयोग, नई दिल्ली से निर्वाचन कार्यक्रम की अधिसूचना, मतदान का स्थल की अधिसूचना एवं मतदान की अवधि की अधिसूचना सर्वसाधारण की जानकारी के लिए (हिन्दी एवं अंग्रेजी में) पुनः प्रकाशित की जाती है।",
            link: "#",
            date: "Friday 08 Aug 2025, 1:26 PM"
        },
        {
            title: "गोपनीय चरित्र उपलब्ध कराने के सम्बन्ध में",
            link: "#",
            date: "Friday 08 Aug 2025, 12:20 PM"
        },
        {
            title: "The CEC talks about Bihar elections serving as template for coming polls.",
            link: "#",
            date: "Friday 08 Aug 2025, 12:10 PM"
        }
    ];

        return (
            <div className="space-y-2 h-96 overflow-scroll">
                {latest.map((item, index) => (
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

export default LatestNews
