import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import { Filter, ChevronDown, ChevronRight } from "lucide-react";

const exGratiaData = [
  {
    district: "पूर्णिया",
    type: "लोकसभा आम निर्वाचन 2024",
    name: "स्व० दयानंद पंडित",
    details:
      "निर्वाचन कर्त्तव्य के दौरान श्री दयानंद पंडित, गृहरक्षक 8750, पूर्णिया, के मृत्योपरान्त उनकी पत्नी श्रीमती अन्नपूर्णा देवी को ₹15,00,000/- की राशि का भुगतान।",
    status: "स्वीकृत",
    order: "स्वीकृत्यादेश संख्या-1272 दिनांक-05.04.2025",
  },
  {
    district: "रोहतास (सासाराम)",
    type: "लोकसभा आम निर्वाचन 2024",
    name: "स्व० प्रदीप कुमार",
    details:
      "निर्वाचन कर्त्तव्य के दौरान स्व० प्रदीप कुमार, दफ्तरी, इंडियन बैंक बंजारी, के मृत्योपरान्त उनकी पत्नी श्रीमती चम्पा देवी को ₹15,00,000/- की राशि का भुगतान।",
    status: "स्वीकृत",
    order: "स्वीकृत्यादेश संख्या-541 दिनांक-19.02.2025",
  },
  {
    district: "सारण",
    type: "लोकसभा आम निर्वाचन 2024",
    name: "श्री मानस राय",
    details:
      "निर्वाचन कर्त्तव्य के दौरान दुर्घटनाग्रस्त होने के कारण श्री मानस राय को चिकित्सा व्यय ₹73,455/- का भुगतान।",
    status: "स्वीकृत",
    order: "स्वीकृत्यादेश संख्या-604 दिनांक-20.02.2025",
  },
  {
    district: "भोजपुर",
    type: "लोकसभा आम निर्वाचन 2024",
    name: "स्व० रविन्द्र भूषण प्रसाद श्रीवास्तव",
    details:
      "निर्वाचन कर्त्तव्य के दौरान स्व० रविन्द्र भूषण प्रसाद श्रीवास्तव के मृत्योपरान्त उनके भाई श्री संजीव कुमार को ₹15,00,000/- की राशि का भुगतान।",
    status: "स्वीकृत",
    order: "स्वीकृत्यादेश संख्या-541 दिनांक-19.02.2025",
  },
  {
    district: "पटना",
    type: "लोकसभा आम निर्वाचन 2024",
    name: "स्व० सुनील कुमार",
    details:
      "निर्वाचन कर्त्तव्य के दौरान स्व० सुनील कुमार, उच्च वर्गीय लिपिक, ESI निगम, पटना, के मृत्योपरान्त उनकी पत्नी श्रीमती सुनीता देवी को ₹15,00,000/- की राशि का भुगतान।",
    status: "स्वीकृत",
    order: "स्वीकृत्यादेश संख्या-7461 दिनांक-22.11.2024",
  },
];

const ExGratiaStatusPage = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [openCard, setOpenCard] = useState(null);

  const districts = ["All", ...new Set(exGratiaData.map((d) => d.district))];
  const filteredData =
    selectedDistrict === "All"
      ? exGratiaData
      : exGratiaData.filter((d) => d.district === selectedDistrict);

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
          Status of Ex-Gratia Payment
        </h1>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="text-indigo-600 w-5 h-5" />
          <label className="font-semibold text-gray-800">Filter by District:</label>
        </div>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          {districts.map((district, idx) => (
            <option key={idx} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Table */}
      <div className="max-w-6xl mx-auto px-4 py-10 hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">जिला</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">निर्वाचन का प्रकार</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">मृतक/घायल का नाम</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">घटना का विवरण</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">दावे की स्थिति</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                विभाग स्तर से निर्गत स्वीकृत्यादेश
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                <td className="px-4 py-3">{row.district}</td>
                <td className="px-4 py-3">{row.type}</td>
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.details}</td>
                <td className="px-4 py-3 font-semibold text-green-700">{row.status}</td>
                <td className="px-4 py-3">{row.order}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden max-w-2xl mx-auto px-4 py-8 space-y-4">
        {filteredData.map((row, idx) => {
          const isOpen = openCard === idx;
          return (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCard(idx)}
              >
                <div>
                  <p className="font-semibold text-gray-800">{row.district}</p>
                  <p className="text-sm text-gray-600">{row.name}</p>
                  <p className="text-sm text-gray-600 truncate">
                    {row.details.slice(0, 45)}...
                  </p>
                  <p className="text-sm font-medium text-green-700">{row.status}</p>
                </div>
                {isOpen ? (
                  <ChevronDown className="text-indigo-600 w-5 h-5" />
                ) : (
                  <ChevronRight className="text-indigo-600 w-5 h-5" />
                )}
              </div>

              {isOpen && (
                <div className="mt-3 text-gray-800 text-sm flex flex-col gap-1">
                  <p><span className="font-semibold">निर्वाचन प्रकार:</span> {row.type}</p>
                  <p><span className="font-semibold">घटना:</span> {row.details}</p>
                  <p><span className="font-semibold">स्थिति:</span> {row.status}</p>
                  <p><span className="font-semibold">आदेश:</span> {row.order}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExGratiaStatusPage;
