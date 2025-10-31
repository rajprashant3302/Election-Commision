import React, { useState, useEffect } from "react";

const KnowYourPC = () => {
  const [epicNumber, setEpicNumber] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // --- Generate random captcha ---
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let text = "";
    for (let i = 0; i < 6; i++) text += chars.charAt(Math.floor(Math.random() * chars.length));
    return text;
  };

  useEffect(() => {
    setCaptchaValue(generateCaptcha());
  }, []);

  // --- Refresh Captcha ---
  const handleRefreshCaptcha = () => {
    setCaptchaValue(generateCaptcha());
    setCaptchaInput("");
    setError("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!epicNumber.trim() || !captchaInput.trim()) {
      setError("Please fill in both the EPIC Number and CAPTCHA.");
      return;
    }

    if (captchaInput.trim().toLowerCase() !== captchaValue.toLowerCase()) {
      setError("Incorrect CAPTCHA. Please try again.");
      handleRefreshCaptcha();
      return;
    }

    setSuccess(`Searching for EPIC Number: ${epicNumber}`);
    console.log("Searching for EPIC Number:", epicNumber);
  };

  return (
    <div className="my-10  flex items-center justify-center p-6">
      <div className="bg-white/70 backdrop-blur-xl border border-purple-200 shadow-2xl rounded-2xl w-full max-w-lg p-8 relative">
        <h1 className="text-2xl font-extrabold text-center text-blue-900 mb-8">
          Know Your Electoral Ecosystem
        </h1>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
            {success}
          </div>
        )}

        <form onSubmit={handleSearch} className="space-y-6">
          {/* EPIC Number */}
          <div>
            <label htmlFor="epic" className="block text-gray-700 font-semibold mb-1">
              EPIC Number
            </label>
            <input
              id="epic"
              type="text"
              placeholder="Enter your EPIC number"
              value={epicNumber}
              onChange={(e) => setEpicNumber(e.target.value.toUpperCase())}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* CAPTCHA Section */}
          <div>
            <label htmlFor="captcha" className="block text-gray-700 font-semibold mb-1">
              CAPTCHA
            </label>

            <div className="flex items-center gap-3 mb-3">
              {/* Captcha Text */}
              <div className="select-none flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-200 text-blue-900 font-mono text-xl font-bold tracking-widest rounded-md border border-gray-300 w-40 h-12 shadow-inner">
                {captchaValue.split("").map((char, i) => (
                  <span
                    key={i}
                    className="mx-[1px] rotate-2 inline-block"
                    style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* Refresh Button */}
              <button
                type="button"
                onClick={handleRefreshCaptcha}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-purple-100 transition"
                title="Refresh CAPTCHA"
              >
                <svg
                  className="w-5 h-5 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 0014 4h-1.581M12.419 4L10 1.58M12.419 4L10 6.42"
                  />
                </svg>
              </button>
            </div>

            {/* Captcha Input */}
            <input
              id="captcha"
              type="text"
              placeholder="Enter the text shown above"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-fit px-3 bg-green-700 text-white mx-auto  font-semibold py-2.5 rounded-md hover:scale-105 transition-transform shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default KnowYourPC;
