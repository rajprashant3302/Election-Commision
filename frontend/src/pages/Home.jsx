import React from 'react'
import Infotabs from '../Components/Infotabs'
import EGallery from '../Components/EGallery'
import Video from '../Components/Video'
import Imagebar from '../Components/Imagebar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import OfficerCard from '../Components/OfficerCard'
import EnumerationFormLinks from '../Components/EnumerationFormLinks'
import Nav from '../Components/Nav'


const Home = () => {
  return (
    <div>
      <Nav/>
      <Carousel/>
      <Imagebar/>
      <div className='flex flex-wrap gap-2 justify-center p-3 md:p-1'>
      <OfficerCard/>
      <EnumerationFormLinks/>
      </div>
      <Infotabs/>
      <EGallery/>
      <div className='-mt-2 bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]'>
        <h2 className='text-center w-full  p-4 text-4xl font-semibold text-white  mt-2 mb-2  decoration-yellow-300  '>Videos</h2>
      <div className='flex flex-wrap justify-center items-center '>

        <Video videoUrl="https://www.youtube.com/embed/QJ9eyZbx61g?si=OLHkV80CdKxmsq9J"/>
        <Video videoUrl="https://www.youtube.com/embed/b8X8Eg29BK4?si=dvTDjr27-tQaSjug"/>
        <Video videoUrl="https://www.youtube.com/embed/TcYjgoD_-Ng?si=kWyDNW_l4V7Xcnbr"/>
        <Video videoUrl="https://www.youtube.com/embed/-x6cXNUuEdk?si=7t4Zk_sVotRno-C5"/>

      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
