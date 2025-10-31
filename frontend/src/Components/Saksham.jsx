import React from 'react'
import { Link } from 'react-router-dom'
const Saksham = () => {
  return (
    <div className='mx-auto'>
      <h3 className='text-center text-3xl font-bold py-5'>Saksham App</h3>
      <div class="link  mx-5 text-lg">
      <Link  to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link><span>/</span>  <Link to="/electors"  className='underline cursor-pointer text-blue-600 mx-2' >Electors</Link><span>/</span> <span className='text-pink-500'>Saksham App</span>
      </div>
      <div class="hero_img flex mt-20 justify-center">
        <img src="/saksham_1.png" alt="saksham_app_img"/>
        <img src="/saksham_2.png" alt="saksham_app_img"/>
      </div>

      <div className="info">
        <p className='mx-5 my-3 text-lg'>The Election Commission of India is working towards easing the voter identification and registration process for people with disabilities (PwDs) by offering them customized services. Under a new program, PwDs need to share their essential details with Election Commission via a specially designed app that they can easily download on their Android and iOS phones.</p>
        <p className='mx-5 my-3 text-lg'>For requesting any electoral services, the first-time voters will have to disclose their name, address, and mobile number along with their State, District & Assembly Constituency while the registered voters will have to provide their EPIC number mentioned on the top of their voter id card. Once they do that, a booth-level officer will visit them at home to fulfill other formalities. After that, it’s not long before Voter ID cards are dispatched to their address. Not only has this app also facilitated the PwDs to request for the wheelchair on the poll day.</p>
        <p className='mx-5 my-3 text-lg'>The Saksham App provides a number of features to help PwDs register to vote, find their polling station, and cast their vote. These features include:</p>
        <ul className='mx-5 my-3 text-lg'>
            <li className='my-2'><span className='font-bold mr-1'>Voice assistance:</span>The app provides voice assistance for PwDs who are visually impaired.</li>
            <li className='my-2'><span className='font-bold mr-1'>Text-to-speech:</span>The app provides text-to-speech for PwDs who are hearing impaired.</li>
            <li className='my-2'><span className='font-bold mr-1'>Accessibility features:</span>The app has a number of accessibility features, such as large fonts and high-contrast colors, to make it easier for PwDs to use.</li>
            <li className='my-2'><span className='font-bold mr-1'>Information on polling stations:</span> The app provides information on polling stations, including the location of the polling station, the accessibility features available at the polling station, and the contact details of the polling officials.</li>
            <li className='my-2'><span className='font-bold mr-1'>Complaints:</span>The app allows PwDs to file complaints about any problems they face while participating in the electoral process.</li>
        </ul>
        <p className='mx-5 my-3 text-lg'>The Saksham App is a valuable tool for PwDs to participate in the electoral process. The app is easy to use and provides a number of features that make it easier for PwDs to register to vote, find their polling station, and cast their vote.</p>
      </div>
    
      <div class="download px-5 ">
      <h4 className='font-bold text-3xl my-5'>Link to download the app</h4>
      <div className='flex items-center justify-center'>
        <div>
            <div className='flex items-center gap-3 px-5 '>
                <div class="img">
            <img className='w-20' src="/androidLogoNewIcon.svg" alt="android_logo"/>
                </div>
                <div class="link flex items-center">
                    <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US">Android</a>
                    {/* <a className='underline cursor-pointer text-blue-700 ' href="https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US">https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US</a> */}
                </div>
            </div>
            <div class="android">
                    <img src="/Android.jpg" className='px-5' alt="android_logo"/>

            </div>
        </div>
        <div>
            <div className='flex items-center gap-3 px-5'>
                <div class="img">
                    <img  className='w-20 md:w-20' src="/appleLogoNewIcon.svg" alt="ios"/>
                </div>
                <div class="link flex items-center ">
                  <a className='cursor-pointer text-blue-700 text-md md:text-lg hover:underline' href="https://apps.apple.com/in/app/saksham-eci/id1497864568">iOS</a>
                    {/* <a className='underline cursor-pointer text-blue-700 ' href="https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US">https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN&gl=US</a> */}
                </div>
            </div>
            <div class="android">
            <img src="/Ios.jpg" className='px-5' alt="ios"/>


            </div>
        </div>
       
      </div>
      </div>
     
    </div>
  )
}

export default Saksham
