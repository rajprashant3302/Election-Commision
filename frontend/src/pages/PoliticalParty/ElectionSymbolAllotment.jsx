
import React from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";

const listitems = [
  {
    title: "CONDITIONS FOR ALLOTMENT",
    link: "#",
  },
  {
    title: "PROFORMA FOR APPLICATION",
    link: "#",
  },
  {
    title: "IMAGES FOR FREE SYMBOLS",
    link: "#",
  },
  {
    title: "SYMBOLS ORDER, PROFORMA FOR COMMON SYMBOL UNDER 10B, ETC",
    link: "#",
  },
  {
    title: "MISC. ORDERS REG. ELECTION SYMBOLS",
    link: "#",
  }
];

const ElectionSymbolAllotment = () => {
  return (
    <div className="px-10 py-8 bg-[#f5f9fc] min-h-screen">

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <a href="#" className="text-[#4284d5] hover:underline font-medium">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="#" className="text-[#3683e0] hover:underline font-medium">
              Symbols
            </a>
          </li>
          <li>/</li>
          <li className="text-[#d03ce7] font-semibold">
            Allotment of Symbols (2021–25)
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <h1 className="text-3xl font-semibold text-[#0b376d] border-b-4 border-[#0b376d] pb-3 mb-2">
        Allotment of Election Symbols (2021–25)
      </h1>
         <div className=" md:flex px-5 my-[2.4rem] flex-wrap gap-3 justify-center items-center">
            {listitems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded text-sm shadow-md hover:scale-105 transition"
              >
                {item.title} 
              </a>
            ))}
          </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card – Reserved Symbol */}
        <div className="border-4 border-[#3b9bd9] rounded-xl bg-white shadow-sm hover:shadow-lg transition">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-[#0b376d] uppercase mb-2">
              Allotment of Reserved Symbol under <span className="font-bold">Para 10 and Para 10A</span>
            </h2>
            <p className="text-md text-gray-600 mb-4">Year 2021–25</p>

            <div className="space-y-3">
              {[
                "Bihar Assembly Election – 2025",
                "Delhi, Haryana, Jammu and Kashmir, Jharkhand, Maharashtra Legislative Assembly Election, 2024",
                "Andhra Pradesh, Arunachal Pradesh, Odisha, Sikkim Assembly Election and Lok Sabha, 2024",
                "Archive",
              ].map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="block bg-[#e3f5ff] border border-[#1aa1db] rounded-lg px-4 py-2 text-[#0b376d] font-medium hover:bg-[#cceeff]  hover:scale-[1.01]"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* Right Card – Common Symbol */}
        <div className="border-4 border-[#d03ce7] rounded-xl bg-white shadow-sm hover:shadow-lg transition">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-[#0b376d] uppercase mb-2">
              Allotment of Common Symbol under <span className="font-bold text-[#d03ce7]">Para 10B</span>
            </h2>
            <p className="text-md text-gray-600 mb-4">Year 2021–25</p>

            <div className="space-y-3">
              {[
                "Bihar Assembly Election – 2025",
                "Delhi, Jammu & Kashmir, Jharkhand, Maharashtra Legislative Assembly Election, 2024",
                "Andhra Pradesh, Arunachal Pradesh, Odisha, Sikkim Assembly Election and Lok Sabha, 2024",
                "Archive",
              ].map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="block bg-[#e9d6ff] border border-[#d03ce7] rounded-lg px-4 py-2 text-[#0b376d] font-medium hover:bg-[#dfb8ff] hover:scale-[1.01]"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image bar and Footer */}
      <div className="mt-10">
        <Imagebar />
      </div>
    </div>
  );
};

export default ElectionSymbolAllotment;
