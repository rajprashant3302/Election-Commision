import React, { useState } from 'react';

// Replaced external icons (react-icons/fi, /fa, /md) with self-contained inline SVG components.

// Icon Components (Self-Contained SVGs)
const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const ListIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);
const SmartphoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const LanguageIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.8-.23-5.3-1.68-7.17-3.92C5.92 14.86 6.3 13.56 7.42 13h9.16c1.12.56 1.43 1.86.35 4.01-1.87 2.24-4.37 3.69-7.17 3.92zM12 4c.69 0 1.37.07 2.03.22C14.05 4.09 13.04 4 12 4s-2.05.09-2.03.22c.66-.15 1.34-.22 2.03-.22zm6.2 3H5.8c-.8.8-1.2 1.8-1.2 3.01H21.4c-.05-1.21-.45-2.21-1.25-3.01zM12 6.09c-1.99 0-3.69.75-4.83 2h9.66c-1.14-1.25-2.84-2-4.83-2zm5 5.91H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z" />
  </svg>
);
const SecurityIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.148a.75.75 0 00-.775-.407l-2.028-.318c-1.12-.176-2.24-.352-3.36-.528a.75.75 0 00-.913.673v10.32c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V8.586a.75.75 0 011.28-.53l.732.732a.75.75 0 001.06 0l.732-.732a.75.75 0 000-1.06l-.732-.732z" />
  </svg>
);


