import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavMenu from "./NavMenu";
import { IoCall, IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const EciMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const topSectionRef = useRef(null);
  const [topHeight, setTopHeight] = useState(0);

  // Measure height of BOTH rows combined
  useEffect(() => {
    const updateHeight = () => {
      if (topSectionRef.current) {
        setTopHeight(topSectionRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="font-sans">
      {/* Top Section (fixed) */}
      <div ref={topSectionRef} className="fixed top-0 left-0 w-full z-[9999]">
        {/* Top Blue Bar */}
        <div className="bg-[#5b21b6] text-white text-[15px] flex flex-wrap justify-between items-center px-4 py-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl transition-transform hover:scale-110"
            >
              {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
            </button>
            <span className="font-bold text-white text-lg">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </div>

          {/* Tools & Icons (always visible now) */}
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-3 border-r px-2 border-white">
              <span className="hidden md:flex md:items-center md:gap-1 border-r px-2 border-white">
                <IoCall /> Toll Free - 1950
              </span>
              <FaFacebook className="hover:text-blue-400 transition cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 transition cursor-pointer" />
              <FaXTwitter className="hover:text-black transition cursor-pointer" />
              <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://ceoelection.bihar.gov.in/screenReader.html"
                className="hidden md:inline border-r px-2 border-white hover:text-gray-200 transition"
              >
                Screen Reader Access
              </a>
              <a
                href="#"
                className="hidden md:inline border-r px-2 border-white hover:text-gray-200 transition"
              >
                Skip to Main Content
              </a>
              <button className="hidden md:inline border px-1 text-xs rounded hover:bg-white/20">
                A+
              </button>
              <button className="hidden md:inline border px-1 text-xs rounded hover:bg-white/20">
                A-
              </button>
              <button className="bg-gradient-to-r from-purple-300 to-indigo-300 px-2 py-1 rounded text-black text-xs hover:scale-105 transition">
                हिंदी में देखें
              </button>
            </div>
          </div>
        </div>

        {/* Logo Row */}
        <div className="bg-white/80 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center px-4 py-2">
          <div className="flex justify-center items-center space-x-6 mt-2 md:mt-0">
            <img
              src="https://ceoelection.bihar.gov.in/img_new/CEOLogo.png"
              alt="ECI Logo"
              className="h-16"
            />
          </div>
          <div className="hidden md:flex px-4 py-3 flex-wrap gap-3 justify-center items-center">
            
          <Link to="searchNamein2003BiharE-roll">  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded text-sm shadow-md hover:scale-105 transition">
              Search your name in 2003 Bihar E-Roll
            </button></Link>

            <Link to="searchNameinE-Roll">
             <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded text-sm shadow-md hover:scale-105 transition">
              Search your name in E-Roll
            </button></Link>
           
           <Link to="NavSearch">
           <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded text-sm shadow-md hover:scale-105 transition">
              Search
            </button></Link>
            
          </div>
        </div>
      </div>

      {/* Slide Down Menu */}
      <div
        className={`fixed left-0 w-full bg-[#003049e6] text-white transition-transform duration-500 ease-in-out z-[9998] overflow-y-auto ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          top: `${topHeight}px`,
          height: `calc(100vh - ${topHeight}px)`,
        }}
      >
        <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Spacer */}
      <div style={{ height: `${topHeight}px` }} />
    </div>
  );
};

export default EciMenu;
