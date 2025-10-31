import React, { useCallback } from "react"; // Import useCallback for memoizing the function
import { Link } from "react-router-dom";
import {
  UserIcon,
  StarIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon, 
  MegaphoneIcon,    
  UsersIcon,        
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Imagebar from "../Components/Imagebar";
 

// --- Reusable Card Components (Unchanged for brevity) ---
const ResponsiveCard = ({ title,link, subtitle, description, icon: Icon, className }) => {
  return (
       <Link to={`${link}`}>
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-4 hover:border-pink-400 min-h-[220px] 
                 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-100 
                 ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center">
            <Icon className="w-10 h-10 text-blue-900" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              {title}
            </h3>
            <p className="text-blue-800 font-semibold mb-2">
              {subtitle}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mt-4">
          {description}
        </p>
      </div>
    </div>
       </Link>
  );
};

const FeatureCard = ({ title,path, description, icon: Icon, iconBgColorClass }) => {
    return (
      <Link to={`${path}`}>
        <div
            className="relative flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                       transition-all duration-300 group"
        >
            {/* Icon Area */}
            <div 
                className={`relative flex-shrink-0 w-full h-32 sm:h-auto sm:w-1/3 p-6 flex items-center justify-center 
                            ${iconBgColorClass} 
                            group-hover:-translate-y-2 transition-transform duration-300`}
            >
                <Icon className="w-16 h-16 text-white" />
            </div>

            {/* Text Content Area */}
            <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                
                {/* Fixed App Icons */}
                <div className="flex items-center gap-2 mt-4">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zM9 13a1 1 0 112 0 1 1 0 01-2 0zm1-8a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1z"/></svg>
                    </span>
                    <span className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zM9 13a1 1 0 112 0 1 1 0 01-2 0zm1-8a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1z"/></svg>
                    </span>
                </div>
            </div>
        </div>
        </Link>
    );
};
// -----------------------------------------------------------


export default function Electors() {
  // --- Improved Scroll Functionality using useCallback and Fallback ---
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  // -----------------------------

  const services = [
    { number: 1, title: "Register in Electoral Roll", description: "Register Online or Download the Form for Registration", path:"/sections/electorals/homepage" },
    { number: 2, title: "Track Application Status", description: "Track Status of Applications Submitted for Registration/Updation in E Roll.", path:"/sections/electorals/homepage" },
    { number: 3, title: "Download Voter ID (E-EPIC)", description: "Download electronic copy of EPIC Card", path:"/sections/electorals/homepage" },
    { number: 4, title: "Update your Details in Electoral Roll", description: "Submit Online or Download Application Form for Shifting of Residence/Correction of Entries in Existing Electoral Roll/Replacement of EPIC.", path:"/sections/electorals/homepage" },
    { number: 5, title: "Saksham App", description: "Mobile App to Provide all Voter Related Services to Person with Disabilities", path:"/sections/electorals/saksham" },
    { number: 6, title: "Submit your Aadhar No.", description: "Letter of Information of Aadhaar number for the Purpose of electoral roll authentication", path:"/sections/electorals/homepage" },
    { number: 7, title: "Deletion", description: "Voter Application Form for Objection for Proposed Inclusion/ Deletion of Name in Existing Electoral Roll", path:"/sections/electorals/homepage" }
  ];

  const infoCards = [
    {
      title: "Search Your Name in",
      subtitle: "Electoral Roll",
      icon: MagnifyingGlassIcon,
      description: "Find your name in Electoral Roll",
      link: "/sections/electorals/search"
    },
    {
      title: "Know Your",
      subtitle: "PC/AC, Polling Station, ERO, BLO",
      icon: StarIcon,
      description: "You may know your Polling Stations details by providing Voter ID (EPIC NO.) number",
      link: "/sections/electorals/know_your_polling_info"
    },
    {
      title: "Service",
      subtitle: "Voter",
      icon: UserIcon,
      description: "Registration of Service Voters",
      link: "/sections/electorals/service_voter_registration"
    },
    {
      title: "Overseas",
      subtitle: "Voters",
      icon: CheckCircleIcon,
      description: "Enroll yourself as Overseas Elector",
      link: "/sections/electorals/homepage"
    }
  ];

  const featureCardsData = [
    {
      title: "Download Forms for Registration / Updation in E-Roll",
      description: "Download physical forms",
      icon: DocumentTextIcon,
      iconBgColorClass: "bg-blue-600",
      path:"/sections/electorals/registration_forms"
    },
    {
      title: "Know your Candidate",
      description: "Find the complete details for candidates including affidavit and Personal Details",
      icon: UserIcon,
      iconBgColorClass: "bg-purple-600",
      path:"/sections/electorals/know_your_candidate"
    },
    {
      title: "cVIGIL : Citizen Vigilance",
      description: "Register complaint against MCC Violation",
      icon: UsersIcon,
      iconBgColorClass: "bg-blue-600",
      path:"/sections/electorals/citizen_vigiliance"
    },
    {
      title: "Register Complaint",
      description: "Register your grievance with ECI",
      icon: DevicePhoneMobileIcon,
      iconBgColorClass: "bg-purple-600",
      path:"/sections/electorals/national_grievance_portal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Electors</h1>
          <div className="w-16 h-1 bg-pink-600 mx-auto mt-2"></div>
        </div>

        {/* --- All sections containing content --- */}
        {/* ... (First two sections) ... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg transform -rotate-1"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-lg overflow-hidden h-full border-4 border-purple-400 hover:border-8 hover:border-pink-500 transition-all duration-300">
              <img
                src="/voter-pic-elector.jpg"
                alt="Person holding voter ID card"
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110 cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-4">
            {services.map((service) => (
              <Link to={`${service.path}`}>
              <div
                key={service.number}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-purple-200 hover:border-4 hover:border-pink-400"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-900">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-purple-900 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="voter-pic-elector-02.jpg"
                    alt="Voter finger with ink"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                         
                <ResponsiveCard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  icon={card.icon}
                  link={card.link}
                />
             
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCardsData.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconBgColorClass={card.iconBgColorClass}
                path={card.path}
              />
            ))}
          </div>
        </div>
        <Imagebar/>
        {/* --- End of sections containing content --- */}


        {/* Scroll to Top Button (FIXED - using the improved function) */}
        <button 
          type="button"
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
          onClick={scrollToTop} 
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}