// Mock component for the Captcha image (replace with actual image/logic)
const CaptchaImage = ({ text, color }) => {
  const textColor = color === 'blue' ? 'text-blue-700' : (color === 'green' ? 'text-green-700' : 'text-orange-700');
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`text-2xl font-serif italic ${textColor} bg-gray-50 p-2 border border-gray-300 rounded-lg tracking-wider select-none relative overflow-hidden w-32 h-10 flex items-center justify-center`}>
        {/* Simple visual noise lines */}
        <div className="absolute top-1 left-0 w-full h-px bg-red-400 opacity-60 transform rotate-3"></div>
        <div className="absolute bottom-2 left-0 w-full h-px bg-blue-400 opacity-60 transform rotate-[-2deg]"></div>
        {/* Mock Captcha Text */}
        <span className="inline-block transform rotate-[-5deg] font-bold">{text[0]}</span>
        <span className="inline-block transform rotate-[10deg]">{text[1]}</span>
        <span className="inline-block transform rotate-[-15deg] font-bold">{text[2]}</span>
        <span className="inline-block transform rotate-[5deg]">{text[3]}</span>
        <span className="inline-block transform rotate-[-10deg] font-bold">{text[4]}</span>
        <span className="inline-block transform rotate-[15deg]">{text[5]}</span>
      </div>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 transition duration-150 p-1 rounded-full hover:bg-gray-200"
        aria-label="Refresh Captcha"
      >
        {/* Refresh/Audio icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
  );
};

// --- Form Components ---

// 1. Search by EPIC Form
const EpicSearchForm = ({ captchaText, colorClass, ringClass }) => (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
    <div className="md:col-span-1">
      <label htmlFor="epic-number" className="block text-sm font-medium text-gray-600 mb-2">
        ईपीआईसी संख्या / <span className="text-red-500 font-bold">*</span> **EPIC Number**
      </label>
      <input
        type="text"
        id="epic-number"
        placeholder="Enter Your EPIC Number"
        required
        className={`w-full px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
      />
    </div>
    
    <div className="md:col-span-1">
      <label htmlFor="state" className="block text-sm font-medium text-gray-600 mb-2">
        राज्य / <span className="text-red-500 font-bold">*</span> **State**
      </label>
      <div className="relative">
        <select
          id="state"
          required
          className={`appearance-none block w-full bg-white px-4 py-3 border-b border-gray-300 text-gray-700 rounded-t-lg leading-tight focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
        >
          <option value="">Select Your State</option>
          <option value="bihar">Bihar</option>
          <option value="up">Uttar Pradesh</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-2.5">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
    </div>
    
    <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-start sm:items-end">
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Captcha Code <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="flex items-center space-x-4">
          <CaptchaImage text={captchaText} color="orange" />
          <input
            type="text"
            placeholder="Enter Captcha"
            required
            className={`flex-1 min-w-0 px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>
      </div>
    </div>
    
    <div className="md:col-span-2 flex justify-center space-x-6 pt-8">
      <button
        type="submit"
        className={`flex items-center justify-center px-10 py-3 ${colorClass} text-white font-extrabold rounded-lg shadow-xl hover:${colorClass.replace('-600', '-700')} transition duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-70 ${ringClass}`}
      >
        <SearchIcon className="mr-2 h-5 w-5" />
        SEARCH
      </button>
      <button
        type="reset"
        className="flex items-center justify-center px-10 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        CLEAR
      </button>
    </div>
  </form>
);


// 2. Search by Details Form
const DetailsSearchForm = ({ captchaText, colorClass, ringClass }) => (
  <form className="p-6 space-y-10">
    
    {/* PERSONAL DETAILS */}
    <div className="border border-blue-300 p-6 rounded-xl bg-blue-50 shadow-inner">
      <h3 className="text-lg font-extrabold text-blue-800 mb-6 flex items-center border-b border-blue-300 pb-3">
        <InfoIcon className="mr-2 h-6 w-6" /> PERSONAL DETAILS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
            नाम / <span className="text-red-500 font-bold">*</span> **Name**
          </label>
          <input type="text" id="name" placeholder="Enter Your Name" required 
            className={`w-full px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>
        
        <div>
          <label htmlFor="relative-name" className="block text-sm font-medium text-gray-600 mb-2">
            रिश्तेदार का नाम / <span className="text-red-500 font-bold">*</span> **Relative's Name**
          </label>
          <input type="text" id="relative-name" placeholder="Enter Relative's Name" required 
            className={`w-full px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>

        {/* Birth Details (Date and Age) */}
        <div className="lg:col-span-1 border-t border-gray-200 pt-4 mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Select Birth Details</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <label htmlFor="birth-date" className="block text-xs font-medium text-gray-600 mb-1">
                जन्म तिथि / Date of Birth
              </label>
              <div className="flex space-x-1">
                <input type="text" id="birth-date-dd" placeholder="DD" className="w-1/3 text-center px-2 py-2 border border-gray-300 rounded-md text-sm shadow-sm" />
                <input type="text" id="birth-date-mm" placeholder="MM" className="w-1/3 text-center px-2 py-2 border border-gray-300 rounded-md text-sm shadow-sm" />
                <input type="text" id="birth-date-yyyy" placeholder="YYYY" className="w-1/3 text-center px-2 py-2 border border-gray-300 rounded-md text-sm shadow-sm" />
              </div>
            </div>
            
            <div className="flex-1">
              <label htmlFor="age" className="block text-xs font-medium text-gray-600 mb-1">
                आयु / Age
              </label>
              <div className="relative">
                <select id="age" className="appearance-none w-full border border-gray-300 text-gray-700 py-2.5 px-2 pr-8 rounded-md text-sm leading-tight shadow-sm">
                  <option value="">Select Age</option>
                  {[...Array(50)].map((_, i) => <option key={i} value={18 + i}>{18 + i}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gender Selection */}
        <div className="lg:col-span-1 border-t border-gray-200 pt-4 mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Select Gender</p>
          <label htmlFor="gender" className="block text-xs font-medium text-gray-600 mb-3">
            लिंग / Gender <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="flex flex-wrap space-x-6">
            <label className="inline-flex items-center text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="gender" value="male" required className={`form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500`} />
              <span className="ml-2 font-medium">पुरुष Male</span>
            </label>
            <label className="inline-flex items-center text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="gender" value="female" className={`form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500`} />
              <span className="ml-2 font-medium">महिला Female</span>
            </label>
            <label className="inline-flex items-center text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="gender" value="third" className={`form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500`} />
              <span className="ml-2 font-medium">तृतीय लिंग Third Gender</span>
            </label>
          </div>
        </div>

      </div>
    </div>

    {/* LOCATION DETAILS */}
    <div className="border border-blue-300 p-6 rounded-xl bg-blue-50 shadow-inner">
      <h3 className="text-lg font-extrabold text-blue-800 mb-6 flex items-center border-b border-blue-300 pb-3">
        <SecurityIcon className="mr-2 h-6 w-6" /> LOCATION DETAILS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">
            जिला / <span className="text-red-500 font-bold">*</span> **District**
          </label>
          <div className="relative">
            <select id="district" required className={`appearance-none block w-full bg-white px-4 py-3 border-b border-gray-300 text-gray-700 rounded-t-lg leading-tight focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}>
              <option value="">Select Your District</option>
              <option value="d1">District 1</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-2.5">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="ac" className="block text-sm font-medium text-gray-600 mb-2">
            विधानसभा निर्वाचन क्षेत्र / <span className="text-red-500 font-bold">*</span> **Assembly Constituency**
          </label>
          <div className="relative">
            <select id="ac" required className={`appearance-none block w-full bg-white px-4 py-3 border-b border-gray-300 text-gray-700 rounded-t-lg leading-tight focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}>
              <option value="">Select Your AC</option>
              <option value="ac1">AC 1</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-2.5">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Captcha and Buttons */}
    <div className="pt-4 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-start sm:items-end">
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Captcha Code <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="flex items-center space-x-4">
          <CaptchaImage text={captchaText} color="blue" />
          <input
            type="text"
            placeholder="Enter Captcha"
            required
            className={`flex-1 min-w-0 px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>
      </div>
    </div>

    <div className="flex justify-center space-x-6 pt-8">
      <button
        type="submit"
        className={`flex items-center justify-center px-10 py-3 ${colorClass} text-white font-extrabold rounded-lg shadow-xl hover:${colorClass.replace('-600', '-700')} transition duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-70 ${ringClass}`}
      >
        <SearchIcon className="mr-2 h-5 w-5" />
        SEARCH
      </button>
      <button
        type="reset"
        className="flex items-center justify-center px-10 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        CLEAR
      </button>
    </div>
  </form>
);


// 3. Search by Mobile Form
const MobileSearchForm = ({ captchaText, colorClass, ringClass }) => (
  <form className="p-6 space-y-8">
    
    <div className="border border-green-300 p-6 rounded-xl bg-green-50 shadow-inner">
      <h3 className="text-lg font-extrabold text-green-800 mb-6 flex items-center border-b border-green-300 pb-3">
        <SmartphoneIcon className="mr-2 h-6 w-6" /> MOBILE DETAIL
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        
        {/* Mobile Number Field */}
        <div>
          <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-600 mb-2">
            मोबाइल द्वारा खोजें / <span className="text-red-500 font-bold">*</span> **Mobile Number**
          </label>
          <input
            type="tel"
            id="mobile-number"
            placeholder="Enter Mobile Number"
            required
            className={`w-full px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>
        
        {/* Send OTP Button */}
        <div>
          <button
            type="button"
            className="w-full h-[51px] bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Send OTP
          </button>
        </div>
        
        {/* OTP Field */}
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2 sr-only">
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP received on Mobile"
            className={`w-full px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
          />
        </div>
        
        {/* Captcha Fields (Spanning 3 columns) */}
        <div className="md:col-span-3 pt-4 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-start sm:items-end">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Captcha Code <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <CaptchaImage text={captchaText} color="green" />
              <input
                type="text"
                placeholder="Enter Captcha"
                required
                className={`flex-1 min-w-0 px-4 py-3 border-b border-gray-300 rounded-t-lg focus:outline-none focus:border-b-2 ${ringClass.replace('focus:ring', 'focus:border')} focus:border-opacity-100 transition duration-200 shadow-sm`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center space-x-6 pt-8">
      <button
        type="submit"
        className={`flex items-center justify-center px-10 py-3 ${colorClass} text-white font-extrabold rounded-lg shadow-xl hover:${colorClass.replace('-600', '-700')} transition duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-70 ${ringClass}`}
      >
        <SearchIcon className="mr-2 h-5 w-5" />
        SEARCH
      </button>
      <button
        type="reset"
        className="flex items-center justify-center px-10 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        CLEAR
      </button>
    </div>
  </form>
);


// --- Main App Component ---

const ElectoralRollSearch = () => {
  const [activeTab, setActiveTab] = useState('epic');
  const [state, setState] = useState('');
  const [language, setLanguage] = useState('');

  // Static data for the tabs
  const tabs = [
    { id: 'epic', label: 'ईपीआईसी द्वारा खोजें / Search by EPIC', icon: SearchIcon, color: 'bg-orange-600', ring: 'focus:ring-orange-300', form: EpicSearchForm, captcha: 'rZdznh' },
    { id: 'details', label: 'विवरण द्वारा खोजें / Search by Details', icon: ListIcon, color: 'bg-blue-600', ring: 'focus:ring-blue-300', form: DetailsSearchForm, captcha: 'xr2576' },
    { id: 'mobile', label: 'मोबाइल द्वारा खोजें / Search by Mobile', icon: SmartphoneIcon, color: 'bg-green-600', ring: 'focus:ring-green-300', form: MobileSearchForm, captcha: 'bN6ngZ' },
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  // Function to render the active form
  const renderForm = () => {
    if (!currentTab) return null;
    const FormComponent = currentTab.form;
    return (
      <FormComponent 
        captchaText={currentTab.captcha} 
        colorClass={currentTab.color} 
        ringClass={currentTab.ring} 
      />
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 sm:p-8 font-['Inter']">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:shadow-3xl">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center justify-center">
            <SearchIcon className="mr-3 text-blue-600 h-7 w-7" />
            Search in Electoral Roll
          </h1>
        </div>
        
        {/* Navigation Tabs (Pill style for modern look) */}
        <div className="flex flex-col sm:flex-row justify-center p-6 space-y-2 sm:space-y-0 sm:space-x-4 bg-gray-100 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center text-center px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ease-in-out transform
                ${activeTab === tab.id 
                  ? `${tab.color} text-white scale-100 shadow-lg shadow-gray-400/50` 
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-300'
                }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              <span className="hidden md:inline">{tab.label.split(' / ')[0]} /</span>
              <span className="md:ml-1">{tab.label.split(' / ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Global Selectors (State and Language) - Minimalist Look */}
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 bg-white">
          
          {/* State Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium whitespace-nowrap">राज्य / **State**:</span>
            <div className="relative w-48">
              <select
                className="appearance-none block w-full bg-white border-b border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-t-md leading-tight focus:outline-none focus:border-b-2 focus:border-blue-500 transition duration-150 shadow-sm"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select Your State</option>
                <option value="bihar">Bihar</option>
                <option value="up">Uttar Pradesh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <LanguageIcon className="text-gray-500 h-5 w-5" />
            <span className="text-gray-700 font-medium whitespace-nowrap">भाषा का चयन करें / **Select Language**:</span>
            <div className="relative w-48">
              <select
                className="appearance-none block w-full bg-white border-b border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-t-md leading-tight focus:outline-none focus:border-b-2 focus:border-blue-500 transition duration-150 shadow-sm"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="hindi">हिन्दी (Hindi)</option>
                <option value="english">English</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Form Area */}
        <div className="p-4 sm:p-6">
          {renderForm()}
        </div>

      </div>
    </div>
  );
};

export default ElectoralRollSearch;