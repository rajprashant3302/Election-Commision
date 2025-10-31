import React from 'react'
import { Link } from 'react-router-dom'
const Know_your_candidate = () => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold py-5'>Know Your Candidate  </h3>
      <div class="link  mx-5 text-lg">
      <Link  to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link><span>/</span>  <Link to="/electors"  className='underline cursor-pointer text-blue-600 mx-2' >Electors</Link><span>/</span> <span className='text-pink-500'>Know Your Candidate</span>
      </div>
      <div class="hero_img flex mt-20 justify-center">
        <img src="/kyc_1.png" alt="kyc_1_img"/>
        <img src="/kyc_2.png" alt="kyc_2_img"/>
        <img src="/kyc_3.png" alt="kyc_3_img"/>
        
      </div>

      <p  className='px-5 my-3 text-lg'>The Know Your Candidate (KYC) app is a mobile application developed by the Election Commission of India (ECI) to help citizens know about the criminal antecedents of candidates contesting elections. The app is available on both Android and iOS platforms. To use the KYC app, voters need to select the election type and AC/PC name to view the list of the nomination or they can search the candidate by name. The app will then display information about the candidate's criminal antecedents, if any. This information includes the details of any criminal cases filed against the candidate, the status of those cases, and the nature of the offenses. The KYC app is a useful tool for citizens to make informed decisions about who to vote for. It can help voters to identify candidates with a history of criminal activity and to avoid voting for them. The app can also help to promote transparency and accountability in elections.</p>
      <h4 className='font-bold text-xl px-5 my-3 mt-5'>Here are some of the features of the KYC app:</h4>
      <ul className='mx-5 my-3 text-lg'>
      <li>It allows voters to search for candidates by their names.</li>
        <li>It displays information about the candidate's criminal antecedents, if any.</li>
        <li>It provides information about the status of any criminal cases filed against the candidate.</li>
        <li>It shows the nature of the offenses that the candidate has been accused of.</li>
        <li>It is available on both Android and iOS platforms.</li>
      </ul>
        <p  className='px-5 my-3 text-lg'>The KYC app is a valuable resource for voters who want to know more about the candidates who are contesting elections. It can help voters to make informed decisions about who to vote for and to promote transparency and accountability in elections. To download the KYC app, you can visit the ECI's website or the Google Play Store, or the Apple App Store.</p>

        <div class="download px-5 ">
      <h4 className='font-bold text-3xl my-5'>Link to download the app</h4>
      <div className='flex items-center justify-center'>
        <div>
            <div className='flex items-center gap-3 px-5 '>
                <div class="img">
            <img className='w-20' src="/androidLogoNewIcon.svg" alt="android_logo"/>
                </div>
                <div class="link flex items-center">
                    <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://play.google.com/store/apps/details?id=com.eci.ksa">Android</a>
                    {/* <a className='underline cursor-pointer text-blue-700 ' href="https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US">https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US</a> */}
                </div>
            </div>
            <div class="android">
                    <img src="/androidkyc.jpg" className='px-5' alt="android_logo"/>

            </div>
        </div>
        <div>
            <div className='flex items-center gap-3 px-5'>
                <div class="img">
                    <img  className='w-20 md:w-20' src="/appleLogoNewIcon.svg" alt="ios"/>
                </div>
                <div class="link flex items-center ">
                  <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://apps.apple.com/in/app/kyc-eci/id1604172836">iOS</a>
                    {/* <a className='underline cursor-pointer text-blue-700 ' href="https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US">https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US</a> */}
                </div>
            </div>
            <div class="android">
            <img src="/ioskyc.jpg" className='px-5' alt="ios"/>


            </div>
        </div>
       
      </div>
      </div>

      
    </div>
  )
}

export default Know_your_candidate
