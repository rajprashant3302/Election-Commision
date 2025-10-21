import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";

const ITEMS_PER_PAGE = 10;

const handbookData = [
  { title: "OBS HAND BOOK – AUGUST 2024 VOL 1", date: "Aug 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "OBS HAND BOOK – AUGUST 2024 VOL 2", date: "Aug 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "OBS HAND BOOK – AUGUST 2024 VOL 3", date: "Aug 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "OBSERVER HANDBOOK VOLUME 2, FEB 2024", date: "Feb 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "OBSERVER HANDBOOK VOLUME 1, FEB 2024", date: "Feb 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "HANDBOOK ON MEDIA MATTERS FOR CEOs & DEOs", date: "Jan 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "Handbook on Media Matters for CEOs and DEOs 2024", date: "Jan 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "HANDBOOK FOR CANDIDATE 2023", date: "Dec 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "OBSERVER HANDBOOK VOLUME 1 (2023)", date: "Aug 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "HANDBOOK OF ELECTION LAW", date: "Jul 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "OBSERVER HANDBOOK VOLUME 2 (2023)", date: "Feb 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "EVM & VVPAT HANDBOOK (ENGLISH)", date: "Jan 2023", links: [{ url: "#", label: "PDF" }] },
];

const manualsData = [
  { title: "MANUAL OF ELECTION LAW (Vol I, 2024)", date: "Jan 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "MANUAL ON MODEL CODE OF CONDUCT (2023)", date: "Oct 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "MANUAL ON ELECTION EXPENDITURE MONITORING (2023)", date: "Aug 2023", links: [{ url: "#", label: "PDF" }] },
];

const checkListData = [
  { title: "MODEL CHECK LIST FOR OBSERVERS", date: "Mar 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "POLLING STATION CHECK LIST", date: "Feb 2024", links: [{ url: "#", label: "PDF" }] },
  { title: "CHECK LIST FOR ELECTION EXPENSE", date: "Dec 2023", links: [{ url: "#", label: "PDF" }] },
  { title: "MODEL CHECK LIST FOR CANDIDATES", date: "Dec 2023", links: [{ url: "#", label: "PDF" }] },
];

const TABS_CONFIG = {
  'Handbooks': handbookData,
  'Manuals': manualsData,
  'Model Check List': checkListData,
};

// Reverted PDF Download Button with clean styling
const PdfButton = ({ link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1.5 text-sm font-semibold 
               text-blue-700 bg-blue-100 rounded-full shadow-inner transition-all
               hover:bg-blue-200 hover:text-blue-800 focus:outline-none ring-1 ring-blue-300 whitespace-nowrap"
  >
    {/* Previous PDF Icon (File with down arrow) */}
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

// Individual list item with accordion logic
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
        <PdfButton link={item.links[0].url} label={`View ${item.links[0].label}`} />
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
          <span className="text-sm font-semibold">{isOpen ? "Hide Documents" : `${item.links.length} Documents`}</span>
          <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>
      <div className={linksContainerClasses}>
        <div className="flex flex-col space-y-2">
          {/* Note: PdfButton is now applied inside the toggled content */}
          {item.links.map((link, i) => (
            <div key={i} className="flex items-center justify-between pl-4 pr-2">
              <span className="text-sm font-medium text-gray-700">
                <span className="text-blue-600 font-bold mr-2">PDF {i + 1}:</span>
                {link.label}
              </span>
              <PdfButton link={link.url} label="Download" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component handling dynamic pagination and tabs
const DocumentBrowser = () => {
  const [activeTab, setActiveTab] = useState('Handbooks');
  const [currentPage, setCurrentPage] = useState(1);

  const data = TABS_CONFIG[activeTab];

  // Logic to handle tab changes and reset page
  const handleTabChange = (tabName) => {
      setActiveTab(tabName);
      setCurrentPage(1);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, endIndex);

  const setPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Renders the pagination buttons
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
      
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          <li><a href="#" className="text-[#4284d5] hover:underline font-medium">Home</a></li>
          <li>/</li>
          <li><a href="#" className="text-[#3683e0] hover:underline font-medium">ECI Officials</a></li>
          <li>/</li>
          <li className=" text-[#d03ce7] font-semibold">Handbooks/Manuals/Model Check List</li>
        </ol>
      </nav>

      {/* Tabs / Toggle Buttons */}
      <div className="flex mb-8 border-b-2 border-gray-300">
        {Object.keys(TABS_CONFIG).map((tabName) => {
          const isActive = tabName === activeTab;
          const tabClasses = isActive
            ? "bg-blue-800 text-white border-blue-800"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";

          return (
            <button
              key={tabName}
              className={`px-6 py-3 text-lg font-semibold border-x border-t rounded-t-lg transition-colors ${tabClasses}`}
              onClick={() => handleTabChange(tabName)}
            >
              {tabName}
            </button>
          );
        })}
      </div>

      {/* Results and Pagination Header */}
      <div className="flex justify-between items-end pb-3 mb-8">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600 font-medium">
            Found **{data.length}** Result(s)
          </span>
        </div>
        
        {renderPagination()}
      </div>

      {/* List items for the current page */}
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

export default DocumentBrowser;