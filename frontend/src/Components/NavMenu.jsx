// File: EciFullMenu.jsx

import React from 'react';
import { FaTimes } from 'react-icons/fa';

const NavMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#003049e6] text-white transition-transform duration-500 ease-in-out z-50 overflow-y-auto ${
        menuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Header */}

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-sm leading-6">
        {/* VOTER'S CORNER */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">VOTER'S CORNER</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Electors Registration</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Track Your Registration Status</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Offline Forms For Registration In E-Roll</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Know Your Polling Booth</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Know Your BLO, ERO & DEO</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>List of Booth Level Officers (BLO)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Draft & Final Electoral Roll w.r.t. 01.01.2025 and Supplement-2 w.r.t. 01.04.2025</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Search in Electoral Roll</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Form 9, 10, 11, 11A, 11B</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>List Of Claims & Objections in SSR-2025</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Monthly list of Additions, Modifications & Deletions</li>
          </ul>
        </div>

        {/* NATIONAL INFO */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">VOTER INFORMATION</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>National Voters Day</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Electors Registration (04-Tirhut Graduate Constituency)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>GC - Tirhut Electoral Roll (Final Roll W.R.T. 01.11.2024)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>TC/GC Electoral Search</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Claims and Objections (TC & GC)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Register Complaints</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Service Voters and Overseas Voters</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>PwD Voters</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>SVEEP (Voter’s Education)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Voter Helpline No: 1950</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Fact Check</li>
          </ul>
        </div>

        {/* ELECTIONS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">ELECTIONS</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Important Instructions</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Status of Ex-Gratia Payments</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>SEMP/DEMP</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Past Elections</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Electoral Roll</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>ERMS</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Election Law</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Model Code of Conduct</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Judicial References</li>
          </ul>
        </div>

        {/* MEDIA/PUBLICATION */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">MEDIA/PUBLICATION</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Workshop/Events</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Media Corner</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Statistical Report</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Compendium of Instructions</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Press Release</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Handbooks/ Manuals/ Model Check List</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Latest News</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Right to Information</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Tender</li>
          </ul>
        </div>

        {/* CANDIDATE/POLITICAL PARTIES */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">CANDIDATE/POLITICAL PARTIES</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Political Parties (Guidelines/Instructions)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Candidate Affidavits</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Candidate Nominations/ Other forms</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>List of Political Parties/Election Symbols by ECI</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Candidate/Political Parties Expenditure Balance Sheets</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>List of Disqualified Persons</li>
          </ul>
        </div>

        {/* EVM/VVPAT */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">EVM/VVPAT</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>List of EVMs after First & Second Randomisation for General Elections 2024</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Credibility of EVM</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>EVM Brochure for Electors</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>EVM Brochure for Presiding Officers</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>EVM Brochure for Candidates and Political Parties</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>FLC OK EVMs for Upcoming Lok Sabha Election 2024</li>
          </ul>
        </div>

        {/* CEO OFFICIALS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">CEO OFFICIALS</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>SPARROW</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Budget/Allotments</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Organizational Structure</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>DEO’s Portal</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Important Instructions & Letters (CEO Officials)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>E-Office</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Asset Declarations</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Transfers/Postings/Promotions</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        {/* ADDITIONAL MATERIALS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">REFERENCE MATERIAL</h3>
          <ul className="space-y-1">
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Handbook References</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Important Maps</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Training Materials</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Hand Books</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >e-Books</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Question Bank</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >List of AC’s with Division and District</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Format 1-8 (Final Roll)</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Form-20 | Form-21E</li>
            <li className='hover:text-slate-200 text-white hover:translate-x-1 transition-all duration-200 cursor-pointer' >Polling Station List</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
