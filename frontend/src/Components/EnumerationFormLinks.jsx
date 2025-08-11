import React from "react";
import {
  FaFileAlt,
  FaDownload,
  FaSearch,
  FaUsers,
  FaListUl,
  FaCalendarAlt,
} from "react-icons/fa";

const links = [
  {
    icon: <FaFileAlt className="text-pink-600 text-xl" />,
    text: `अर्हता तिथि 01.01.2003 के आधार पर प्रकाशित निर्वाचक सूची में सम्मिलित निर्वाचकों की मतदान केंद्रवार विवरणी देखने के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
  {
    icon: <FaDownload className="text-blue-600 text-xl" />,
    text: `विशेष गहन पुनरीक्षण-2025 के तहत पहले से भरा हुआ फॉर्म डाउनलोड करने के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
  {
    icon: <FaSearch className="text-green-600 text-xl" />,
    text: `2003 बिहार मतदाता सूची में अपना नाम खोजने के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
  {
    icon: <FaUsers className="text-purple-600 text-xl" />,
    text: `अपने BLO, ERO एवं DEO के बारे में जानकारी के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
  {
    icon: <FaListUl className="text-indigo-600 text-xl" />,
    text: `परिसीमन आदेश 2008 के पूर्व एवं पश्चात निर्मित विधानसभा एवं जिला का विवरण के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
  {
    icon: <FaCalendarAlt className="text-pink-600 text-xl" />,
    text: `16.07.2025 तक लंबित गणना प्रपत्रों (Pending Enumeration Form) की सूची देखने के लिए`,
    linkText: "यहाँ क्लिक करें",
    href: "#",
  },
];

const EnumerationFormLinks = () => {
  return (
    <div className="w-full sm:max-w-full md:max-w-[65vw] mt-10 bg-white rounded-2xl overflow-hidden border shadow-sm">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-3 text-lg font-semibold flex justify-center items-center space-x-2">
        <span>गणना प्रपत्र (Enumeration Form)</span>
        <span className="text-sm bg-yellow-400 text-red-600 font-bold px-2 py-0.5 rounded-full">NEW</span>
      </div>

      {/* Link List */}
      <div className="divide-y divide-gray-200">
        {links.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 hover:bg-gray-50 transition"
          >
            <div className="pt-1">{item.icon}</div>
            <p className="text-sm md:text-base text-gray-800">
              {item.text}{" "}
              <a
                href={item.href}
                className="text-red-600 font-semibold hover:underline"
              >
                {item.linkText}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnumerationFormLinks;
