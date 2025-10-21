
import React from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";
import monitorImage from '../../assets/moniter2.png';

const listitems =[
  {
    title:"Feature to apply offline and online permission requests ",
  },
  {
    title:"Auto forwarding of permission request to the nodal officer of concerned department",
  },
  {
    title:"Separate mobile application for the nodal officers",
  },
  {
    title:"Facility to assign multiple nodal for specific categories of permission",
  },
  {
    title:"End to end tracking of the status of permission",
  },
]

const Permission = () => {
  return (
    <div className="px-10 py-8 bg-[#f5f9fc] min-h-screen">
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
            Affidavit Portal
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <h1 className="text-3xl font-semibold text-[#0b376d] border-b-4 border-[#0b376d] pb-3 mb-8">
        Affidavit Portal
      </h1>

     {/*Affidavit Montior Image */}
     <div className="flex justify-content-center my-3" >
      <img src={monitorImage} alt="" />
     </div>
      {/* Guidelines List */}
      <div className="space-y-6 mb-12 ">
       <p>
       To have a single window to process all the election permission the Election Commission of India launched an application called ‘Suvidha Portal’. This application was prepared for the candidate and the political parties with limited functionalities. It is a web-based application that provides an option to fill out permission applications. The political parties or the candidate can easily create a profile by using their mobile number. Once the profile is created, they can submit the permission request through online mode. If any political party submits the physical permission request to the concerned officers, then that will also digitize the offline received permission in the system.

All the digitized permission and online received permission request will be sent to the concerned officer and nodal officer of different departments for approval through the ENCORE system. The ECI has separately provided a Nodal App to the Nodal officers of the other departments whose consent is required before approval of any permission. The candidate/political parties can also track their application status through the Candidate App from Google Play Store. Once the permission request gets approved, the same permission copy can be downloaded from the application as well as Suvidha Portal.
        For ease of citizens, the information on this portal is categories as follows:
       </p>
        <p className="text-md mt-3 font-bold ">
        Features available in the election permission module:
       </p>
       <ul>
        {listitems.map((item,i)=>{
          return <li key={i}>{i+1}. {item.title}</li>
        })}
       </ul>
       <p className="text-md mt-3 font-bold ">
        Link to access the portal: <a href="https://affidavit.eci.gov.in/" className="text-blue-600 hover:underline">https://affidavit.eci.gov.in/</a><br />
        Links to Candidate Affidavits (Before GE-2019): <a href="https://ceowb.nic.in/affidavits/" className="text-blue-600 hover:underline">https://ceowb.nic.in/affidavits/</a>
       </p>
      </div>

      <div className="mt-5">

      <Imagebar />
      </div>
    </div>
  );
};

export default Permission;
