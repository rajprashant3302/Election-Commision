import React from "react";
import Nav from "../../Components/Nav";
import Imagebar from "../../Components/Imagebar";
import Footer from "../../Components/Footer";
import monitorImage from '../../assets/moniter.png';

const listitems =[
  {
    title:"Nominations Applied",
  },
  {
    title:"Accepted",
  },
  {
    title:"Rejected",
  },
  {
    title:"Withdrawn",
  },
  {
    title:"Contesting",
  },
]

const Affidavit = () => {
  return (
    <div className="px-10  bg-[#f5f9fc] min-h-screen">
     {/*Navbar */}
      <Nav />
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
        Candidate Affidavit portal is a part of ENCORE that allows citizens to view the complete list of Candidate Nominations who have applied for the elections. To help the citizen to know the candidates, a complete candidate profile with photo and affidavit is made public as and when the Returning Officer enters the data. The affidavit presented to the Returning Officer against his nomination, the same affidavit is uploaded in the system and can be viewed and downloaded by any citizen using the portal.

Earlier, the affidavit was uploaded separately and there was no link between the affidavit and the candidate profile. With the integration of the Affidavit portal in the ENCORE, the process has been simplified and the errors are reduced. This portal was launched on 10 March 2019. The citizen can view the affidavit of each candidate of every election from the day it was launched.
       </p>
       <p className="text-md mt-3 font-bold ">
        For ease of citizens, the information on this portal is categories as follows:
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
      <Footer />
      </div>
    </div>
  );
};

export default Affidavit;
