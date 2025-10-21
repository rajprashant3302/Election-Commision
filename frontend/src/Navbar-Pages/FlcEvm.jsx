
import React from "react";
import bgImage from "../assets/bg.jpg";
import { FileText } from "lucide-react";

// Column names
const columns = ["Sl No.", "District", "FLC OK BU", "FLC OK CU", "FLC OK VVPAT", "List"];

// Table data
const data = [
  [1, "ARARIA", 2327, 2578, 2780, "Download"],
  [2, "ARWAL", 693, 680, 778, "Download"],
  [3, "AURANGABAD", 3469, 2551, 2810, "Download"],
  [4, "BANKA", 3822, 1744, 2187, "Download"],
  [5, "BEGUSARAI", 2530, 2689, 2916, "Download"],
  [6, "BHAGALPUR", 3667, 2984, 3185, "Download"],
  [7, "BHOJPUR", 2651, 2932, 3185, "Download"],
  [8, "BUXAR", 1505, 1785, 1984, "Download"],
  [9, "DARBHANGA", 3444, 3875, 4175, "Download"],
  [10, "GAYA", 4685, 4272, 4507, "Download"],
  [11, "GOPALGANJ", 2310, 2624, 2830, "Download"],
  [12, "JAMUI", 1557, 1636, 1843, "Download"],
  [13, "JEHANABAD", 1452, 1168, 1273, "Download"],
  [14, "KAIMUR", 1674, 1681, 1785, "Download"],
  [15, "KATIHAR", 3335, 2875, 3081, "Download"],
  [16, "KHAGARIA", 2972, 1574, 1665, "Download"],
  [17, "KISHANGANJ", 1405, 1538, 1638, "Download"],
  [18, "LAKHISARAI", 1342, 999, 1089, "Download"],
  [19, "MADHEPURA", 1605, 1787, 1886, "Download"],
  [20, "MADHUBANI", 3868, 4376, 4782, "Download"],
  [21, "MUNGER", 1555, 1391, 1479, "Download"],
  [22, "MUZAFFARPUR", 8381, 4558, 4885, "Download"],
  [23, "NALANDA", 5353, 3075, 3221, "Download"],
  [24, "NAWADA", 2091, 2265, 2525, "Download"],
  [25, "PASCHIM CHAMPARAN", 3117, 3517, 3735, "Download"],
  [26, "PATNA", 11711, 6422, 6740, "Download"],
  [27, "PURNIA", 4900, 2900, 3100, "Download"],
  [28, "PURVI CHAMPARAN", 7795, 4570, 4936, "Download"],
  [29, "ROHTAS", 2923, 3068, 3254, "Download"],
  [30, "SAHARSA", 1803, 1889, 2061, "Download"],
  [31, "SAMASTIPUR", 4420, 3953, 4393, "Download"],
  [32, "SARAN", 3960, 3970, 4284, "Download"],
  [33, "SHEIKHPURA", 864, 712, 788, "Download"],
  [34, "SHEOHAR", 839, 438, 494, "Download"],
  [35, "SITAMARHI", 5899, 3464, 3561, "Download"],
  [36, "SIWAN", 5444, 3366, 3536, "Download"],
  [37, "SUPAUL", 2993, 2174, 2195, "Download"],
  [38, "VAISHALI", 3362, 3379, 3580, "Download"],
  ["TOTAL", "—", 127723, 101459, 109146, "—"],
];

// Function to get a downloadable link (for now dummy)
const getDownloadLink = (district) => `/downloads/${district}.pdf`;

const FlcEvm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Page Header */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
          List of FLC OK EVMs for Elections-2024
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
          District-wise FLC OK EVM Details
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left text-sm font-semibold uppercase"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-gray-800">
                      {i === 5 && cell === "Download" ? (
                        <a
                          href={getDownloadLink(row[1])}
                          download
                          className="flex items-center gap-2 text-indigo-600 hover:text-pink-600 transition"
                        >
                          <FileText size={16} />
                          Download
                        </a>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {data.map((row, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2"
            >
              {columns.map((col, i) => (
                <div key={i} className="flex justify-between">
                  <span className="font-semibold text-gray-700">{col}</span>
                  <span className="text-gray-800">
                    {i === 5 && row[i] === "Download" ? (
                      <a
                        href={getDownloadLink(row[1])}
                        download
                        className="flex items-center gap-1 text-indigo-600 hover:text-pink-600 transition"
                      >
                        <FileText size={14} />
                        Download
                      </a>
                    ) : (
                      row[i]
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlcEvm;
