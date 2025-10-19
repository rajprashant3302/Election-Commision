// File: RoEroContact.jsx
import React, { useState, useMemo } from "react";
import { roEroData } from "./RoEroData";

const ITEMS_PER_PAGE = 20; // Number of records per page

const RoEroContact = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [page, setPage] = useState(1);

  // ✅ Get unique districts
  const districts = useMemo(
    () => [...new Set(roEroData.data.map((item) => item.district))],
    []
  );

  // ✅ Filter data based on district
  const filteredData = useMemo(() => {
    return roEroData.data.filter(
      (item) => !selectedDistrict || item.district === selectedDistrict
    );
  }, [selectedDistrict]);

  // ✅ Paginated data (lazy loading)
  const paginatedData = useMemo(() => {
    return filteredData.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredData, page]);

  // ✅ Load more data
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  // ✅ Reset pagination when district filter changes
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setPage(1);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-700">
        RO/ERO Contact List
      </h1>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/4 focus:ring-2 focus:ring-purple-400"
        >
          <option value="">Select District</option>
          {districts.map((dist, idx) => (
            <option key={idx} value={dist}>
              {dist}
            </option>
          ))}
        </select>
      </div>

      {/* Table View (Desktop) */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
            <tr>
              <th className="py-3 px-4 border">Sl. No.</th>
              <th className="py-3 px-4 border">District</th>
              <th className="py-3 px-4 border">Officer Name</th>
              <th className="py-3 px-4 border">Designation</th>
              <th className="py-3 px-4 border">Email</th>
              <th className="py-3 px-4 border">Mobile No.</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-purple-50 even:bg-gray-50 transition duration-150"
              >
                <td className="py-2 px-4 border text-center">{row.id}</td>
                <td className="py-2 px-4 border">{row.district}</td>
                <td className="py-2 px-4 border">{row.officerName}</td>
                <td className="py-2 px-4 border">{row.designation}</td>
                <td className="py-2 px-4 border">{row.email}</td>
                <td className="py-2 px-4 border">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="md:hidden flex flex-col gap-4">
        {paginatedData.map((row) => (
          <div
            key={row.id}
            className="border rounded-xl p-4 bg-white shadow-md border-l-4 via-pink-500 to-indigo-500"
          >
            <p className="text-sm text-gray-500 mb-1">Sl. No: {row.id}</p>
            <h2 className="text-lg font-semibold text-purple-700">
              {row.district}
            </h2>
            <p className="text-gray-700">{row.officerName}</p>
            <p className="text-gray-600 text-sm">{row.designation}</p>
            <p className="text-gray-800 mt-1">📧 {row.email}</p>
            <p className="text-gray-800 font-medium mt-2">📞 {row.phone}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {paginatedData.length < filteredData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* No Data Message */}
      {filteredData.length === 0 && (
        <p className="mt-8 text-center text-gray-600 text-lg">
          No records found for the selected district.
        </p>
      )}
    </div>
  );
};

export default RoEroContact;
