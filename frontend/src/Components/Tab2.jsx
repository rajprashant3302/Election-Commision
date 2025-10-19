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

const Tab2Content = () => {
  const [name, setName] = useState("");
  const [relativeName, setRelativeName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [district, setDistrict] = useState("");
  const [assemblyConstituency, setAssemblyConstituency] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const districts = [
    "Patna",
    "Nalanda",
    "Gaya",
    "Muzaffarpur",
    "Bhagalpur",
    "Darbhanga",
  ];

  const assemblyConstituencies = [
    "Patna Sahib",
    "Danapur",
    "Bakhtiyarpur",
    "Maner",
    "Fatuha",
    "Barh",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (
      !name ||
      !relativeName ||
      !gender ||
      !age ||
      !district ||
      !assemblyConstituency ||
      !captchaInput
    ) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    if (captchaInput !== captchaCode) {
      alert("❌ Captcha does not match. Please try again.");
      setCaptchaCode(generateCaptcha()); // regenerate captcha
      setCaptchaInput("");
      return;
    }

    alert(
      `✅ Searching Voter Details:\nName: ${name}\nRelative: ${relativeName}\nGender: ${gender}\nAge: ${age}\nDistrict: ${district}\nAssembly: ${assemblyConstituency}`
    );
  };

  const handleClear = () => {
    setName("");
    setRelativeName("");
    setGender("");
    setAge("");
    setDistrict("");
    setAssemblyConstituency("");
    setCaptchaInput("");
    setCaptchaCode(generateCaptcha()); // regenerate captcha
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Search by Personal Details
      </h2>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* Name + Relative Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">
              नाम / Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              रिश्तेदार का नाम / Relative's Name{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={relativeName}
              onChange={(e) => setRelativeName(e.target.value)}
              placeholder="Father/Mother/Spouse Name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Age + Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block font-semibold mb-1">
              आयु / Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="18"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">
              लिंग / Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                पुरुष / Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                महिला / Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Third Gender"
                  checked={gender === "Third Gender"}
                  onChange={(e) => setGender(e.target.value)}
                />
                तृतीय लिंग / Third Gender
              </label>
            </div>
          </div>
        </div>

        {/* District + Assembly Constituency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">
              जिला / District <span className="text-red-500">*</span>
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full border rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Your District</option>
              {districts.map((dist, index) => (
                <option key={index} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">
              विधानसभा निर्वाचन क्षेत्र / Assembly Constituency{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              value={assemblyConstituency}
              onChange={(e) => setAssemblyConstituency(e.target.value)}
              className="w-full border rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Your AC</option>
              {assemblyConstituencies.map((ac, index) => (
                <option key={index} value={ac}>
                  {ac}
                </option>
              ))}
            </select>
          </div>
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

export default Tab2Content;
