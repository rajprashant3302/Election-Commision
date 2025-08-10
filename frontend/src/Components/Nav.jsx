import React, { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import NavMenu from './NavMenu';
import { IoCall, IoCloseSharp, IoMenuSharp } from "react-icons/io5";

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

    updateHeight(); // measure immediately
    window.addEventListener("resize", updateHeight); // update on resize
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="font-sans">
      {/* Top Section (fixed) */}
      <div ref={topSectionRef} className="fixed top-0 left-0 w-full z-[9999]">
        {/* Top Blue Bar */}
        <div className="bg-[#01497C] text-white text-sm flex flex-wrap justify-between items-center px-4 py-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
            </button>
            <span className="font-bold text-white text-lg">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-3 border-r px-2 border-white">
              <span className="hidden md:flex md:items-center md:gap-1 border-r px-2 border-white">
                <IoCall /> Toll Free - 1950
              </span>
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
            </div>
            <div className="flex items-center gap-3">
              <a href="https://ceoelection.bihar.gov.in/screenReader.html" className="hidden md:inline border-r px-2 border-white">Screen Reader Access</a>
              <a href="#" className="hidden md:inline border-r px-2 border-white">Skip to Main Content</a>
              <button className="hidden md:inline border px-1 text-xs">A+</button>
              <button className="hidden md:inline border px-1 text-xs">A-</button>
              <button className="bg-pink-600 px-2 py-1 rounded text-white text-xs">
                हिंदी में देखें
              </button>
            </div>
          </div>
        </div>

        {/* Logo Row */}
        <div className="bg-white flex flex-col md:flex-row justify-between items-center px-4 py-1 border-b border-gray-200">
          <div className="flex justify-center items-center space-x-6 mt-2 md:mt-0">
            <img
              src="https://ceoelection.bihar.gov.in/img_new/CEOLogo.png"
              alt="ECI Logo"
              className="h-12"
            />
          </div>
          <div className="hidden md:flex bg-white px-4 py-3 flex-wrap gap-2 justify-center items-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
              Search your name in 2003 Bihar E-Roll
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded text-sm">
              Search your name in E-Roll
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Slide Down Menu */}
      <div
        className={`fixed left-0 w-full bg-[#003049e6] text-white transition-transform duration-500 ease-in-out z-[9998] overflow-y-auto ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          top: `${topHeight}px`,
          height: `calc(100vh - ${topHeight}px)`
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
