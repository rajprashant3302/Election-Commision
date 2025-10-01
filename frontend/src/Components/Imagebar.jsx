import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electoral Roll",
    color: "bg-teal-500",
    border: "border-teal-500",
    icon: "https://www.eci.gov.in/newimg/icons/voter-services.png",
    path: "/electors",
  },
  {
    name: "Affidavit",
    color: "bg-purple-500",
    border: "border-purple-500",
    icon: "https://www.eci.gov.in/newimg/icons/candidate-polparty.png",
    path: "/political-parties",
  },
  {
    name: "Handbook References",
    color: "bg-red-500",
    border: "border-red-500",
    icon: "https://www.eci.gov.in/newimg/icons/election.png",
    path: "/election-management",
  },
  {
    name: "Election Expenditure",
    color: "bg-sky-500",
    border: "border-sky-500",
    icon: "https://www.eci.gov.in/newimg/icons/publication.png",
    path: "/media-publications",
  },
  {
    name: "Voter Education",
    color: "bg-yellow-500",
    border: "border-yellow-500",
    icon: "https://www.eci.gov.in/newimg/icons/voter-education.png",
    path: "/voter-education",
  },
  {
    name: "Fact Check",
    color: "bg-orange-500",
    border: "border-orange-500",
    icon: "https://www.eci.gov.in/newimg/icons/ict-apps.png",
    path: "/ict-apps",
  },
];

const CategoryBar = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  justify-center items-center mb-9 px-2 md:px-0">
      {categories.map((cat, index) => (
        <Link
          key={index}
          to={cat.path}
          className="flex flex-col items-center relative group transition-transform gap-1"
        >
          {/* Top colored bar */}
          <div
            className={`absolute top-1/2 translate-y-2 md:translate-y-7 h-3 w-full ${cat.color} z-0`}
          ></div>

          {/* Circle with icon */}
          <div
            className={`relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center border-[10px] ${cat.border} bg-white`}
          >
            <img src={cat.icon} alt={cat.name} className="w-14 md:w-12" />
          </div>

          {/* Small black arrow */}
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-t-[8px] border-t-black mt-[-1px]"></div>

          {/* Label */}
          <p className="text-center text-sm md:text-base font-medium mt-2 md:mt-1">
            {cat.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
