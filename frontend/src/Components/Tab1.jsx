import React, { useState, useEffect } from "react";

// Helper function to generate random captcha
const generateCaptcha = (length = 6) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const Tab1Content = () => {
  const [epicNumber, setEpicNumber] = useState("");
  const [state, setState] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!epicNumber || !state || !captchaInput) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    if (captchaInput !== captchaCode) {
      alert("❌ Captcha does not match. Please try again.");
      setCaptchaCode(generateCaptcha()); // regenerate captcha
      setCaptchaInput("");
      return;
    }

    alert(`✅ Searching EPIC: ${epicNumber}, State: ${state}`);
  };

  const handleClear = () => {
    setEpicNumber("");
    setState("");
    setCaptchaInput("");
    setCaptchaCode(generateCaptcha()); // regenerate captcha
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* EPIC Number + State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          <div>
            <label className="block font-semibold mb-1">
              ईपीआईसी संख्या/EPIC Number <span className="text-red-500">*</span>
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
            </select>
          </div>
        </div>

        {/* Captcha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center">
          <div>
            <label className="block font-semibold mb-1">
              Captcha Code <span className="text-red-500">*</span>
            </label>
            <div className="border p-2 text-xl text-green-700 font-mono text-center rounded-lg select-none bg-gray-50">
              {captchaCode}
            </div>
         
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Enter Captcha <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter Captcha"
              className="w-full border rounded p-2"
            />
          </div>
          <button
              type="button"
              onClick={refreshCaptcha}
              className="mt-2 text-sm btn btn-success w-fit text-white  "
            >
              Refresh Captcha
            </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            SEARCH
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tab1Content;
