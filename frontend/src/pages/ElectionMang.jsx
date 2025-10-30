import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Landmark, CalendarDays, Building2, BookOpen, ClipboardCheck } from "lucide-react";
import ImageBar from "../Components/Imagebar"; // This line is included as per user request, despite causing a known environment error.

const tabs = [
  { name: "Elections" },
  { name: "Results" },
  { name: "Conduct of Elections" },
  { name: "Reference Documents" },
];

const ElectionMang = () => {
  const [activeTab, setActiveTab] = useState("Elections");

  // Reusable component for the basic header style
  const BasicHeader = ({ title }) => (
    <h2 className="text-center text-2xl font-semibold text-[#0b376d] relative mb-8">
      <span className="px-4 bg-[#f0f7fb] relative z-10">{title}</span>
      <span className="absolute left-1/2 top-1/2 w-40 border-b-2 border-[#d03ce7] -translate-x-1/2"></span>
    </h2>
  );
  
  // Helper component for the Past Elections/Reference Docs section title (which uses a different style)
  const PastElectionsHeader = ({ title }) => (
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        <span className="border-t-4 border-[#7B3FE4] mx-2 inline-block w-12 align-middle"></span>
        {title}
        <span className="border-t-4 border-[#7B3FE4] mx-2 inline-block w-12 align-middle"></span>
      </h2>
  );

  // Helper component for the Results Statistics section
  const ResultsStatistics = () => {
    const statLinks = [
      "General Parliamentary Elections Results",
      "State Legislative Assemblies Elections",
      "Link to Form 20",
      "Detailed Bye-elections Results",
      "Bye-elections Results (Form 21 D & E)",
      "Miscellaneous Statistics",
    ];

    return (
      <section className="mt-14 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12 relative">
          <span className="border-t-4 border-[#d03ce7] mx-2 inline-block w-10 align-middle"></span>
          Results Statistics
          <span className="border-t-4 border-[#d03ce7] mx-2 inline-block w-10 align-middle"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statLinks.map((link, index) => (
            <Link 
              key={index}
              to="#"
              // ADDED: Hover effect for a more interactive button-like feel
              className="flex items-center bg-[#f5f9ff] rounded-lg p-5 shadow-sm hover:shadow-lg hover:bg-pink-50 transition-all duration-300" 
            >
              <div className="bg-pink-100 p-2 rounded-full mr-4">
                <ClipboardCheck size={20} className="text-pink-500" />
              </div>
              <span className="text-[#0b376d] font-medium">{link}</span>
            </Link>
          ))}
        </div>
      </section>
    );
  };
  
  // Helper component for the Conduct of Elections links
  const ConductOfElectionsLinks = () => {
      const conductLinks = [
          "Handbook/Manuals/Model Check list",
          "Compendium of Instructions",
          "Training Material",
          "FAQs",
          "Grievance redressal",
          "Scrutiny of Nominations",
          "Postal ballot",
          "Permission Management",
          "Citizen Complain during MCC",
          "Observer Portal"
      ];
      
      return (
          <section className="mt-14 w-full">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-12 relative">
                  <span className="border-t-4 border-[#d03ce7] mx-2 inline-block w-10 align-middle"></span>
                  Conduct of Elections
                  <span className="border-t-4 border-[#d03ce7] mx-2 inline-block w-10 align-middle"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conductLinks.map((link, index) => (
                      <Link 
                          key={index}
                          to="#"
                          // ADDED: Hover effect for list links
                          className="flex items-center bg-[#f5f9ff] rounded-lg p-5 shadow-sm hover:shadow-lg hover:bg-pink-50 transition-all duration-300"
                      >
                          <div className="bg-pink-100 p-2 rounded-full mr-4">
                              <ClipboardCheck size={20} className="text-pink-500" />
                          </div>
                          <span className="text-[#0b376d] font-medium">{link}</span>
                      </Link>
                  ))}
              </div>
          </section>
      );
  };

  // Helper component for Reference Documents Card (based on images)
  const DocumentCard = ({ title, description }) => (
    // UPDATED: Added hover:scale-105 for a subtle lift effect
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl hover:scale-[1.01] transition-all duration-300"> 
        <div>
            <div className="flex items-center mb-3">
                <ClipboardCheck size={28} className="text-pink-600 mr-3" />
                <h3 className="text-lg font-bold text-[#0b376d]">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
        <Link to="#" className="mt-4 inline-flex justify-end text-[#7B3FE4] font-semibold text-sm hover:text-[#422c8c]">
            <ArrowRight size={20} />
        </Link>
    </div>
  );


  return (
    // Outer Container: Manages full-width background and vertical flow
    <div className="bg-[#f0f7fb] min-h-screen flex flex-col items-center pt-10"> 
      
      {/* 1. Main Content Area: CONSTRAINED (max-w-6xl) and PADDED */}
      <div className="w-full max-w-6xl px-4 flex flex-col items-center pb-20">
        
        {/* Page Header */}
        <div className="text-center w-full">
          <h1 className="text-3xl font-extrabold text-[#0b376d] tracking-wide">
            ELECTION MANAGEMENT
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            India is a constitutional democracy with a parliamentary system of government, 
            and at the heart of the system is a commitment to hold regular, free and fair elections.
          </p>
          <div className="mt-3 flex justify-center">
            <div className="w-8 border-b-4 border-[#d03ce7] rounded-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-8 py-3 font-semibold border border-[#0b376d] transition-all duration-300 text-base md:text-lg ${
                activeTab === tab.name
                  ? "bg-[#0b376d] text-white"
                  : "bg-white text-[#0b376d] hover:bg-[#0b376d] hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* --- TAB CONTENTS START HERE --- */}
        <div className="w-full mt-10"> 

          {/* 1. 🗳️ Elections Tab Content */}
          {activeTab === "Elections" && (
            <>
              {/* Current Elections */}
              <section className="mt-8">
                <BasicHeader title="Current Elections" />
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="bg-gradient-to-r from-[#422c8c] to-[#0986b3] text-white rounded-lg p-6 flex justify-between items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 shadow-lg hover:brightness-110">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full"><Users className="text-white w-6 h-6" /></div>
                      <div>
                        <h3 className="font-bold text-lg">ASSEMBLY ELECTION</h3>
                        <p className="text-sm">General Election to Legislative Assembly of <span className="font-semibold">Bihar</span></p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  {/* Card 2 */}
                  <div className="bg-gradient-to-r from-[#422c8c] to-[#0986b3] text-white rounded-lg p-6 flex justify-between items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 shadow-lg hover:brightness-110">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full"><Users className="text-white w-6 h-6" /></div>
                      <div>
                        <h3 className="font-bold text-lg">BYE ELECTIONS</h3>
                        <p className="text-sm">Schedule for Bye-election to 8 Assembly Constituencies...</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </section>

              {/* Previous Elections */}
              <section className="mt-20 w-full">
                <BasicHeader title="Previous Elections" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-[#422c8c] to-[#0986b3] text-white rounded-lg p-6 flex justify-between items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 shadow-lg hover:brightness-110">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full"><Users className="text-white w-6 h-6" /></div>
                      <div>
                        <h3 className="font-bold text-lg">BYE ELECTIONS</h3>
                        <p className="text-sm">Schedule for Bye-election to 5 Assembly Constituencies...</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-[#422c8c] to-[#0986b3] text-white rounded-lg p-6 flex justify-between items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 shadow-lg hover:brightness-110">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full"><Users className="text-white w-6 h-6" /></div>
                      <div>
                        <h3 className="font-bold text-lg">ASSEMBLY ELECTION</h3>
                        <p className="text-sm">General Election to Legislative Assembly of <span className="font-semibold">NCT of Delhi</span></p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </section>

              {/* Past Elections Section */}
              <section className="mt-20 w-full">
                <div className="relative py-16 px-6 bg-[#f5f9ff] overflow-hidden rounded-2xl">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#7B3FE4] to-transparent z-0"></div>
                  <div className="relative z-10">
                    <PastElectionsHeader title="Past Elections" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                      {/* Past Election Cards */}
                      {["General Elections", "Assembly Elections", "Bye Elections"].map((title, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 relative w-full max-w-sm text-center hover:scale-[1.03]">
                          <div className="flex justify-center -mt-14 mb-4">
                            <div className="bg-white p-4 rounded-full shadow-md"><Users size={40} color="#b5179e" /></div>
                          </div>
                          <h3 className="text-2xl font-semibold text-[#002855] mb-3">{title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {title === "General Elections" ? "General Election was held to constitute the Lok Sabha, electing members of parliament for all 543 parliamentary constituencies of India." : title === "Assembly Elections" ? "Legislative Assembly elections in India are held every 5 years for the Vidhan Sabha." : "Bye-Elections are used to fill elected offices that have become vacant between general elections."}
                          </p>
                          <div className="flex justify-end mt-4"><ArrowRight className="text-gray-500 hover:text-[#7B3FE4] cursor-pointer" /></div>
                        </div>
                      ))}
                    </div>

                    {/* Term of the Houses */}
                    <div className="mt-16 flex justify-center">
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full max-w-4xl hover:scale-[1.01]">
                        <h3 className="text-2xl font-semibold text-[#002855] mb-3">Term of the Houses</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Detail of Terms of the Union Parliament and the Legislative Assemblies.</p>
                        <div className="flex justify-end mt-4"><ArrowRight className="text-gray-500 hover:text-[#7B3FE4] cursor-pointer" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Presidential Elections Section */}
              <section className="bg-[#f5f9fc] py-12 px-6 md:px-12 lg:px-20 mt-10 rounded-xl">
                <BasicHeader title="Presidential Elections" />
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Presidential Election 2022", "Presidential Election 2017",
                    "Presidential Election 2012", "Presidential Election 2007",
                    "Presidential Election 2002", "Presidential Election 1997",
                  ].map((item, index) => (
                    <Link key={index} to="#" className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <Landmark className="text-[#d03ce7]" size={28} />
                      <span className="text-[#0b376d] font-semibold">{item}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* 2. 🏆 Results Tab Content */}
          {activeTab === "Results" && (
            <section className="mt-14 w-full">
                {/* Results Banner based on uploaded image */}
                <div className="bg-gradient-to-r from-[#7B3FE4] to-[#0986b3] text-white p-16 rounded-xl shadow-xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold mb-4 border-b-2 border-white/50 inline-block px-4 py-1">
                            Election Results
                        </h2>
                        <p className="text-sm font-light leading-relaxed mb-8">
                            ECI is displaying the information as being filled in the system by the Returning Officers from their respective Counting Centres. The final data for each AC/PC will be shared in Form-20.
                        </p>
                        <Link to="#" className="inline-flex items-center justify-center bg-white text-[#422c8c] font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-[1.03]">
                            View Details <ArrowRight className="w-5 h-5 ml-3" />
                        </Link>
                    </div>
                </div>
                
                {/* --- Results Statistics --- */}
                <ResultsStatistics />

            </section>
          )}
          
          {/* 3. ✅ Conduct of Elections Tab Content */}
          {activeTab === "Conduct of Elections" && (
            <ConductOfElectionsLinks />
          )}

          {/* 4. 📚 Reference Documents Tab Content */}
          {activeTab === "Reference Documents" && (
            <section className="mt-14 w-full">
              {/* UPDATED: Added outer container for gradient background */}
              <div className="relative py-16 px-6 bg-[#f5f9ff] overflow-hidden rounded-2xl">
                {/* Gradient on lower half */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#7B3FE4] to-transparent z-0"></div>

                <div className="relative z-10">
                  <PastElectionsHeader title="Reference Documents" />
                  
                  {/* First Row of Cards (Image 1) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <DocumentCard 
                        title="Important Instructions"
                        description="Important instructions for election officials."
                    />
                    <DocumentCard 
                        title="Electoral Roll"
                        description="The section contain information related to Summery Revision Calendar, E-Roll Data, Form for registration in E-Roll, Instructions related to E-Roll and EPIC, Manual on Electoral Roll, Link to claim and objection etc."
                    />
                    <DocumentCard 
                        title="Election Law"
                        description="Election Law Detailed information on Manual of Election Laws, Landmark Judgement, Procedure/Proposed Reforms/ Judgement on Electoral Law, Compendium of Instructions of Conduct of Elections, Model Check List, Manuals and Handbooks"
                    />
                  </div>

                  {/* Second Row of Cards (Image 2) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DocumentCard 
                        title="Model Code of Conduct"
                        description="Model Code of Conduct for the guidance of political parties and candidates."
                    />
                    <DocumentCard 
                        title="Judicial Reference"
                        description="Judicial Reference: The section contain information related to Office of Profit (Reference Cases, Order and Notices of the Commission, List of Disqualified Persons etc.)"
                    />
                    <DocumentCard 
                        title="Delimitation"
                        description="Process of Fixing Limits or Boundaries of Territorial Constituencies in a Country or a Province having a Legislative Body."
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-gray-600">Looking for a specific circular? Use the search bar below.</p>
                    <input type="text" placeholder="Search Documents..." className="mt-3 p-3 w-full max-w-lg border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-[#7B3FE4] focus:border-transparent transition-all" />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      
      {/* 2. ImageBar (Full Width) - Included as requested */}
      <div className="w-full">
        <ImageBar />
      </div> 
      
    </div>
    
  );
};

export default ElectionMang;
