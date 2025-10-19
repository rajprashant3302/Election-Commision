import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "../Route"; // import centralized routes

function Infotabs() {
  const infotabRoutes = routes.filter((r) =>
    [
      "/latest-news",
      "/current-issues",
      "/press-releases",
      "/instructions",
      "/tender-vacancies",
      "/election-stories",
      "/faqs",
    ].includes(r.path)
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSeeMore = (index) => {
    setExpanded(true);
    navigate(infotabRoutes[index].path);
  };

  return (
    <div className="bg-white w-[99vw] px-2 md:px-10 mt-10 mb-10">
      {/* Nav Bar */}
      <nav className="flex border-b border-blue-900 gap-1 mt-1 flex-wrap justify-center sm:justify-start items-center">
        {infotabRoutes.map((item, index) => (
          <button
            key={item.path}
            onClick={() => {
              setActiveIndex(index);
              setExpanded(false);
            }}
            className={`px-2 md:px-4 py-1 md:py-2 border border-transparent text-sm md:text-lg w-40 md:w-fit justify-center items-center ${
              activeIndex === index
                ? "bg-[#003366] text-white rounded-t-md"
                : "bg-white text-[#003366] border-t border-l border-r border-blue-900 rounded-t-md"
            }`}
          >
            📄 {item.path.replace("/", "").replace("-", " ").toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="mt-4 w-full">
        {!expanded ? (
          <div className="p-4 border rounded-md shadow-sm">
            {/* Show preview of active tab */}
            {React.createElement(infotabRoutes[activeIndex].element.type)}
            <div className="mt-4 text-right">
              <button
                onClick={() => handleSeeMore(activeIndex)}
                className="text-blue-700 font-semibold underline"
              >
                See More
              </button>
            </div>
          </div>
        ) : (
          <Routes>
            {infotabRoutes.map((tab) => (
              <Route key={tab.path} path={tab.path} element={tab.element} />
            ))}
          </Routes>
        )}
      </div>
    </div>
  );
}

export default Infotabs;
