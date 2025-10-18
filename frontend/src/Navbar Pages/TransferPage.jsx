// File: TransfersPage.jsx
import React from "react";
import bgImage from "../assets/bg.jpg";
import { FileText } from "lucide-react";

const data = [
  {
    notification: "106",
    date: "17.11.2023",
    description: "Transfer/Posting of DyEO & SubEOs",
    pdf: "https://ceoelection.bihar.gov.in/pdf/TransferPosting_Nov2023.pdf",
  },
  {
    notification: "62",
    date: "26.05.2023",
    description: "Transfer/Posting of DyCEOs & DyEOs",
    pdf: "http://ceoelection.bihar.gov.in/pdf/1703-Notification.pdf",
  },
  {
    notification: "100",
    date: "23.07.2022",
    description: "Transfer/Posting of Deputy Election Officers",
    pdf: "https://ceoelection.bihar.gov.in/pdf/23072022100.pdf",
  },
  {
  notification: "101",
  date: "23.07.2022",
  description: "Transfer/Posting of Sub Election Officers",
  pdf: "https://ceoelection.bihar.gov.in/pdf/23072022101.pdf"
},
];

const TransfersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      {/* Page Heading */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          Transfers / Postings / Promotions
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <p className="text-sm text-blue-600 mb-6">
          Home / Notifications /{" "}
          <span className="text-pink-600 font-semibold">
            Transfers / Postings / Promotions
          </span>
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Notification No
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3 text-gray-800 font-medium">
                    {item.notification}
                  </td>
                  <td className="px-4 py-3 text-gray-800">{item.date}</td>
                  <td className="px-4 py-3 text-blue-700 font-medium hover:text-blue-900">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      {item.description}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-gray-800 font-semibold mb-2">
                <span className="text-gray-500 font-normal">Notification: </span>
                {item.notification}
              </p>
              <p className="text-gray-800 mb-2">
                <span className="text-gray-500 font-normal">Date: </span>
                {item.date}
              </p>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900"
              >
                <FileText className="w-5 h-5" />
                {item.description}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;
