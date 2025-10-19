import React, { useState } from "react";
import Nav from '../Components/Nav';
import { Link } from "react-router-dom";
const Sir_finalroll = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [assembly, setAssembly] = useState("");
  const [language, setLanguage] = useState("");
  const [rollType, setRollType] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("k9x4qz");

  const states = ["Bihar", "Haryana", "Uttar Pradesh", "Maharashtra"];
  const districts = ["Patna", "Gurugram", "Lucknow", "Pune"];
  const assemblies = ["AC-101", "AC-102", "AC-103", "AC-104"];
  const languages = ["English", "Hindi"];
  const rollTypes = ["Roll", "Part", "Section"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!state || !district || !assembly || !language || !rollType || !captcha) {
      alert("⚠️ Please fill all required fields.");
      return;
    }
    alert(`Searching for:
State: ${state}
District: ${district}
Assembly: ${assembly}
Language: ${language}
Roll Type: ${rollType}
Captcha: ${captcha}`);
  };

  const handleClear = () => {
    setState("");
    setDistrict("");
    setAssembly("");
    setLanguage("");
    setRollType("");
    setCaptcha("");
  };

  const refreshCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 8);
    setGeneratedCaptcha(random);
  };

  return (
    <>
      <h2 className="text-xl py-2 px-5 font-bold mb-6 bg-blue-300 text-gray-700">
        Search Electoral Roll
      </h2>
    <div className="bg-white mt-10 mb-10 rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-200">
    <h4 className="text-red-600 mb-5 text-center font-bold">SIR final roll has been published. Select roll type "SIR Final Roll - 2025" to download the roll</h4>
      <form onSubmit={handleSearch} className="space-y-6">
        {/* State */}
        <div>
          <label className="block font-semibold mb-1">
            राज्य / State <span className="text-red-500">*</span>
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select State</option>
            {states.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="block font-semibold mb-1">जिला / District</label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Assembly */}
        <div>
          <label className="block font-semibold mb-1">
            विधानसभा निर्वाचन क्षेत्र / Assembly Constituency{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            value={assembly}
            onChange={(e) => setAssembly(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Assembly</option>
            {assemblies.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="block font-semibold mb-1">
            भाषा का चयन / Select Language <span className="text-red-500">*</span>
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Roll Type */}
        <div>
          <label className="block font-semibold mb-1">
            Roll Type <span className="text-red-500">*</span>
          </label>
          <select
            value={rollType}
            onChange={(e) => setRollType(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Roll Type</option>
            {rollTypes.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
    <div class="flex flex-wrap gap-4 justify-center">
    <Link to="/sir-finalroll"><button className='btn w-fit px-3 btn-primary my-2 p-2.5 cursor-pointer  block '>Download SIR Draft Roll for full AC</button></Link>
    <Link to="/sir-finalroll"><button className='btn  w-fit px-3 btn-success my-2 p-2.5 cursor-pointer  block '>Download SIR Draft Roll for full AC</button></Link>
    </div>

        {/* Captcha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block font-semibold mb-1">
              Captcha Code <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <div className="border p-2 text-xl text-green-700 font-mono text-center rounded-lg select-none bg-gray-50 w-32">
                {generatedCaptcha}
              </div>
          
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
          <button
                type="button"
                onClick={refreshCaptcha}
                className="mt-2 text-sm btn btn-success w-fit text-white  "
                >
                Refresh
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
    
    </>);
};

export default Sir_finalroll;
