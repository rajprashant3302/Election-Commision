import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryBar from '../Components/Imagebar';
// --- DATA (UPDATED with Platform and Target Audience) ---
const mobileAppsData = [
  {
    id: 'kyc-eci',
    title: 'KYC-ECI',
    platform: 'Mobile',
    targetAudience: 'Citizens & Voters',
    description: 'View affidavits and criminal antecedents of candidates to make an informed choice.',
    longDescription: 'The KYC-ECI (Know Your Candidate) app is a crucial tool for voter awareness and transparency. It provides citizens with easy access to the affidavits filed by candidates, including their assets, liabilities, educational qualifications, and, most importantly, any declared criminal antecedents. This data is sourced directly from the ENCORE nomination portal, ensuring its authenticity.',
    bgColor: 'bg-pink-50 border-pink-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/kyc-eci.png',
    links: ['android', 'ios'],
    features: [ 'View candidate affidavit details', 'Check criminal antecedents', 'Data sourced directly from nomination (ENCORE)', 'Promotes transparency in elections' ],
    gallery: [ 'https://placehold.co/600x400/fecdd3/b91c1c?text=KYC+Screenshot+1', 'https://placehold.co/600x400/fecdd3/b91c1c?text=KYC+Screenshot+2' ]
  },
  {
    id: 'suvidha-candidate',
    title: 'Suvidha Candidate',
    platform: 'Mobile',
    targetAudience: 'Candidates & Political Parties',
    description: 'Track the status of nominations and permission requests for rallies and meetings.',
    longDescription: 'The Suvidha Candidate app acts as a single-window system for candidates and political parties to apply for various permissions required during the election period, such as for holding rallies, meetings, and using vehicles. It streamlines the process, reduces paperwork, and allows candidates to track the real-time status of their applications and nomination filings.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/suvidha-candidate.png',
    links: ['android', 'ios'],
    features: [ 'Submit permission requests online', 'Track real-time status of applications', 'View nomination status', 'Reduces paperwork and physical visits' ],
    gallery: [ 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Suvidha+1', 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Suvidha+2' ]
  },
  {
    id: 'encore-nodal',
    title: 'Encore Nodal App',
    platform: 'Mobile',
    targetAudience: 'Election Officials',
    description: 'Allows Nodal Officers to process permission requests and objections on the go.',
    longDescription: 'The Encore Nodal App is designed for government officials (Nodal Officers) who are responsible for processing permission requests filed through the Suvidha portal. The app provides push notifications for new requests, allowing officers to view details and grant or deny permissions directly from their mobile device, ensuring a timely and efficient clearance process.',
    bgColor: 'bg-orange-50 border-orange-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    links: ['android', 'ios'],
    features: [ 'Receive push notifications for new requests', 'Process Objections/No-Objections directly', 'View application details on the go', 'Ensures timely clearance of permissions' ],
    gallery: [ 'https://placehold.co/600x400/ffedd5/c2410c?text=Encore+1', 'https://placehold.co/600x400/ffedd5/c2410c?text=Encore+2' ]
  },
  {
    id: 'voter-turnout',
    title: 'Voter Turnout',
    platform: 'Mobile',
    targetAudience: 'Citizens, Media & Officials',
    description: 'Provides 2-hourly voter turnout trends to the public on polling day.',
    longDescription: 'The Voter Turnout app provides near real-time, authenticated voter turnout data on polling day. The data is updated approximately every two hours and is broken down by state, constituency, and gender. This promotes transparency and gives the public and media access to accurate turnout trends as they happen.',
    bgColor: 'bg-green-50 border-green-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/voter-turnout.png',
    links: ['android', 'ios'],
    features: [ 'View real-time voter turnout data', 'State and constituency-wise breakdown', 'Gender-wise turnout percentages', 'Data updated every 2 hours on poll day' ],
    gallery: [ 'https://placehold.co/600x400/dcfce7/15803d?text=Turnout+1', 'https://placehold.co/600x400/dcfce7/15803d?text=Turnout+2' ]
  },
  {
    id: 'cvigil',
    title: 'cVIGIL',
    platform: 'Mobile',
    targetAudience: 'Citizens & Voters',
    description: 'Empowers citizens to report Model Code of Conduct violations in real-time.',
    longDescription: 'cVIGIL, standing for "Vigilant Citizen," empowers any citizen to report violations of the Model Code of Conduct (MCC). Users can anonymously submit photo or video evidence of malpractice, such as distributing cash or liquor. The app geo-tags the location, and a complaint is assigned to a field unit which must take action within 100 minutes.',
    bgColor: 'bg-red-50 border-red-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/cVigil.png',
    links: ['android', 'ios'],
    features: [ 'Report MCC violations anonymously', 'Capture photo/video evidence', 'Geo-tagging for precise location', 'Receive status updates on your complaint' ],
    gallery: [ 'https://placehold.co/600x400/fee2e2/b91c1c?text=cVIGIL+1', 'https://placehold.co/600x400/fee2e2/b91c1c?text=cVIGIL+2' ]
  },
  {
    id: 'voter-helpline',
    title: 'Voter Helpline',
    platform: 'Mobile',
    targetAudience: 'Citizens & Voters',
    description: 'A comprehensive app for voters to manage registration, download e-EPIC, and view results.',
    longDescription: 'The Voter Helpline App is an all-in-one solution for Indian voters. It allows users to search their name in the electoral roll, submit forms for new registration or corrections, download their digital photo voter ID card (e-EPIC), file complaints, and view real-time election results, making electoral services highly accessible.',
    bgColor: 'bg-gray-50 border-gray-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/voter-helpline.png',
    links: ['android', 'ios'],
    features: [ 'Search your name in the Electoral Roll', 'Submit forms for registration & correction', 'Download your digital Voter ID card (e-EPIC)', 'View real-time election results' ],
    gallery: [ 'https://placehold.co/600x400/f9fafb/374151?text=Voter+Helpline+1', 'https://placehold.co/600x400/f9fafb/374151?text=Voter+Helpline+2' ]
  },
  {
    id: 'saksham-eci',
    title: 'Saksham-ECI',
    platform: 'Mobile',
    targetAudience: 'Persons with Disabilities (PwD)',
    description: 'Provides dedicated voter services for Persons with Disabilities (PwD).',
    longDescription: 'The Saksham-ECI app is a dedicated initiative to make the electoral process more inclusive and accessible for Persons with Disabilities (PwD). It facilitates PwD voter registration, corrections, and allows them to request special services like wheelchair assistance at polling stations, ensuring they can exercise their right to vote with dignity.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/saksham-eci.png',
    links: ['android', 'ios'],
    features: [ 'Services for Persons with Disabilities (PwD)', 'Request for wheelchair assistance', 'Update details in electoral roll', 'Mark as PwD for special services' ],
    gallery: [ 'https://placehold.co/600x400/e0e7ff/312e81?text=Saksham+1', 'https://placehold.co/600x400/e0e7ff/312e81?text=Saksham+2' ]
  },
  {
    id: 'observer-app',
    title: 'Observer',
    platform: 'Mobile',
    targetAudience: 'Election Observers',
    description: 'A tool for Election Observers to file reports and receive deployment schedules.',
    longDescription: 'The Observer App is a specialized tool for Election Observers appointed by the ECI. It allows them to file their statutory reports (like arrival, departure, etc.) directly from the field. Observers also receive their complete deployment schedule, official notices, meeting invites, and detailed constituency information through this app.',
    bgColor: 'bg-indigo-50 border-indigo-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/observer.png',
    links: ['android', 'ios'],
    features: [ 'For Election Observers only', 'File statutory reports from mobile', 'Receive deployment schedules and notices', 'View constituency details' ],
    gallery: [ 'https://placehold.co/600x400/e0e7ff/3730a3?text=Observer+App+1', 'https://placehold.co/600x400/e0e7ff/3730a3?text=Observer+App+2' ]
  },
  {
    id: 'esms',
    title: 'ESMS',
    platform: 'Mobile',
    targetAudience: 'Enforcement Agencies',
    description: 'Digitizes the reporting of items seized during Model Code of Conduct enforcement.',
    longDescription: 'The Election Seizure Management System (ESMS) Mobile App is used by field enforcement agencies to digitize data for items seized (like cash, liquor, drugs, etc.) during the Model Code of Conduct period. This allows for real-time, transparent reporting directly from the field, creating a centralized database to monitor and manage election-related seizures.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/esms.png',
    links: ['android', 'ios'],
    features: [ 'Election Seizure Management System', 'Digitize data of seized items', 'Real-time reporting from the field', 'Used during Model Code Conduct' ],
    gallery: [ 'https://placehold.co/600x400/dbeafe/2563eb?text=ESMS+1', 'https://placehold.co/600x400/dbeafe/2563eb?text=ESMS+2' ]
  },
];

