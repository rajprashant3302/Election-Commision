import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from '../Components/NavMenu'
import Nav from '../Components/Nav'

const Homepage = () => {
  return (
    <>
    <div className='parent1 rounded-2xl m-2  grid  justify-center gap-3 grid-cols-1 md:grid-cols-5'> 
      <div className="forms bg-[#d3e1ee] col-span-3 rounded-2xl">
        <h1 className='bg-blue-800 rounded-t-[16px] text-white p-3 text-xl tracking-widest'>FORMS</h1>

        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
        <div className='box1 md:col-span-2 border-2 rounded m-2.5 bg-[#FBE3E3] border-[#EF4040] flex justify-between '>
            <div className='p-3'><img src="/SIRform.svg" className='w-24' alt="EF form image"/></div>
            <div className='w-full pl-5 pr-2 md:pr-16'>
                <h3 className='text-xl font-bold pb-2.5 pt-4 pl-1.5'>SIR Final Publication 2025 (Bihar)</h3>
                <Link to="/sections/electorals/sir-finalroll"><button className='btn btn-primary my-2 p-2.5 cursor-pointer w-full block '>Download SIR Final Roll</button></Link>
                <Link to="/sections/electorals/sir-finalroll-fullAC"><button className='btn btn-success my-2 p-2.5 cursor-pointer w-full block '>Download SIR Final Roll for full AC</button></Link>
               <Link to="/sections/electorals/sir-finalroll-fullAC"> <button className='btn btn-danger my-2 p-2.5 cursor-pointer w-full block '>Download SIR Draft Roll</button></Link>
                 <Link to="/sections/electorals/search-name-draft-roll"> <button className='btn hover:bg-[#a36edd] text-white bg-[#c081ea] my-2 p-2.5 cursor-pointer w-full block '>Search Your Name in Draft Roll</button></Link>
                 <Link to='#' className='w-full my-1 mx-2 hover:underline hover:text-blue-700 flex '>Search Your Name in 2003 Bihar E-roll <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
                <Link to='#' className='w-full my-1 mx-2 hover:underline hover:text-blue-700 flex '>Lists of claims and objections  <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
            </div>
        </div>

        <div className="box2 border-2 rounded m-2.5 bg-[#FDE2F5] border-[#FF64D1] w-fit flex flex-col  justify-between h-fit">
        <div className='flex w-full justify-between gap-3'>
        <div className='p-2'><img src="/new_voter_reg.svg" className='w-24' alt="EF form image"/></div>
        <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>New Voter Registration</h3>
                <p className='text-md px-2'>Fill Form 6 if you are 18 years or above or you will turn 18 in few months</p>
            </div>
        </div>
            <div className='flex flex-wrap text-sm  m-2'>
                <Link to='#'><button className='btn bg-[#FF64D1] text-white hover:bg-[#fc81d7] text-nowrap h-fit my-2 mx-1 flex items-center'>Fill form 6 <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
                <Link to='#'><button className='btn bg-[#FF64D1] text-white hover:bg-[#fc81d7] text-nowrap h-fit my-2 mx-1 flex items-center'>Fill Annexure D (Bihar) <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
                <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center '> < img src="/download.svg" alt="download_icon"/> Download </Link>
                <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'>Guidelines <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
                <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'><img src="/download.svg" alt="download_icon"/> Download Annexure D for Pre drafts Forms </Link>


            </div>
        </div>

        <div className="box3 border-2 rounded m-2.5 bg-[#E4F6FC] border-[#2BB9E9] flex flex-col gap-3 h-fit">
       <div className='flex w-full justify-between gap-3'>
       <div className='p-2'><img src="/new_voter_reg_nri.svg" className='w-32' alt="EF form image"/></div>
            <div>
            <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>New Voter Registration (NRI)</h3>
            <p className='px-2'>Fill Form 6A if you are a citizen of India and has not acquired citizenship of any other country.</p>
            </div>
       </div>
            <div className='flex flex-wrap  m-2 text-sm'>
            <Link to='#'><button className='btn bg-[#2bb9e9] text-white hover:bg-[#5ed1f8] text-nowrap h-fit my-2 mx-1 flex'>Fill form 6A <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download </Link>
            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'>Guidelines <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
            </div>
        </div>
        <div className="box4 border-2 rounded m-2.5 bg-[#FBE3E3] border-[#EF4040] flex flex-col gap-3">

            <div className='flex w-full justify-between gap-3'>
            <div className='p-2'><img src="/deletion.svg" className='w-20 md:w-24' alt="EF form image"/></div>
            <div>
            <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Deletion</h3>

            <p className='px-2'>Fill Form 7 to get name deleted from the existing electoral roll.</p>
            </div>
            </div>

        <div className='flex flex-wrap  m-2 text-sm'>
        <Link to='#'><button className='btn bg-[#ef4040] text-white hover:bg-[#ff6363] text-nowrap h-fit my-2 mx-1 flex'>Fill form 7 <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
        <Link to='#'><button className='btn bg-[#ef4040] text-white hover:bg-[#ff6363] text-nowrap h-fit my-2 mx-1 flex'>Fill form 7 Overseas <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
        <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download </Link>
            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'>Guidelines <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
         
            </div>
        </div>

        <div className="box5 border-2 rounded m-2.5 bg-[#DBF7C4] border-[#64C118] flex flex-col gap-3 h-fit">
        <div className='flex w-full justify-between gap-3'>
        <div className='p-2'><img src="/correction_entries.svg" className='w-24' alt="EF form image"/></div>
        <div>
            <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Correction of Entries</h3>

            <p className='px-2'>Fill Form 8 to get EPIC with updated or replacement or marking of PwD.</p>
            </div>
          </div>
            <div className='flex flex-wrap  m-2 text-sm'>
            <Link to='#'><button className='btn bg-[#64c118] text-white hover:bg-[#85cb4c] text-nowrap h-fit my-2 mx-1 flex'>Fill form 8 <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>
            <Link to='#'><button className='btn bg-[#64c118] text-white hover:bg-[#85cb4c] text-wrap h-fit my-2 mx-1 flex'>Fill form 8 Overseas (Self correction only) <img src="/arrow_outward_white.svg" alt="link_arrow"/></button></Link>

            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download </Link>
            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'>Guidelines <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>

            <Link to='#'><button className='btn bg-[#64c118] text-white hover:bg-[#85cb4c] text-nowrap h-fit my-2 mx-1 flex'>Fill Annexure D (Bihar)</button></Link>
            <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download Annexure D for Pre-Draft Forms</Link>


            </div>
        </div>

        <div className="box6 border-2 rounded m-2.5 bg-[#FFDEBA] border-[#EB9131] flex flex-col gap-3">
        <div className='flex w-full justify-between gap-3'>
          <div className='p-2'><img src="/formMFilled.svg" className='w-48' alt="EF form image"/></div>
            <div>
            <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Form M</h3>

            <p className='px-2'>This form is for the Migrant Electors of Kashmir who want to cast vote from any one special polling station of Delhi, Jammu and Udhampur.</p>
            </div>
          </div>
          <div className='flex flex-wrap  m-2 text-sm'>
          <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download </Link>

            </div>

        </div>


        <div className="box7 border-2 rounded m-2.5 bg-[#F4EDFF] border-[#A36EF6] flex flex-col gap-3 h-fit">
        <div className='flex w-full justify-between gap-3'>
        <div className='p-2'><img src="/form12CFilled.svg" className='w-32' alt="EF form image"/></div>
        <div>
            <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Form 12C</h3>

            <p  className='px-2'>This form is for Migrant Electors of Kashmir who want to cast vote through postal ballot.</p>
            </div>
           </div>
           <div className='flex flex-wrap  m-2 text-sm'>
          <Link to='#' className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'> < img src="/download.svg" alt="download_icon"/> Download </Link>

            </div>


        </div>
        </div>

      </div>


      <div className="services bg-[#d3e1ee] col-span-2 rounded-2xl">
        <h3 className='bg-blue-800 rounded-t-[16px] text-white p-3 text-xl tracking-widest'>SERVICES</h3>

        <div className='grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-3'>
       
      <Link className='col-span-2 md:col-span-1' to="#">
      <div className="box1 cursor-pointer  border-2 rounded m-2.5 bg-[#E4F6FC] border-[#2BB9E9] flex flex-col ">
        <div className='flex w-fit h-fit md:w-full justify-between gap-3'>
       <div className='p-2 '><img src="/reg_complaint.jpeg" className='w-20 md:w-28 rounded-[50%]' alt="EF form image"/></div>
            <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Register Complaint/ Share Suggestions</h3>
            </div>
       </div>
       <div className='flex flex-wrap justify-between  m-2 text-sm'>
       <Link to='#' className=' w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center'>Chatbot Manual <img src="/arrow_outward.svg" alt="link_arrow"/> </Link>
        <img src="/human.png" className='w-14' alt="help_image"/>
            </div>

        </div>
      </Link>
        
      <Link className='col-span-2 md:col-span-1' to="#">
        <div className="box2 md:min-h-36 h-fit cursor-pointer   border-2 rounded m-2.5 bg-[#ffecba] border-[#ffc93a] flex flex-col">
        <div className='flex w-fit justify-between gap-5'>
       <div className='p-2 '><img src="/trackApplication.png" className='w-20 rounded-[50%]' alt="EF form image"/></div>
           <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Track Application Status</h3>
                <p className='px-2'>Track all your form status here</p>
            </div>
       </div>
        </div>
        </Link>

        <Link className='col-span-2 md:col-span-1' to="#">
        <div className="box3 cursor-pointer  border-2 rounded m-2.5 bg-[#ffe5d2] border-[#f88a3c] flex flex-col">
     <div className='flex w-fit md:w-full gap-5 md:gap-0'>
              <div className='p-2 '><img src="/bookCall.png" className='w-20 rounded-[50%]' alt="EF form image"/></div>
     <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Book a call with BLO</h3>
                <p className='px-2 mb-2'>Book a call request with BLO</p>
            </div>
      </div>
        </div>
     </Link>
     <Link className='col-span-2 md:col-span-1' to="#">
     <div className="box4 cursor-pointer  border-2 rounded m-2.5 bg-[#E4F6FC] border-[#2BB9E9]  flex flex-col">
     <div style={{display: 'flex'}} className='flex w-fit md:w-full justify-between gap-5 md:gap-5'>
     <div className='p-2 '><img src="/epic_download.jpeg" className='w-20 md:w-32 rounded-[50%]' alt="EF form image"/></div>
     <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>E-PIC Download</h3>
                <p className='px-2 mb-2'>Get digital version of your Electoral Photo Identity Card</p>
            </div>
     </div>
        </div>
     </Link>
     <Link className='col-span-2' to="#">
     <div className="box5 cursor-pointer  border-2 rounded m-2.5 bg-[#fde2f5] border-[#ff64d1] flex flex-col mx-3">
     <div className='flex w-fit md:w-full  gap-4'>
    <div className='p-2 '><img src="/searchRoll.png" className='w-24 md:w-20 rounded-[50%]' alt="EF form image"/></div>
     <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Search Your Name In Voter List </h3>
                <p className='px-2 mb-2'>Search your name in voter list, know your poll details, know your MP/ MLA </p>
            </div>
    </div>
        </div>

     </Link>
     <Link className='col-span-2' to="#">
     <div class="box6 cursor-pointer  border-2 rounded m-2.5  bg-[#E4F6FC] border-[#2BB9E9] flex flex-col mx-3">
     <div className='flex w-fit md:w-full  gap-5 md:gap-0'>
     <div className='p-2 '><img src="/epic_download.jpeg" className='w-20 md:w-16 rounded-[50%]' alt="EF form image"/></div>
     <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Download Electoral Roll</h3>
                <p className='px-2 mb-2'>Download Electoral Roll PDF</p>
            </div>
     </div>
        </div>
     </Link>
     
     <Link className='col-span-2 md:col-span-1' to="/sections/electorals/homepage">
  <div className="boxElectors cursor-pointer border-2 rounded m-2.5 bg-[#E4F6FC] border-[#2BB9E9] flex flex-col">
    <div className='flex w-fit md:w-full justify-between gap-3'>
      <div className='p-2 '>
        <img src="/electors_icon.svg" className='w-20 rounded-[50%]' alt="Electors" />
      </div>
      <div>
        <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Electors</h3>
        <p className='px-2 mb-2'>View information related to registered electors.</p>
      </div>
    </div>
  </div>
</Link>


        <hr className='col-span-2'/>
        <Link className='col-span-2' to="#">
     <div className="box7 cursor-pointer border-2 rounded m-2.5 bg-[#DBF7C4] border-[#64C118] flex flex-col">
     <div className='flex items-center gap-8'>
    <div className='p-2 '><img src="/faqIconQuestionMark.svg" className='w-16 rounded-[50%]' alt="EF form image"/></div>
           <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Frequently Asked Questions</h3>
            </div>
    </div>
        </div>
     </Link>

     <Link className='col-span-2' to="#">
     <div className="box8 cursor-pointer border-2 rounded m-2.5 bg-[#FDE2F5] border-[#FF64D1] flex flex-col">
     <div className='flex items-center gap-8'>
    <div className='p-2 '><img src="/logo.png" className='w-20 rounded-[50%]' alt="EF form image"/></div>
           <div>
                <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>Visit ECI website: <Link className='underline text-blue-700' to="https://eci.gov.in">https://eci.gov.in</Link></h3>
            </div>
    </div>
        </div>
     </Link>
     <Link className='col-span-2' to="#">
     <div className="box9 cursor-pointer  border-2 rounded m-2.5 bg-[#E4F6FC] border-[#2BB9E9] flex flex-col">
     <div className='flex items-center gap-8'>
    <div className='p-2 '><img src="/initiative.png" className='w-16 rounded-[0%]' alt="EF form image"/></div>
           <div>
                <h3 className='text-lg font-bold pb-2 pt-2.5 pl-1.5 flex'>ECINet App  < img src="/androidLogoNewIcon.svg" className='mx-2.5' alt="android_logo"/> < img src="/appleLogoNewIcon.svg" alt="mac_logo"/></h3>
            </div>
    </div>
        </div>
     </Link>
     <Link className='col-span-2' to="#">
     <div className="box10 cursor-pointer  border-2 rounded m-2.5 bg-[#DBF7C4] border-[#64C118] flex flex-col">
     <div className='flex items-center gap-8'>
    <div className='p-2 '><img src="/ecinet_logo.png" className='w-16 rounded-[50%]' alt="EF form image"/></div>
           <div>
                <h3 className='text-lg font-bold pb-2 pt-2.5 pl-1.5 flex'>30 Initiatives of ECI  < img src="/download.svg" alt="download_icon"/></h3>
            </div>
    </div>
        </div>
     </Link>
      
        </div>


      </div>
    </div>

    <div className='parent2 bg-[#d3e1ee] mx-2 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center'>
    <div className="box1 scale-95 mx-auto col-span-2 md:col-span-1 relative border-2 rounded m-2.5 bg-[#DBF7C4] border-[#64C118] flex flex-col w-full">
        <h3 className='text-lg font-bold pt-2.5 pl-1.5 flex mx-3'>Updates</h3>
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-3 p-3">
           <div>
             <div className='flex w-fit justify-between gap-5'>    
             <div className='p-2 '><img src="/electionsIconNew.svg" className='w-24 rounded-[0%]' alt="EF form image"/></div>
             <div>
                <h4 className='text-lg font-bold pt-2.5 flex mx-2'>Elections</h4>
                <p className='p-2'>Current, future & past election and candidate information</p>
                </div>
            </div>
            <Link to='#'><button className='btn text-sm items-center gap-1 bg-[#ebeaea] text-black hover:bg-[#ffffff] text-nowrap h-fit my-2 mx-1 mt-3 flex'>View Information <img src="/arrow_outward.svg" alt="link_arrow"/></button></Link>
            </div>
           <div>
             <div className='flex  w-fit justify-between gap-5'>
             <div className='p-2'><img src="/electionsResultIcon.svg" className='w-32 rounded-[0%]' alt="EF form image"/></div>
             <div>
                <h4 className='text-lg font-bold pt-2.5 flex mx-2'>Elections Results</h4>
                <p className='p-2'>View current election results or view past election results and statistical report.</p>
                </div>
            </div>
           <div className='flex flex-wrap flex-row m-2 text-sm'>
           <Link to='#'><button className='btn text-sm items-center gap-1 bg-[#ebeaea] text-black hover:bg-[#ffffff] text-nowrap h-fit my-2 mx-1 flex'>View Results <img src="/arrow_outward.svg" alt="link_arrow"/></button></Link>
           <Link to='#'><button className='btn text-sm items-center gap-1 bg-[#ebeaea] text-black hover:bg-[#ffffff] text-nowrap h-fit my-2 mx-1 flex'>View Report <img src="/arrow_outward.svg" alt="link_arrow"/></button></Link>
           </div>

           </div>
        
           
        </div>
    </div>

    <div className="box2  border-2 rounded m-2.5  bg-[#FDE2F5] border-[#FF64D1] flex flex-col h-fit">
        <h3 className='text-lg font-bold pt-2.5 pl-2.5 flex mx-3'>About ECI</h3>
        <p className='p-2 mx-3'>The Election Commission of India is an autonomous constitutional authority responsible for administering Union and State election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.</p>
        <Link to='#'><button className='btn text-sm items-center gap-1 bg-[#ebeaea] text-black hover:bg-[#ffffff] text-nowrap h-fit my-2 mx-3 mt-3 flex'>Read More <img src="/arrow_outward.svg" alt="link_arrow"/></button></Link>
        </div>
    <div className="box3 col-span-2 mx-2 border-2 rounded m-2.5  bg-[#FDE2F5] border-[#FF64D1] flex flex-col h-fit w-fit">
        <h3 className='text-lg font-bold pt-2.5 pl-1.5 flex mx-3'>Contact</h3>
      <div className="grid  grid-cols-1 md:grid-cols-3 justify-between p-3">
      <div>
            <div>
                <div className='flex items-center gap-2'>
                <div className='p-2 '><img src="/call.svg" className='w-8 rounded-[0%]' alt="EF form image"/></div>
                <span className='text-lg font-bold'>Contact Number</span>
                </div>
                <Link className='mx-5 px-1' to="#">1950 (Toll-free Number)</Link>
            </div>
        </div>
        <div>
            <div>
                <div className='flex items-center gap-2'>
                <div className='p-2 '><img src="/post.svg" className='w-8 rounded-[0%]' alt="EF form image"/></div>
                <span className='text-lg font-bold'>Postal Address</span>
                </div>
                <p className='mx-5 px-1'>Election Commission Of India, Nirvachan Sadan, Ashoka Road, New Delhi 110001</p>
            </div>
        </div>
        <div>
            <div>
                <div className='flex items-center gap-2'>
                <div className='p-2 '><img src="/mail.svg" className='w-8 rounded-[0%]' alt="EF form image"/></div>
                <span className='text-lg font-bold'>Email </span>
                </div>
                <Link className='mx-5 px-1' to="#">complaints@eci.gov.in</Link>
            </div>
        </div>
      </div>
    </div>

    </div>

    <div class="footer bg-[#d3e1ee] rounded mt-3">
        <div className='flex justify-between mx-3'>
            <div className='flex items-center gap-2'>
            <div className='p-2 '><img src="/sound.svg" className='w-8 rounded-[0%]' alt="sound_image"/></div>
            <Link className='underline cursor-pointer text-blue-700' to="#">ECI Updates</Link>
            </div>
            <div className='flex items-center gap-2'>
            <div className='p-2 '><img src="/contact_dir.svg" className='w-8 rounded-[0%]' alt="contact_dir_image"/></div>
            <Link className='underline cursor-pointer text-blue-700' to="#">Contact Directory</Link>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Homepage
