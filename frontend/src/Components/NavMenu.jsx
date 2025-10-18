// File: EciFullMenu.jsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import sections from "../pages/SectionData";

const NavMenu = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu whenever the route changes
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(`/sections/${path}`);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white transition-transform duration-500 ease-in-out z-50 overflow-y-auto ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-sm leading-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(section.path)}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20 hover:scale-105 transition-transform duration-200 cursor-pointer h-full flex flex-col"
          >
            <h3 className="text-yellow-400 font-semibold mb-2">
              {section.title}
            </h3>

            <ul className="space-y-1 text-white text-sm flex-1">
              {section.items.slice(0, 5).map((item, i) => (
                <li
                  key={i}
                  className="hover:text-slate-200 hover:translate-x-1 transition-all duration-200"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {section.items.length > 5 && (
                <li
                  className="text-blue-200 font-semibold mt-1 hover:underline hover:text-white cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(section.path);
                  }}
                >
                  + {section.items.length - 5} more
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