const webAppsData = [
  {
    id: 'candidate-nomination',
    title: 'Candidate Nomination',
    platform: 'Web Portal',
    targetAudience: 'Candidates & Returning Officers',
    description: 'Online portal for candidates to file nomination papers and affidavits.',
    longDescription: 'The Candidate Nomination portal is part of the ENCORE application suite, enabling candidates to file their nomination papers and affidavits online. This digitizes a critical process, reducing errors and creating a centralized database of all candidates that is used for ballot paper preparation, scrutiny, and public dissemination via the Affidavit Portal.',
    bgColor: 'bg-pink-50 border-pink-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/suvidha-candidate.png',
    features: [ 'Online filing of nomination forms (Form 2A)', 'Digital submission of affidavits', 'Used by candidates and Returning Officers', 'Integrates with ENCORE scrutiny module' ],
    gallery: [ 'https://placehold.co/600x400/fecdd3/b91c1c?text=Nomination+1', 'https://placehold.co/600x400/fecdd3/b91c1c?text=Nomination+2' ]
  },
  {
    id: 'candidate-scrutiny',
    title: 'Candidate Scrutiny',
    platform: 'Web Portal',
    targetAudience: 'Returning Officers',
    description: 'System for Returning Officers to mark nominations as Accepted, Rejected, or Withdrawn.',
    longDescription: 'After nominations are filed, Returning Officers (ROs) use the Candidate Scrutiny module to examine each application against a predefined checklist. They can mark nominations as accepted, rejected, or withdrawn. This module is critical for finalizing the list of legally valid candidates who will contest the election.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    features: [ 'For Returning Officers (ROs)', 'Checklist for scrutinizing nominations', 'Mark nominations as Accepted, Rejected, or Withdrawn', 'Generates final list of contesting candidates' ],
    gallery: [ 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Scrutiny+1', 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Scrutiny+2' ]
  },
  {
    id: 'election-permissions',
    title: 'Election Permissions',
    platform: 'Web Portal',
    targetAudience: 'Candidates & Parties',
    description: 'Single-window portal for candidates to apply for rally, meeting, and vehicle permissions.',
    longDescription: 'The Election Permissions module (part of Suvidha) provides a single-window clearance mechanism for candidates and political parties. It allows them to apply online for permissions related to rallies, public meetings, vehicles, and temporary party offices, which are then processed by various Nodal Officers in a time-bound manner.',
    bgColor: 'bg-purple-50 border-purple-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    features: [ 'Online portal for rally, meeting, and vehicle permissions', 'Single window for candidates and parties', 'Processed by Nodal Officers', 'Tracks status of permission requests' ],
    gallery: [ 'https://placehold.co/600x400/f3e8ff/7e22ce?text=Permissions+1', 'https://placehold.co/600x400/f3e8ff/7e22ce?text=Permissions+2' ]
  },
  {
    id: 'affidavit-portal',
    title: 'Affidavit Portal',
    platform: 'Web Portal',
    targetAudience: 'Citizens & Voters',
    description: 'Public portal for citizens to view and download candidate affidavits.',
    longDescription: 'The Affidavit Portal is a public-facing website that allows any citizen to view the complete profile and nomination affidavits of all contesting candidates. This promotes transparency by making information about a candidate’s assets, liabilities, educational background, and criminal history easily accessible to voters.',
    bgColor: 'bg-gray-50 border-gray-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/eci.png',
    features: [ 'Public portal for viewing candidate affidavits', 'Download full affidavit PDFs', 'Search by candidate name or constituency', 'Promotes informed voting' ],
    gallery: [ 'https://placehold.co/600x400/f9fafb/374151?text=Affidavit+1', 'https://placehold.co/600x400/f9fafb/374151?text=Affidavit+2' ]
  },
  {
    id: 'voter-turnout-web',
    title: 'Voter Turnout (Web)',
    platform: 'Web Portal',
    targetAudience: 'Returning Officers',
    description: 'Data entry portal for Returning Officers to report 2-hourly voter turnout.',
    longDescription: 'This is the web-based backend portal for the Voter Turnout mobile app. Returning Officers (ROs) use this application to enter the estimated voter turnout data from polling stations every two hours on poll day. This data then powers the public mobile app and provides ECI officials with an internal monitoring dashboard.',
    bgColor: 'bg-green-50 border-green-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/voter-turnout.png',
    features: [ 'Data entry portal for Returning Officers (ROs)', 'Submit 2-hourly turnout data', 'Powers the public Voter Turnout app', 'Internal monitoring dashboard' ],
    gallery: [ 'https://placehold.co/600x400/dcfce7/15803d?text=Turnout+Web+1', 'https://placehold.co/600x400/dcfce7/15803d?text=Turnout+Web+2' ]
  },
  {
    id: 'election-counting',
    title: 'Election Counting',
    platform: 'Web Portal',
    targetAudience: 'Counting Officials',
    description: 'Application used in counting centers to capture round-wise counting data.',
    longDescription: 'The Election Counting application is used inside counting centers on result day. Officials enter the vote counts for each candidate on a round-by-round basis. This data is then compiled and securely transmitted to the ECI servers, which in turn feeds the public results website and trends TV displays in near real-time.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    features: [ 'Round-wise entry of counting data', 'Used inside counting centers by officials', 'Generates real-time trends and results', 'Powers the ECI Results Website' ],
    gallery: [ 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Counting+1', 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Counting+2' ]
  },
  {
    id: 'results-trends-tv',
    title: 'Results Trends TV',
    platform: 'Web Portal',
    targetAudience: 'Media & Officials',
    description: 'Graphically-rich display of real-time results for large TV panels.',
    longDescription: 'Results Trends TV is a web application designed to display real-time election trends and results on large screens in counting centers and media rooms. It presents the data captured through the Election Counting module in a graphically rich and easily digestible format that auto-refreshes as new round-wise data becomes available.',
    bgColor: 'bg-yellow-50 border-yellow-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/eci-default-icon.png',
    features: [ 'Graphical display for large TV screens', 'Used in counting centers and media rooms', 'Shows real-time trends and results', 'Auto-refreshes with new data' ],
    gallery: [ 'https://placehold.co/600x400/fefce8/713f12?text=Trends+TV+1', 'https://placehold.co/600x400/fefce8/713f12?text=Trends+TV+2' ]
  },
  {
    id: 'index-card',
    title: 'Index Card & Statistical Reporting',
    platform: 'Web Portal',
    targetAudience: 'Returning Officers',
    description: 'Enables ROs to fill post-counting statistical reports online.',
    longDescription: 'After the counting process is complete and results are declared, Returning Officers use this module to fill the "Index Card." This is a comprehensive statistical report that contains every detail of the election in that constituency, from the declaration date to the final results, including statutory forms like Form 20, 21C, and 21E.',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    features: [ 'Post-counting statistical reporting', 'Digital submission of Form 20, 21C, 21E', 'Used by ROs after results are declared', 'Consolidates all election data' ],
    gallery: [ 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Index+Card+1', 'https://placehold.co/600x400/dbeafe/1d4ed8?text=Index+Card+2' ]
  },
  {
    id: 'expenditure-monitoring',
    title: 'Expenditure Monitoring',
    platform: 'Web Portal',
    targetAudience: 'Expenditure Observers & Candidates',
    description: 'Portal for candidates to report day-to-day expenses for monitoring.',
    longDescription: 'This online application is used for monitoring the election expenditure of candidates. Candidates are required to maintain a record of their day-to-day expenses, which is then captured in this portal. Expenditure Observers use this system to check the reported expenses against their own shadow observation register to ensure compliance with spending limits.',
    bgColor: 'bg-gray-50 border-gray-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/encore.png',
    features: [ 'Candidate expenditure reporting portal', 'Tracks day-to-day expenses', 'Monitored by Expenditure Observers', 'Ensures compliance with spending limits' ],
    gallery: [ 'https://placehold.co/600x400/f9fafb/374151?text=Expenditure+1', 'https://placehold.co/600x400/f9fafb/374151?text=Expenditure+2' ]
  },
  {
    id: 'cvigil-portal',
    title: 'cVIGIL PORTAL',
    platform: 'Web Portal',
    targetAudience: 'Election Officials',
    description: 'Dashboard for officials to view and act on complaints from the cVIGIL app.',
    longDescription: 'The cVIGIL Portal is the backend dashboard for officials to manage the complaints received through the cVIGIL mobile app. Returning Officers, DEOs, and other officials can view incoming complaints, assign them to the appropriate field units (Flying Squads), and track the Action Taken Report (ATR) to ensure every complaint is addressed within the 100-minute deadline.',
    bgColor: 'bg-red-50 border-red-200',
    icon: 'https://www.eci.gov.in/newimg/icons/ict/cVigil.png',
    features: [ 'Dashboard for officials to view complaints', 'Assign complaints to field units (FST)', 'Track action taken reports (ATR)', 'Ensures 100-minute response time' ],
    gallery: [ 'https://placehold.co/600x400/fee2e2/b91c1c?text=cVIGIL+Portal+1', 'https://placehold.co/600x400/fee2e2/b91c1c?text=cVIGIL+Portal+2' ]
  },
];

// --- (No changes to Header, Toggle, Card, or Grid components) ---
const headerIcons = [
  { icon: mobileAppsData[0].icon, alt: 'KYC App Icon' },
  { icon: mobileAppsData[1].icon, alt: 'Suvidha App Icon' },
  { icon: mobileAppsData[6].icon, alt: 'Saksham App Icon' },
  { icon: mobileAppsData[3].icon, alt: 'Voter Turnout App Icon' },
];
const AppCard = ({ app, onAppClick }) => (
  <motion.div layoutId={app.id} onClick={() => onAppClick(app)} whileHover={{ y: -5 }} className={`w-full ${app.bgColor} rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6 cursor-pointer border`}>
    <div className="flex-shrink-0"><img src={app.icon} alt={`${app.title} logo`} className="w-24 h-24 md:w-32 md:h-32 object-contain" /></div>
    <div className="flex-grow text-center md:text-left"><h3 className="text-xl font-bold mb-2 text-gray-800">{app.title}</h3><p className="text-sm text-gray-600">{app.description}</p></div>
  </motion.div>
);
const MobileApps = ({ onAppClick }) => (<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">{mobileAppsData.map(app => (<AppCard key={app.id} app={app} onAppClick={onAppClick} />))}</div>);
const WebApps = ({ onAppClick }) => (<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">{webAppsData.map(app => (<AppCard key={app.id} app={app} onAppClick={onAppClick} />))}</div>);
const ToggleButtons = ({ activeTab, setActiveTab }) => (<div className="flex justify-center mb-10"><div className="flex border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm"><button onClick={() => setActiveTab('mobile')} className={`px-6 py-2.5 sm:px-10 font-medium transition-colors duration-300 ${activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Mobile Applications</button><button onClick={() => setActiveTab('web')} className={`px-6 py-2.5 sm:px-10 font-medium transition-colors duration-300 ${activeTab === 'web' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Web Applications</button></div></div>);
const Header = ({ activeTab }) => (<div className="w-full bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 animated-gradient rounded-b-3xl shadow-lg p-6 md:p-8 mb-10 text-white relative overflow-hidden"><div className="flex justify-between items-center max-w-3xl mx-auto mb-4 opacity-70">{headerIcons.map((item, index) => (<img key={index} src={item.icon} alt={item.alt} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-md floating-icon" style={{ animationDelay: `${index * 250}ms` }} />))}<div className="floating-icon" style={{ animationDelay: '1000ms' }}><DesktopIcon /></div></div><div className="text-center relative z-10"><h1 className="text-3xl md:text-4xl font-extrabold text-white shadow-sm">ICT APPLICATIONS</h1><p className="text-white/80 mt-2">Home / {activeTab === 'mobile' ? 'Mobile Applications' : 'Web Applications'}</p></div></div>);
const IctApplicationsPage = ({ onAppClick }) => {
  const [activeTab, setActiveTab] = useState('mobile');
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><Header activeTab={activeTab} /><ToggleButtons activeTab={activeTab} setActiveTab={setActiveTab} /><div>{activeTab === 'mobile' ? (<MobileApps onAppClick={onAppClick} />) : (<WebApps onAppClick={onAppClick} />)}</div></div></motion.div>);
};

// --- REDESIGNED Application Detail Page ---
const ApplicationDetailPage = ({ app, onBack }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Applications
        </button>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Animated Header */}
            <motion.div layoutId={app.id} className={`p-8 sm:p-12 ${app.bgColor} border-b`}>
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                    <img src={app.icon} alt={`${app.title} logo`} className="w-32 h-32 sm:w-40 sm:h-40 object-contain flex-shrink-0"/>
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{app.title}</h1>
                        <p className="text-base text-gray-700">{app.longDescription}</p>
                    </div>
                </div>
            </motion.div>

            {/* Main Content Area (Full Width) */}
            <div className="p-8 sm:p-12">
                {/* NEW: Info Bar */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
                        <PlatformIcon /> {app.platform}
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
                        <UsersIcon /> {app.targetAudience}
                    </div>
                </div>

                {/* NEW: Prominent Download Links */}
                {app.links && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Get the App</h3>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="flex-1 min-w-[200px] text-center bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-black transition-colors font-medium">Download for Android</a>
                            <a href="#" className="flex-1 min-w-[200px] text-center bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-black transition-colors font-medium">Download for iOS</a>
                        </div>
                    </div>
                )}
                
                {/* Key Features */}
                {app.features && app.features.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-5">Key Features</h2>
                        <ul className="space-y-3">
                            {app.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-700">{feature}</span></li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Gallery */}
                {app.gallery && app.gallery.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-5">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {app.gallery.map((imgSrc, index) => (
                                <motion.img whileHover={{ scale: 1.05 }} key={index} src={imgSrc} alt={`${app.title} screenshot ${index + 1}`} className="rounded-lg shadow-md border border-gray-200" />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

// --- Main App Component ---
const ICTApps = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <AnimatePresence mode="wait">
        {selectedApp ? (
          <ApplicationDetailPage key={selectedApp.id} app={selectedApp} onBack={() => setSelectedApp(null)} />
        ) : (
          <IctApplicationsPage key="home" onAppClick={setSelectedApp} />
        )}
      </AnimatePresence>
      <CategoryBar/>
    </div>
  );
};


// --- SVG Icons ---
const DesktopIcon = () => (<svg className="w-10 h-10 sm:w-12 sm:h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const CheckIcon = () => (<svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const PlatformIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>);
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);

export default ICTApps;