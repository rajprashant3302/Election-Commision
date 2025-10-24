import React, { useState } from "react";

// A simple calendar icon component (from Heroicons)
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25m10.5-2.25v2.25M6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V7.5A2.25 2.25 0 0 0 17.25 5.25H6.75A2.25 2.25 0 0 0 4.5 7.5v11.25A2.25 2.25 0 0 0 6.75 21Z"
    />
  </svg>
);

// Your main form component
const NavSearch=()=> {
  // Data for the "Select Category" dropdown from your screenshot
  const categories = [
    "Electoral Bond",
    "Model Code of Conduct",
    "Election Symbol Para 10A",
    "Election Symbol Para 10B",
    "Vice Presidential Election 2025",
    "Tender",
    "Electoral Roll",
    "Instructions",
    "Press Releases",
    "Handbooks, Manuals...",
    "General Elections",
    "EVM",
    "Candidate",
    "Political Parties",
    "Assembly Elections",
    "Bye Elections",
    "Result & Statistics Reports",
    "Publication",
    "International Cooperation",
  ];

  // Dummy data for other dropdowns
  const subCategories = ["Sub Category 1", "Sub Category 2"];
  const divisions = ["Division 1", "Division 2", "Division 3"];

  // State to manage form fields
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    keyword: "",
    startDate: "",
    toDate: "",
    division: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      category: "",
      subCategory: "",
      keyword: "",
      startDate: "",
      toDate: "",
      division: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your search logic here
  };

  // This trick allows the placeholder to show on date inputs
  const DateInput = ({ name, value, onChange, placeholder }) => (
    <div className="relative">
      <input
        type={value ? "date" : "text"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.type = "text";
          }
        }}
        placeholder={placeholder}
        className="w-full p-2.5 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <CalendarIcon />
      </div>
    </div>
  );

  return (
    // Page background to mimic the blurred effect
    <div className="flex items-center justify-center min-h-screen p-4 bg-blue-50 font-inter">
      {/* The main form card */}
      <div className="w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg">
        {/* Title */}
        <h2
          className="text-3xl font-extrabold text-center text-blue-800 uppercase"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
        >
          Advance Search
        </h2>
        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-8">Refine your search...</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Select Category */}
            <div>
              <label htmlFor="category" className="sr-only">
                Select Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Select sub category */}
            <div>
              <label htmlFor="subCategory" className="sr-only">
                Select sub category
              </label>
              <select
                id="subCategory"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option value="">Select sub category</option>
                {subCategories.map((subCat) => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </div>

            {/* Search keyword */}
            <div>
              <label htmlFor="keyword" className="sr-only">
                Search keyword
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={formData.keyword}
                onChange={handleChange}
                placeholder="Search keyword"
                className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
            </div>

            {/* Start Date */}
            <div>
              <label htmlFor="startDate" className="sr-only">
                Start Date
              </label>
              <DateInput
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="Start Date"
              />
            </div>

            {/* To Date */}
            <div>
              <label htmlFor="toDate" className="sr-only">
                To Date
              </label>
              <DateInput
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                placeholder="To Date"
              />
            </div>

            {/* Select Division & Buttons */}
            <div className="flex flex-col md:flex-row md:items-end gap-3">
              <div className="flex-grow">
                <label htmlFor="division" className="sr-only">
                  Select Division
                </label>
                <select
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                >
                  <option value="">Select Division</option>
                  {divisions.map((div) => (
                    <option key={div} value={div}>
                      {div}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0">
                {/* Search Button */}
                <button
                  type="submit"
                  className="flex-1 w-full md:w-auto px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Search
                </button>
                {/* Reset Button */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 w-full md:w-auto px-6 py-2.5 bg-white text-gray-800 font-semibold border border-yellow-500 rounded-md shadow-sm hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavSearch;