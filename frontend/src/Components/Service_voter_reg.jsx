import React from 'react'
import { Link } from 'react-router-dom'
const Service_voter_reg = () => {
  return (
    <div>
        <h3 className='text-center text-3xl font-bold py-5'>Service Voter Registration Portal</h3>
        <div class="link  px-5 text-lg">
      <Link  to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link><span>/</span>  <Link to="/electors"  className='underline cursor-pointer text-blue-600 mx-2' >Electors</Link><span>/</span> <span className='text-pink-500'>Service Voter Registration Portal </span>
      </div>
      <div class="hero_img flex mt-20 px-3 md:px-0 justify-center">
        <img  src="/service-voter-registration-portal_1.png" alt="saksham_app_img"/>

      </div>
      <p className='px-5 my-3 text-lg'>The Service Voter Portal is a web-based application developed by the Election Commission of India (ECI) to help service voters register to vote and manage their voter registration details. In India, we have more than 19 lakh registered service voters in the system. The election commission of India has separately handled the registration process of service voters. The service voter registration process is a bit different from the general electors. The responsibility of enrollment of a service voter is given to the Record Officer of that service voter. The record office ensures the filling of forms and uploads the XML in the required format on the Service Voter portal.</p>
      <p className='px-5 my-3 text-lg'>In the case of service voters, the registration form can be marked as incomplete by EROs in case any mandatory field is missing. The EROs can mark the applied forms as incomplete only with relevant remarks. After the successful processing of the form, the name of the service voter gets enrolled in the last part of the assembly for which he has applied. The spouse of a service voter who ordinarily resides with him/her is also given the same facility of Postal Ballot as to the service voters. The purpose of the online system is to create a convenient and easy-to-use online system for Defense Personnel to become Service Voters. The system is used for registration and acceptance of forms for Service Voters.</p>
      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Forms for a service voter:</h4>
      <ol className='mx-5 my-3 text-lg list-decimal list-inside'>
            <li className='my-2'><span className='font-bold mr-1'>Form 2:</span> Statement as to place of Ordinary Residence by member of the Armed Forces</li>
            <li className='my-2'><span className='font-bold mr-1'>Form 2A:</span>Statement as to place of Ordinary Residence by a member of the Armed police force of a State, who is serving outside that State</li>
            <li className='my-2'><span className='font-bold mr-1'>Form 3:</span> Statement as to place of Ordinary Residence by a Person employed under the Government of India in a post outside India</li>
        </ol>
        <h4 className='font-bold text-xl px-5 my-3 mt-5'>Forms for a service voter:</h4>
        <ul className='mx-5 my-3 text-lg'>
            <li>Processing of electoral forms</li>
            <li>Maintaining an up-to-date record of transfers and present Record and Unit Mapping</li>
            <li>Simultaneous addition and deletion process</li>
            <li>Single source of online forms acceptance, provides real-time monitoring of the progress of the form processing</li>
            <li>Communication between EROs across ACs and States and Record Officers</li>
        </ul>
        <h4 className='font-bold text-xl px-5 my-3 mt-5 flex items-center gap-2'>Link to access the portal: <a href="https://svp.eci.gov.in/" className='text-blue-700 underline'>https://svp.eci.gov.in/</a></h4>
    </div>
  )
}

export default Service_voter_reg
