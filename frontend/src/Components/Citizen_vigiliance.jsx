import React from 'react'
import { Link } from 'react-router-dom'

const Citizen_vigiliance = () => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold py-5'>cVIGIL Citizen App</h3>
      <div class="link  mx-5 text-lg">
        <Link to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link><span>/</span> 
        <Link to="/electors" className='underline cursor-pointer text-blue-600 mx-2'>Electors</Link><span>/</span> 
        <span className='text-pink-500'>cVIGIL Citizen App</span>
      </div>

      <div class="hero_img flex mt-20 justify-center">
        <img src="/cvigil_1.png" alt="cvigil_1_img"/>
        <img src="/cvigil_2.png" alt="cvigil_2_img"/>
     
      </div>

      <p className='px-5 my-3 text-lg'>
        The <strong>cVIGIL</strong> is a mobile application developed by the Election Commission of India (ECI) to enable citizens to report violations of the Model Code of Conduct (MCC) during elections. 
        The app is available for download on Android and iOS devices. To report a violation, users simply need to open the app, select the type of violation, 
        and provide details of the incident, including location, time, and photographs or videos. The app also allows users to track the progress of their complaints.
      </p>

      <p className='px-5 my-3 text-lg'>
        The cVIGIL app has been praised for its simplicity, ease of use, authenticity, and user secrecy. It has also been credited with helping to increase 
        the number of MCC violations reported during elections.
      </p>

      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Here are some of the features of the cVIGIL app:</h4>
      <ul className='mx-5 my-3 text-lg'>
        <li>Allows users to report violations of the Model Code of Conduct (MCC)</li>
        <li>Provides a platform for citizens to participate in the electoral process</li>
        <li>Uses GPS to track the location of the violation</li>
        <li>Allows users to capture the live incidents only</li>
        <li>Tracks the progress of the complaint</li>
        <li>Feature to report the case of MCC violation anonymously</li>
      </ul>

      <p className='px-5 my-3 text-lg'>
        If you see a violation of the MCC, you can use the cVIGIL app to report it. The app is a valuable tool for ensuring that elections are conducted fairly and transparently.
      </p>

      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Here are some of the steps on how to use the cVIGIL app:</h4>
      <ol className='mx-5 my-3 text-lg list-decimal'>
        <li>Download the app from the Google Play Store or the Apple App Store.</li>
        <li>Open the app and create an account.</li>
        <li>Select the type of violation you want to report.</li>
        <li>Provide details of the incident, including location, time, and photographs or videos.</li>
        <li>Submit your complaint.</li>
        <li>The ECI will investigate your complaint and take appropriate action. You can track the progress of your complaint in the app.</li>
      </ol>

      <div class="download px-5">
        <h4 className='font-bold text-3xl my-5'>Link to download the app</h4>
        <div className='flex items-center justify-center'>
          <div>
            <div className='flex items-center gap-3 px-5'>
              <div class="img">
                <img className='w-20' src="/androidLogoNewIcon.svg" alt="android_logo"/>
              </div>
              <div class="link flex items-center">
                <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://play.google.com/store/apps/details?id=in.nic.eci.cvigil">Android</a>
              </div>
            </div>
            <div class="android">
              <img src="/citizen_and.jpeg" className='px-5' alt="android_logo"/>
            </div>
          </div>

          <div>
            <div className='flex items-center gap-3 px-5'>
              <div class="img">
                <img className='w-20 md:w-20' src="/appleLogoNewIcon.svg" alt="ios"/>
              </div>
              <div class="link flex items-center">
                <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://apps.apple.com/in/app/cvigil/id1455719541">iOS</a>
              </div>
            </div>
            <div class="android">
              <img src="/citizen_ios.jpeg" className='px-5' alt="ios"/>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Citizen_vigiliance
