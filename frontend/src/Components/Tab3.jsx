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

const Tab3Content = () => {
  const [phone, setPhone] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!phone || !captchaInput) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    if (captchaInput !== captchaCode) {
      alert("❌ Captcha does not match. Please try again.");
      setCaptchaCode(generateCaptcha()); // generate new captcha on failure
      setCaptchaInput("");
      return;
    }

    alert(`✅ Searching Voter with Phone: ${phone}`);
    // API call logic can go here
  };

  const handleClear = () => {
    setPhone("");
    setCaptchaInput("");
    setCaptchaCode(generateCaptcha()); // regenerate captcha
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
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
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
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
