import React from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";
const guidelines = [
  {
    title: "1. Form A & Form B - For Lok Sabha, Vidhan Sabha and State Legislative Council elections",
    links: ["#", "#"],
  },
  {
    title:
      "2. Form AA & Form BB-For Rajya Sabha and State Legislative Council elections",
    links: ["#", "#"],
  },
  {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#"],
  },
  {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#", "#"],
  },
  {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#","#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#"],
  },
  {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#", "#"],
  },
   {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#", "#"],
  },
   {
    title:
      "3. Form-2A-Nomination Paper for Contesting Election to the Lok Sabha (House of the People)",
    links: ["#", "#"],
},
{
    title: "4. Form-2B-Nomination Paper for Contesting Election to the Vidhan Sabha (Legislative Assembly)",
    links: ["#", "#"],
  },
];

const Nomination = () => {
  return (
    <div className="px-10 py-8 bg-[#f5f9fc] min-h-screen">
     {/*Navbar */}
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
              Candidates 
            </a>
          </li>
          <li>/</li>
          <li className=" text-[#d03ce7] font-semibold">
            Candidate Nomination and Other Forms
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <h1 className="text-3xl font-semibold text-[#0b376d] border-b-4 border-[#0b376d] pb-3 mb-8">
        Candidate Nomination and Other Forms
      </h1>

      {/* Guidelines List */}
      <div className="space-y-6 mb-12 cursor-pointer">
        {guidelines.map((item, index) => (
          <div
            key={index}
            className="bg-[#cceeff] border border-[#1aa1db] rounded-xl p-4 shadow-sm hover:shadow-lg transition hover:scale-[1.02] hover:bg-[#aae3ff]"
          >
            <h3 className="text-xl font-semibold text-[#0b376d] mb-2">
              {item.title}
            </h3>
            <div className="flex gap-3">
              {item.links.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  className="flex items-center gap-1 bg-[#fff3cd] border border-[#ffeeba] text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-[#ffe38c] transition"
                >
                  📄 PDF {i + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">

      <Imagebar />
      </div>
    </div>
  );
};

export default Nomination;
