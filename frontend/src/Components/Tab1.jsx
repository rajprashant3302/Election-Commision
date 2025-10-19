import React, { useState } from "react";

const Tab1Content = () => {
  const [epicNumber, setEpicNumber] = useState("");
  const [state, setState] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    alert(`Searching EPIC: ${epicNumber}, State: ${state}, Captcha: ${captcha}`);
  };

  const handleClear = () => {
    setEpicNumber("");
    setState("");
    setCaptcha("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
     

      {/* Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          <div>
            <label className="block font-semibold mb-1">
            ईपीआईसी संख्या/
            EPIC Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={epicNumber}
              onChange={(e) => setEpicNumber(e.target.value)}
              placeholder="Your EPIC Number"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
            राज्य/State <span className="text-red-500">*</span>
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border rounded-sm"
            >
             <option value="">-- Select State/UT --</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>

  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Delhi">Delhi</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Puducherry">Puducherry</option>
              {/* Add other states here */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center">
          <div>
            <label className="block font-semibold mb-1">
              Captcha Code <span className="text-red-500">*</span>
            </label>
            <div className="border p-2 text-xl text-green-700 font-mono text-center">
              f6zej3
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Enter Captcha <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Enter Captcha"
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
            SEARCH
          </button>
          <button type="button" onClick={handleClear} className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400">
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tab1Content;
