import React, { useState } from 'react';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import Tab1 from '../Components/Tab1';
import Tab2 from '../Components/Tab2';
import Tab3 from '../Components/Tab3';
import { Tab } from 'bootstrap';

const Electoral_search = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
    <h2 className='flex items-center gap-1 font-bold text-2xl justify-center '><img src="../../src/assets/searchRoll.1bc6b8dd9653eb34175d.png" className='w-16' alt="search"/>Search in Electoral Roll</h2>
    <div className="border-2 rounded p-4 bg-white">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'tab1' ? ' border-2 bg-[#d28808] border-[#d28808] text-white' : 'border-1 bg-[#ffebc7] border-[#d28808] text-black'}`}
          onClick={() => setActiveTab('tab1')}
        >
          ईपीआईसी द्वारा खोजें/ Search by EPIC
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'tab2' ? ' border-2 bg-[#0065eb] border-[#0065eb] text-white' : 'border-1 bg-[#83aff1e5] border-[#0065eb] text-black'}`}
          onClick={() => setActiveTab('tab2')}
        >
         विवरण द्वारा खोजें/ Search by Details
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'tab3' ? ' border-2 bg-[#42a045] border-[#42a045] text-white' : 'border-1 bg-[#42a045] border-[#d28808] text-black'}`}
          onClick={() => setActiveTab('tab3')}
        >
          मोबाइल द्वारा खोजें/ Search by Mobile
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'tab1' && (
          <Tab1 />
        )}
        {activeTab === 'tab2' && (
          <Tab2 />
        )}
        {activeTab === 'tab3' && (
          <Tab3 />
        )}
      </div>
    </div>
    </>);
};

export default Electoral_search;
