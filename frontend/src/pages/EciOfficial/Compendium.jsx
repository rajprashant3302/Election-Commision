import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";

const ITEMS_PER_PAGE = 10;

const initialData = [
  { title: "Compendium of Instructions On Election Expenditure Monitoring (December 2024, Document 6 – Edition 12)", date: "Dec 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "Compendium of Instructions On Election Expenditure Monitoring (August 2024, Document 6 – Edition 11)", date: "Aug 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "Compendium of Instructions, 2024 VOL-II", date: "May 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "Compendium of Instructions on Model Code of Conduct, 2024.", date: "May 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "Compendium of Instructions on Election Expenditure Monitoring (January, 2024) in English", date: "Jan 2024", links: [{ url: "#", label: "English PDF" }] },
  { title: "Compendium of Instructions on Election Expenditure Monitoring (January, 2024) in Hindi", date: "Jan 2024", links: [{ url: "#", label: "Hindi PDF" }] },
  { title: "Amended Guidelines for Party registration (Item 7)", date: "Dec 2019", links: [{ url: "#", label: "Volume I" }, { url: "#", label: "Annexure" }] },
  { title: "Registration of political parties – issue of additional guidelines (Item 8)", date: "Jun 2014", links: [{ url: "#", label: "Document PDF" }] },
  { title: "Registration of Political Parties - Choice of Name (Item 9)", date: "May 2014", links: [{ url: "#", label: "Part A" }, { url: "#", label: "Part B" }] },
  { title: "Political Parties Registration Guidelines (Item 10)", date: "May 2014", links: [] },
  { title: "Supplementary Instruction Manual (Item 11)", date: "Jan 2025", links: [{ url: "#", label: "New PDF" }] },
  { title: "Electoral Roll Revisions (Item 12)", date: "Feb 2025", links: [{ url: "#", label: "Form 6" }] },
  { title: "Voter Awareness Campaign (Item 13)", date: "Mar 2025", links: [{ url: "#", label: "Plan Document" }] },
  { title: "Digital Elections Handbook (Item 14)", date: "Apr 2025", links: [{ url: "#", label: "Guide" }] },
  { title: "Training of Polling Staff (Item 15)", date: "May 2025", links: [{ url: "#", label: "Schedule" }] },
];

const PdfButton = ({ link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1.5 text-sm font-semibold 
               text-white bg-blue-600 rounded-md shadow-sm transition-all
               hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
  >
    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    {label}
  </a>
);

const InstructionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperClasses = "shadow-md rounded-lg overflow-hidden transition-all duration-300 " 
    + (isOpen ? "bg-[#e5f5ff] shadow-xl" : "bg-white hover:bg-gray-50");

  const titleButtonClasses = "w-full text-left flex items-center justify-between py-4 px-4 pr-6 font-medium focus:outline-none border-l-4 border-blue-800 transition-colors";

  const linksContainerClasses = `p-4 pt-0 bg-gray-50 ${isOpen ? 'block' : 'hidden'}`;
  
  const innerLinkClasses = "flex items-center text-sm font-medium text-gray-700 p-2 rounded-md hover:bg-white transition-colors";

  if (item.links.length === 1) {
    return (
      <div className="flex items-center justify-between py-4 px-4 pr-6 bg-white border-l-4 border-blue-800 shadow-sm rounded-lg hover:bg-gray-50 transition-colors">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">📅 {item.date}</p>
        </div>
        <PdfButton link={item.links[0].url} label={`Download ${item.links[0].label}`} />
      </div>
    );
  }

  if (item.links.length === 0) {
    return (
      <div className="flex items-center py-4 px-4 pr-6 bg-white border-l-4 border-gray-400 shadow-sm rounded-lg">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-500">{item.title}</h3>
          <p className="text-sm text-gray-400 mt-0.5">📅 {item.date} (No documents available)</p>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button
        className={titleButtonClasses}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">📅 {item.date}</p>
        </div>

        <div className="flex items-center text-blue-800 gap-2">
          <span className="text-sm font-semibold">
            {isOpen ? "Hide Links" : `${item.links.length} Documents`}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>

      <div className={linksContainerClasses}>
        <div className="flex flex-col space-y-2">
          {item.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={innerLinkClasses}>
              <span className="text-blue-600 font-bold w-12 shrink-0">PDF {i + 1}:</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Compendium = () => {
  const data = initialData;

  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = data.slice(startIndex, endIndex);

  const setPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      const buttonClasses = isActive
        ? "w-8 h-8 flex items-center justify-center text-white bg-blue-600 rounded-lg font-semibold shadow-md"
        : "w-8 h-8 flex items-center justify-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-sm";

      pageButtons.push(
        <button
          key={i}
          className={buttonClasses}
          onClick={() => setPage(i)}
          aria-current={isActive ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        className={`w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm transition ${
          currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    );

    return (
      <div className="flex items-center space-x-1">
        {pageButtons}
      </div>
    );
  };

  return (
    <div className="px-10 py-8 bg-[#f5f9fc] min-h-screen">
      {/* <Nav /> */}
      
      <nav className="text-sm text-gray-600 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          <li><a href="#" className="text-[#4284d5] hover:underline font-medium">Home</a></li>
          <li>/</li>
          <li><a href="#" className="text-[#3683e0] hover:underline font-medium">ECI Officials</a></li>
          <li>/</li>
          <li className=" text-[#d03ce7] font-semibold">Compendium of Instructions</li>
        </ol>
      </nav>

      <div className="flex justify-between items-end border-b-4 border-[#0b376d] pb-3 mb-8">
        <h1 className="text-3xl font-semibold text-[#0b376d]">
          Compendium of Instructions
        </h1>
        {renderPagination()}
      </div>

      <div className="space-y-4 mb-12">
        {currentItems.map((item, index) => (
          <InstructionItem key={startIndex + index} item={item} />
        ))}
      </div>

      <div className="mt-5">
        <Imagebar />
      </div>
    </div>
  );
};

export default Compendium;