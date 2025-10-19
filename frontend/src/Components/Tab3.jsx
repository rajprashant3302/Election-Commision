import React, { useState } from "react";

const Tab3Content = () => {
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!phone || !captcha) {
      alert("⚠️ Please fill all required fields.");
      return;
    }
    alert(`Searching Voter with Phone: ${phone}\nCaptcha: ${captcha}`);
  };

  const handleClear = () => {
    setPhone("");
    setCaptcha("");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Search by Mobile Number
      </h2>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* Phone Number */}
        <div>
          <label className="block font-semibold mb-1">
            मोबाइल नंबर / Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter 10-digit Mobile Number"
            maxLength="10"
            pattern="[0-9]{10}"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Captcha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block font-semibold mb-1">
              Captcha Code <span className="text-red-500">*</span>
            </label>
            <div className="border p-2 text-xl text-green-700 font-mono text-center rounded-lg select-none bg-gray-50">
              a8x4kz
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
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 pt-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            SEARCH
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold hover:bg-gray-400 transition"
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tab3Content;
