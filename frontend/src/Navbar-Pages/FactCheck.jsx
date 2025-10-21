import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import { FileText, ChevronDown, ChevronRight } from "lucide-react";

const factCheckData = [
  {
    sl: 1,
    date: "29/10/2020",
    subject: `"ईवीएम में राजद के चिन्ह के सामने नहीं था बटन" के शीर्षक से प्रकाशित समाचार के सम्बन्ध में`,
    report: `मतदान की तिथि 28.10.2020 को 09:50 बजे प्रातः दूरभाष पर शिकायत प्राप्त हुई कि मतदान केंद्र सं० 231, सरकारी सामुदायिक भवन महादेवपुर (पश्चिम भाग) में बैलेटिंग यूनिट में अभ्यर्थी सं० एक के सामने के बटन का क्लिप नहीं है। शिकायत पर तुरंत संज्ञान लेते हुए पूर्वाहन 10:15 बजे तक उक्त मतदान केंद्र के BU,CU/VVPAT को बदल दिया गया।`,
    link: "#",
  },
  {
    sl: 2,
    date: "11/10/2020",
    subject: `दिनांक 11 अक्टूबर, 2020 को दैनिक हिंदुस्तान समाचार पत्र मे बिहार भाजपा के सोशल मीडिया पोस्ट की जांच होगी के शीर्षक से प्रकाशित समाचार के खंडन के संबंध मे`,
    report: `दैनिक हिंदुस्तान समाचार पत्र मे बिहार भाजपा के सोशल मीडिया पोस्ट की जांच होगी के शीर्षक से प्रकाशित समाचार के खंडन के संबंध मे।`,
    link: "#",
  },
  {
    sl: 3,
    date: "07/10/2020",
    subject: `कल दिनांक 08 अक्टूबर, 2020 को निर्वाची पदाधिकारियों के कार्यालयों में नामनिर्देशन पत्र जमा किये जायेंगे`,
    report: `सोशल मीडिया पर चल रहे कुछ भ्रामक ख़बरों के खंडन करते हुए अपर मुख्य निर्वाचन पदाधिकारी श्री संजय कुमार सिंह ने स्पष्ट किया कि 08 अक्टूबर को निर्वाची पदाधिकारियों द्वारा निर्दिष्ट कार्यालयों में विधान सभा आम चुनाव, 2020 हेतु नामनिर्देशन पत्र प्राप्त किये जायेंगे।`,
    link: "#",
  },
];

const FactCheckResponsive = () => {
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
          Fact Check
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Sl.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Detailed Report</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Link/Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {factCheckData.map((row) => (
                <tr key={row.sl} className="hover:bg-purple-50 transition-colors duration-200">
                  <td className="px-4 py-3">{row.sl}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.subject}</td>
                  <td className="px-4 py-3">{row.report}</td>
                  <td className="px-4 py-3">
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-700 font-semibold hover:underline"
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
          {factCheckData.map((row, idx) => {
            const isOpen = openCard === idx;
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-md transition-all"
              >
                {/* Card Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(idx)}
                >
                  <div className="text-gray-800 font-semibold">
                    {row.subject.length > 60
                      ? row.subject.slice(0, 60) + "..."
                      : row.subject}
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
                      <span className="font-semibold">Sl.: </span>{row.sl}
                    </div>
                    <div>
                      <span className="font-semibold">Date: </span>{row.date}
                    </div>
                    <div>
                      <span className="font-semibold">Subject: </span>{row.subject}
                    </div>
                    <div>
                      <span className="font-semibold">Detailed Report: </span>{row.report}
                    </div>
                    <div>
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
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

export default FactCheckResponsive;
