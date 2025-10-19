
import React from "react";
import { useParams } from "react-router-dom";
import { contactSections } from "./ContactDataDetails";

const ContactDetailPage = () => {
  const { sectionId } = useParams();
  const section = contactSections.find((s) => s.id === sectionId);

  if (!section) return <div className="p-8">Section not found!</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold   text-gray-800 mb-6 text-center">
          {section.title}
        </h1>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
              <tr>
                {section.columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left text-sm font-semibold uppercase"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {section.data.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-gray-800">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {section.data.map((row, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2"
            >
              {section.columns.map((col, i) => (
                <div key={i} className="flex justify-between">
                  <span className="font-semibold text-gray-700">{col}</span>
                  <span className="text-gray-800">{row[i]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
