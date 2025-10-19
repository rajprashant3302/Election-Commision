import React from "react";
import bgImage from "../assets/bg.jpg";

const Box = ({ title, color = "bg-blue-500" }) => (
  <div
    className={`${color} text-white py-3 px-4 rounded-lg shadow-lg text-center min-w-[180px] max-w-[280px]`}
  >
    <h3 className="text-sm md:text-base font-semibold leading-tight">{title}</h3>
  </div>
);

const OrganisationChart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">

      {/* Page Heading */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
          Organisational Chart
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Level 1 - CEO */}
        <div className="flex justify-center mb-4">
          <Box title="CEO cum Principal Secretary" color="bg-blue-500" />
        </div>

        {/* Desktop View - Side by Side */}
        <div className="hidden md:flex md:gap-16">
          {/* Left Branch - Mirror of Right */}
          <div className="flex flex-col w-full md:w-[50vw] items-end">
            <div className="flex items-center mb-4 flex-row-reverse">
              <div className="w-0.5 h-8 bg-gray-400 ml-4"></div>
              <Box title="Additional CEO cum Additional Secretary" color="bg-orange-500" />

            </div>

            <div className="flex items-center mb-4 flex-row-reverse mr-14">
              <div className="w-0.5 h-8 bg-gray-400 ml-4"></div>
              <Box title="Joint Secretary cum Joint CEO" color="bg-yellow-500" />

            </div>

            <div className="flex items-center mb-4 flex-row-reverse mr-14">
              <div className="w-0.5 h-8 bg-gray-400 ml-4"></div>
              <Box title="Deputy CEO" color="bg-yellow-500" />

            </div>

            <div className="flex items-center flex-row-reverse mr-14">
              <div className="w-0.5 h-8 bg-gray-400 ml-4"></div>
              <Box title="Deputy Election Officer & Sub Election Officer" color="bg-yellow-500" />

            </div>
          </div>

          {/* Right Branch */}
          <div className="flex flex-col w-full md:w-[50vw]">
            <div className="flex items-center mb-4">
              <div className="w-0.5 h-8 bg-gray-400 mr-4"></div>
              <Box title="Joint Secretary" color="bg-orange-500" />
            </div>

            <div className="flex items-center mb-4 ml-14">
              <div className="w-0.5 h-8 bg-gray-400 mr-4"></div>
              <Box title="Deputy Secretary" color="bg-green-600" />
            </div>

            <div className="flex items-center mb-4 ml-14">
              <div className="w-0.5 h-8 bg-gray-400 mr-4"></div>
              <Box title="ACEO cum Assistant Secretary" color="bg-green-600" />
            </div>

            <div className="flex items-center ml-14">
              <div className="w-0.5 h-8 bg-gray-400 mr-4"></div>
              <Box title="Section Officer & Assistant" color="bg-green-600" />
            </div>
          </div>
        </div>

        {/* Mobile View - Stacked */}
        <div className="md:hidden">
          {/* Left Branch Label */}
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
              Administrative Branch
            </span>
          </div>

          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-3">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Additional CEO cum Additional Secretary" color="bg-orange-500" />
            </div>

            <div className="flex items-center mb-3 ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Joint Secretary cum Joint CEO" color="bg-yellow-500" />
            </div>

            <div className="flex items-center mb-3 ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Deputy CEO" color="bg-yellow-500" />
            </div>

            <div className="flex items-center ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Deputy Election Officer & Sub Election Officer" color="bg-yellow-500" />
            </div>
          </div>

          {/* Right Branch Label */}
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
              Secretariat Branch
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Joint Secretary" color="bg-orange-500" />
            </div>

            <div className="flex items-center mb-3 ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Deputy Secretary" color="bg-green-600" />
            </div>

            <div className="flex items-center mb-3 ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="ACEO cum Assistant Secretary" color="bg-green-600" />
            </div>

            <div className="flex items-center ml-6">
              <div className="w-0.5 h-6 bg-gray-400 mr-3"></div>
              <Box title="Section Officer & Assistant" color="bg-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationChart;