import React from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";
const guidelines = [
  {
    title: "Amended Guidelines for Party registration",
    date: "Monday 02 Dec 2019, 7:32 PM",
    links: ["#", "#"],
  },
  {
    title:
      "Registration of political parties under section 29 A of the Representation of the People Act, 1951 – issue of additional guidelines",
    date: "Friday 20 Jun 2014, 5:30 AM",
    links: ["#", "#"],
  },
  {
    title:
      "Registration of Political Parties - Choice of Name for Political Party",
    date: "Sunday 25 May 2014, 5:30 AM",
    links: ["#", "#"],
  },
  {
    title: "Political Parties Registration Guidelines",
    date: "Sunday 25 May 2014, 5:30 AM",
    links: ["#", "#"],
  },
];

const politicalPartyRegistration = [
  {
    name: "New parties seeking registration (Dated 24/09/2025)",
    date: "Wednesday 24 Sep 2025, 9:44 AM",
    link: "#",
  },
  {
    name: "New parties seeking registration (Dated 24/09/2025)",
    date: "Wednesday 24 Sep 2025, 9:44 AM",
    link: "#",
  },
  {
    name: "New parties seeking registration (Dated 24/09/2025)",
    date: "Wednesday 24 Sep 2025, 9:44 AM",
    link: "#",
  },
  {
    name: "New parties seeking registration (Dated 24/09/2025)",
    date: "Wednesday 24 Sep 2025, 9:44 AM",
    link: "#",
  },
];

const NewPartyRegistration = () => {
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
              Political Parties
            </a>
          </li>
          <li>/</li>
          <li className=" text-[#d03ce7] font-semibold">
            Political Parties Registration
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <h1 className="text-3xl font-semibold text-[#0b376d] border-b-4 border-[#0b376d] pb-3 mb-8">
        Guidelines/Instructions
      </h1>

      {/* Guidelines List */}
      <div className="space-y-6 mb-12">
        {guidelines.map((item, index) => (
          <div
            key={index}
            className="bg-[#cceeff] border border-[#1aa1db] rounded-xl p-4 shadow-sm hover:shadow-lg transition hover:scale-[1.02] hover:bg-[#aae3ff]"
          >
            <h3 className="text-xl font-semibold text-[#0b376d] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 flex items-center gap-2 mb-3">
              <span>📅</span> {item.date}
            </p>
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

      {/* Political Parties Section */}
      <h2 className="text-2xl font-semibold text-[#0b376d] border-b-2 border-[#0b376d] pb-2 mb-6">
        Political Parties Registration – New parties seeking registration
      </h2>

      <div className="space-y-4">
        {politicalPartyRegistration.map((party, index) => (
          <div
            key={index}
            className="bg-white border border-[#dceaf3] rounded-xl p-4 hover:shadow-lg hover:scale-[1.01] transition"
          >
            <h4 className="text-lg font-semibold text-[#0b376d] mb-1">{party.name}</h4>
            <p className="text-md text-gray-700 flex items-center gap-2">
              <span>📅</span> {party.date}
            </p>
            <a
              href={party.link}
              className="inline-block mt-3 bg-[#cfe8ff] text-[#0b376d] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#b7dcff] transition"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
      <div className="mt-5">

      <Imagebar />
      </div>
    </div>
  );
};

export default NewPartyRegistration;
