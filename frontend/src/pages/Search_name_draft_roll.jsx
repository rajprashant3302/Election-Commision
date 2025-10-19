// TabEpicSearch.jsx
import React, { useState } from "react";
import Nav from '../Components/Nav';
const Search_name_draft_roll = () => {
  const [stateVal, setStateVal] = useState("");
  const [epic, setEpic] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  const states = ["Bihar", "Haryana", "Uttar Pradesh", "Maharashtra", "Delhi"];

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const refreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");

    // basic validation
    if (!stateVal) {
      setError("Please select a state.");
      return;
    }
    if (!epic.trim()) {
      setError("Please enter EPIC Number.");
      return;
    }

    if (!captchaInput.trim()) {
      setError("Please enter captcha.");
      return;
    }
    if (captchaInput.trim().toUpperCase() !== generatedCaptcha) {
      setError("Captcha does not match. Please try again or refresh.");
      return;
    }

    alert(`Searching...\nState: ${stateVal}\nEPIC: ${epic}`);
  };

  const handleClear = () => {
    setStateVal("");
    setEpic("");
    setCaptchaInput("");
    setGeneratedCaptcha(generateCaptcha());
    setError("");
  };

  return (
  <>
    <h2 className="text-lg  w-fit bg-purple-600  px-3 mx-auto rounded py-2 font-semibold mt-16 text-white ">Search your Name In Draft Roll</h2>
    <div className="bg-white mb-10 rounded-xl shadow-md pb-6 px-10 max-w-2xl mx-auto border border-gray-200">

      <form onSubmit={handleSearch} className="space-y-5">
        {/* State */}
        <div className="py-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select State <span className="text-red-500">*</span>
          </label>
          <select
            value={stateVal}
            onChange={(e) => setStateVal(e.target.value)}
            className="w-full border rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-300 outline-none"
            required
          >
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* EPIC Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EPIC Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={epic}
            onChange={(e) => setEpic(e.target.value)}
            placeholder="Enter EPIC Number (e.g. ABC1234567)"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-300 outline-none"
            inputMode="text"
            required
          />
        </div>

        {/* Captcha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Captcha <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <div className="border rounded-lg p-2 w-40 text-center font-mono text-lg bg-gray-50 select-none">
                {generatedCaptcha}
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-sm px-3 py-2 btn scale-90 btn-success text-white rounded-lg"
                aria-label="Refresh captcha"
              >
                Refresh
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Captcha <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Type captcha here"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-2">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            SEARCH
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>

  </>
  );
};

export default Search_name_draft_roll;
