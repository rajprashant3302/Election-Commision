import React from 'react'
import { Link } from 'react-router-dom'

const National_griv_portal = () => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold py-5'>National Grievance Services Portal</h3>
      
      <div className="link mx-5 text-lg">
        <Link to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link>
        <span>/</span>
        <Link to="/electors" className='underline cursor-pointer text-blue-600 mx-2'>Electors</Link>
        <span>/</span>
        <span className='text-pink-500'>National Grievance Services Portal</span>
      </div>

      <div className="hero_img flex mt-20 justify-center">
        <img src="/ngsp_1.png" alt="ngsp_1_img" />
 
      </div>

      <p className='px-5 my-3 text-lg'>
        The National Grievance Service Portal (NGSP) is a web-based solution for grievance support on a single interface for handling complaints by Election officials. The NGSP has been instrumental in helping the ECI to address election-related and non-election-related grievances. The portal has made it easier for citizens to register complaints and has helped to ensure that complaints are investigated promptly. The citizen can register and create their profile in the portal using their mobile number. This portal keeps a record of all the complaints lodged by a citizen in his profile.
      </p>

      <p className='px-5 my-3 text-lg'>
        Once a complaint is registered, the reference ID will be sent to the registered mobile number and mail ID. After lodging the complaint, it gets assigned to the appropriate Election official for investigation. The official is required to respond to the complaint within a specified time period. The portal has made it easier for citizens to register complaints and has helped to ensure that complaints are investigated promptly. The citizen can view the response time of the complaint and the response of the officers to his complaint.
      </p>

      <h4 className='font-bold text-xl px-5 my-3 mt-5'>The NGSP allows citizens to register complaints online about a variety of election-related issues, such as:</h4>
      <ul className='mx-5 my-3 text-lg'>
        <li>Voter registration</li>
        <li>Polling booth locations</li>
        <li>Electronic Voting Machines (EVMs)</li>
        <li>Election expenditure</li>
        <li>Electoral malpractice</li>
      </ul>

      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Here are some of the benefits of the NGSP:</h4>
      <ul className='mx-5 my-3 text-lg'>
        <li>This system ensures that all complaints are handled in a timely and efficient manner.</li>
        <li>Citizens can track the status of their complaints online.</li>
        <li>Citizens can register complaints online in a few simple steps.</li>
        <li>The website is available in English and Hindi.</li>
      </ul>

      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Here are the steps on how to register a complaint on NGSP:</h4>
      <ul className='mx-5 my-3 text-lg'>
        <li>Go to the NGSP website.</li>
        <li>Click on the "Register Complaint" button.</li>
        <li>Select the type of complaint you want to register.</li>
        <li>Provide your personal details, such as your name, address, and contact information.</li>
        <li>Provide details of your complaint.</li>
        <li>Upload any supporting documents (If any).</li>
        <li>Click on the "Submit" button.</li>
      </ul>

      <p className='px-5 my-3 text-lg'>
        Once you have submitted your complaint, you will receive an email confirmation. You can also track the status of your complaint online.
      </p>

      <h4 className='font-bold text-xl px-5 my-3 mt-5 flex items-center gap-2'>Link to access the portal: <a href="https://voters.eci.gov.in/" className='text-blue-700 underline'>https://voters.eci.gov.in/</a></h4>

    </div>
  )
}

export default National_griv_portal
