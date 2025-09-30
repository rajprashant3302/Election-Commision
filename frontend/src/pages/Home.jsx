import React from "react";
import Infotabs from "../Components/Infotabs";
import EGallery from "../Components/EGallery";
import Video from "../Components/Video";
import Imagebar from "../Components/Imagebar";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import OfficerCard from "../Components/OfficerCard";
import EnumerationFormLinks from "../Components/EnumerationFormLinks";
import Nav from "../Components/Nav";
import CollectionCard from "../Components/CollectionCard"

const Home = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <Imagebar />
      <div className="flex flex-wrap gap-2 md:gap-2 justify-center p-3 md:p-1">
        <OfficerCard />
        <EnumerationFormLinks />
      </div>
      <Infotabs />
      <EGallery />
      <CollectionCard/>
     <div className="py-12 bg-gradient-to-br from-blue-700 via-slate-300 to-fuchsia-800 animate-gradient">
  {/* Heading */}
  <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10 tracking-wide">
    <span className="bg-gradient-to-b from-white via-white to-black-300 bg-clip-text text-transparent">
      Our Featured Videos
    </span>
  </h2>

{/* Videos Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                gap-x-5 sm:gap-x-8 lg:gap-x-10 
                gap-y-12 sm:gap-y-8 lg:gap-y-10 px-4">
  <Video videoUrl="https://www.youtube.com/embed/QJ9eyZbx61g?si=OLHkV80CdKxmsq9J" />
  <Video videoUrl="https://www.youtube.com/embed/b8X8Eg29BK4?si=dvTDjr27-tQaSjug" />
  <Video videoUrl="https://www.youtube.com/embed/TcYjgoD_-Ng?si=kWyDNW_l4V7Xcnbr" />
  <Video videoUrl="https://www.youtube.com/embed/-x6cXNUuEdk?si=7t4Zk_sVotRno-C5" />
</div>

</div>
       
      <Footer />
    </div>
  );
};

export default Home;
