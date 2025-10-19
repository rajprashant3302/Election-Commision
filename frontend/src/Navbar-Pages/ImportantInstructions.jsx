import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import { FileText, ChevronDown, ChevronRight } from "lucide-react";

const instructionsData = [
  {
    letterNo: "1488",
    date: "24.04.2025",
    description: "बिहार राज्य से प्रकाशित / प्रसारित होने वाले समाचार पत्र / टेलीविजन की सूची दर सहित।",
  },
  {
    letterNo: "1242",
    date: "04.04.2025",
    description: "बिहार राज्य से प्रकाशित / प्रसारित होने वाले समाचार पत्र / टेलीविजन की सूची दर सहित।",
  },
  {
    letterNo: "979",
    date: "20.03.2025",
    description: "लोकसभा आम निर्वाचन 2024 - समावेशी निर्वाचन भागीदारी हेतु विभिन्न बेस्ट प्रैक्टिस पर आधारित प्रतिवेदन।",
  },
  {
    letterNo: "अ०सं०:बी1-3-05/2024-02 एवं 03",
    date: "06.01.2025",
    description:
      "बिहार विधान परिषद्‌ के उप निर्वाचन, 2025 से संबंधित निर्वाचन कार्यक्रम एवं रिटर्निंग आफिसर/सहायक रिटर्निंग आफिसर से संबंधित भारत निर्वाचन आयोग द्वारा निर्गत अधिसूचना का राजपत्र (गजट) की प्रति।",
  },
  {
    letterNo: "अ०सं०-बी1-3-178_2024-84",
    date: "11.11.2024",
    description: "बिहार विधान परिषद् के तिरहुत स्नातक निर्वाचन क्षेत्र के उप निर्वाचन, 2024 से संबंधित अधिसूचना।",
  },
  {
    letterNo: "6608",
    date: "18.10.2024",
    description:
      "वित्तीय वर्ष 2023-24 हेतु बिहार निर्वाचन सेवा के पदाधिकारियों का Sparrow System के तहत PAR e-filing किये जाने हेतु निर्धारित समय सीमा को विस्तारित किये जाने के संबंध में।",
  },
  {
    letterNo: "6019",
    date: "05.09.2024",
    description:
      "वित्तीय वर्ष 2023-24 हेतु बिहार निर्वाचन सेवा के पदाधिकारियों का Sparrow System के तहत PAR e-filing किये जाने हेतु समय सीमा निर्धारित किये जाने के संबंध में।",
  },
  {
    letterNo: "अ०सं०-100/रा.स.-बिहार/05/2024 (1)",
    date: "14.08.2024",
    description: "राज्य सभा उप निर्वाचन, 2024 - बिहार से संबंधित राजपत्र में प्रकाशित अधिसूचना",
  },
  {
    letterNo: "अ०सं०-100/रा.स.-बिहार/06/2024 (1)",
    date: "14.08.2024",
    description: "राज्य सभा उप निर्वाचन, 2024 - बिहार से संबंधित राजपत्र में प्रकाशित अधिसूचना",
  },
  {
    letterNo: "अ०सं०-100/रा.स.-बिहार/05-06/2024 (2)",
    date: "14.08.2024",
    description: "राज्य सभा उप निर्वाचन, 2024 - बिहार से संबंधित राजपत्र में प्रकाशित अधिसूचना",
  },
  {
    letterNo: "24.04.2024",
    date: "--",
    description: "Notification regarding change in scheduled time of voting",
  },
  {
    letterNo: "1841",
    date: "28.03.2024",
    description: "लोक सभा आम निर्वाचन, 2024 - द्वितीय चरण से संबंधित बिहार राजपत्र में प्रकाशित सुचना",
  },
  {
    letterNo: "4995",
    date: "12.12.2023",
    description:
      "Advertisement Rate list (DAVP) of Television channels/Radio channels/Newspapers/Broadcast",
  },
  {
    letterNo: "1594",
    date: "11.04.2022",
    description: "Notification No-1594-2nd MACP.",
  },
  {
    letterNo: "1593",
    date: "11.04.2022",
    description: "Notification No-1593-1st MACP.",
  },
  {
    letterNo: "1480",
    date: "06.04.2022",
    description: "Notification-65th Batch Sub Election Officers.",
  },
  {
    letterNo: "1454",
    date: "05.04.2022",
    description: "गोपनीय चरित्री उपलब्ध कराने के सम्बन्ध में.",
  },
  {
    letterNo: "--",
    date: "--",
    description: "Revised Rate cards of Television channels/Radio channels/Newspapers/Broadcast.",
  },
  {
    letterNo: "--",
    date: "--",
    description:
      "Notification regarding the electors above the age of 80 years and electors with physical disability.",
  },
];

const ImportantInstructions = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Header */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          Important Instructions and Letters
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Letter No.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Description</th>
                <th className="px-4 py-3 text-center text-sm font-semibold uppercase">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {instructionsData.map((row, index) => (
                <tr key={index} className="hover:bg-purple-50 transition-colors duration-200">
                  <td className="px-4 py-3">{row.letterNo}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.description}</td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-indigo-700 font-semibold hover:underline"
                    >
                      <FileText className="w-5 h-5" />
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {instructionsData.map((row, idx) => {
            const isOpen = openCard === idx;
            return (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-md transition-all">
                {/* Card Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(idx)}
                >
                  <div className="text-gray-800 font-semibold">
                    {row.description.length > 50
                      ? row.description.slice(0, 50) + "..."
                      : row.description}
                  </div>
                  {isOpen ? (
                    <ChevronDown className="text-indigo-600 w-5 h-5" />
                  ) : (
                    <ChevronRight className="text-indigo-600 w-5 h-5" />
                  )}
                </div>

                {/* Card Body */}
                {isOpen && (
                  <div className="mt-3 text-gray-800 flex flex-col gap-2">
                    <div>
                      <span className="font-semibold">Letter No.: </span>
                      {row.letterNo}
                    </div>
                    <div>
                      <span className="font-semibold">Date: </span>
                      {row.date}
                    </div>
                    <div>
                      <span className="font-semibold">Description: </span>
                      {row.description}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-indigo-700 font-semibold hover:underline"
                      >
                        <FileText className="w-5 h-5" /> PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImportantInstructions;
