import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electoral Roll",
    color: "from-teal-400 to-teal-600",
    icon: "https://www.eci.gov.in/newimg/icons/voter-services.png",
    path: "/electors",
  },
  {
    name: "Affidavit",
    color: "from-purple-400 to-purple-600",
    icon: "https://www.eci.gov.in/newimg/icons/candidate-polparty.png",
    path: "/political-parties",
  },
  {
    name: "Handbook References",
    color: "from-red-400 to-red-600",
    icon: "https://www.eci.gov.in/newimg/icons/election.png",
    path: "/election-management",
  },
  {
    name: "Election Expenditure",
    color: "from-sky-400 to-sky-600",
    icon: "https://www.eci.gov.in/newimg/icons/publication.png",
    path: "/media-publications",
  },
  {
    name: "Voter Education",
    color: "from-yellow-400 to-yellow-600",
    icon: "https://www.eci.gov.in/newimg/icons/voter-education.png",
    path: "/voter-education",
  },
  {
    name: "Fact Check",
    color: "from-orange-400 to-orange-600",
    icon: "https://www.eci.gov.in/newimg/icons/ict-apps.png",
    path: "/ict-apps",
  },
];

const CategoryBar = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:gap-10 w-full mt-10 place-items-center px-10">
      {categories.map((cat, index) => (
        <Link
          key={index}
          to={cat.path}
          className="group relative flex flex-col items-center"
        >
          {/* Card */}
          <div
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 
            w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-32 xl:h-32 
            flex items-center justify-center 
            transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
          >
            {/* Gradient circle background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20 group-hover:opacity-40 transition-all`}
            ></div>

            {/* Icon */}
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-10 sm:w-12 md:w-14 relative z-10 transition-transform duration-300 group-hover:scale-125"
            />
          </div>

          {/* Label */}
          <p className="text-center text-xs sm:text-sm md:text-base font-semibold mt-3 text-gray-700 group-hover:text-gray-900">
            {cat.name}
          </p>

          {/* Glow effect on hover */}
          <div
            className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${cat.color} opacity-0 blur-lg transition duration-300 group-hover:opacity-40`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
