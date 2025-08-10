import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import CurrentIssues from "../pages/CurrentIssues";
import PressReleases from "../pages/PressReleases";
import Instructions from "../pages/Instructions";
import TenderVacancies from "../pages/TenderVacancies";
import ElectionStories from "../pages/ElectionStories";
import FAQs from "../pages/FAQs";
import LatestNews from "../pages/LatestNews";

function Infotabs() {
  return (
    <div className="bg-white  w-screen px-2 md:px-10 mt-10 mb-10">
      {/* Nav Bar */}
      <nav className="flex border-b-1 border-blue-900 gap-1 mt-1 flex-wrap justify-center sm:justify-start items-center">
        {[
          { name: "Latest News", path: "/latest-news" },
          { name: "Current Issues", path: "/" },
          { name: "Press Releases", path: "/press-releases" },
          { name: "Instructions", path: "/instructions" },
          { name: "Tender & Vacancies", path: "/tender-vacancies" },
          { name: "Election Stories", path: "/election-stories" },
          { name: "FAQs", path: "/faqs" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `px-1 md:px-4 py-1 md:py-2 border border-transparent text-sm md:text-lg w-40 md:w-fit justify-center items-center ${
                isActive
                  ? "bg-[#003366] text-white rounded-t-md"
                  : "bg-white text-[#003366] border-t-1 border-l-1 border-r-1 border-blue-900 rounded-t-md"
              }`
            }
          >
            📄 {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Page Routes */}
      <div className="mt-4 w-full">
        <Routes>
          <Route path="/" element={<CurrentIssues />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/tender-vacancies" element={<TenderVacancies />} />
          <Route path="/election-stories" element={<ElectionStories />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </div>
  );
}

export default Infotabs;
