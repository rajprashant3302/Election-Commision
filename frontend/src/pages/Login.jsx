import { Button } from 'bootstrap';
import React from 'react'
// import Footer from '../Components/Footer'
// import Nav from '../Components/Nav'
// import Image from 'next/image'

import { useState } from 'react'
import { Link } from 'react-router-dom'


const handleSubmit = (e) => {
    e.preventDefault();

  };
const Login = () => {
  const [cont,setCont] = useState(true);
  const activeStyle = {
    
    fontWeight: "400",
    borderBottom: "2px solid rgb(25, 255, 255)",
  };

  const inactiveStyle = {
    color: "rgb(140, 135, 135)",
    fontWeight: "600",
  };
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleSubmit2 = (e) => {
    e.preventDefault();

  };

  return (
    <div class="flex ">
        <div class="logo hidden md:block h-[55vh] w-[40vw] pl-[15vw] pt-[15vh]">
            <img src="../../src/assets/logo.png" alt="Logo" className='h-56'/>
            
        </div>
        <div class="login px-4 border-1 border-slate-500 flex flex-col items-center py-4 h-fit w-fit mx-auto mt-5 rounded">
            <h3 className='text-center font-bold text-xl mb-3'>Login</h3>
            <div>
               <div className='flex gap-4 mb-4'>
               <button
                style={cont ? activeStyle : inactiveStyle}
                onClick={() => setCont(true)}>Indian Resident Elector</button>
               <button
                style={!cont ? activeStyle : inactiveStyle}
                onClick={() => setCont(false)}>Indian Overseas Elector</button>
               </div>
              

                {cont ? (
          <div>
            <form onSubmit={handleSubmit}>

            <div style={{ marginBottom: "10px" }}>
          <label for='email' className='font-semibold pl-1'>Registered Mobile No./Email ID/EPIC No.<span className=' text-red-700'>*</span> </label><br />
          <input
            type="text"
            name="email"
            placeholder='Enter registered Mobile No./Email ID/EPIC No.'
            id="email"
            className='border-1 border-black rounded-sm mt-2'
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <span>captcha</span>
        <div style={{ marginBottom: "10px" }}>
          <label for='captcha'className='font-semibold pl-1'>Captcha <span className=' text-red-700'>*</span></label><br />
          <input
            type="text"
            name="captcha"
            id="captcha"
            placeholder='Enter captcha'
            className='border-1 border-black rounded-sm mt-2'
            value={formData.captcha}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.captcha && <p style={{ color: "red" }}>{errors.captcha}</p>}
        </div>

<button type="submit" className='btn btn-primary hover:bg-blue-500 w-full font-bold cursor-pointer mt-3'>Request OTP</button>

            </form>
           
          </div>
       
        ) : (

             //   second div
             
          <div>
            <form onSubmit={handleSubmit2}>

<div style={{ marginBottom: "10px" }}>
<label for='email' className='font-semibold pl-1'>Registered Email ID <span className=' text-red-700'>*</span></label><br />
<input
type="text"
name="email"
id="email"
placeholder='Enter registered email ID'
className='border-1 border-black rounded-md mt-2'
value={formData.email}
onChange={handleChange}
style={{ width: "100%", padding: "8px" }}
/>
{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
</div>

<span>captcha</span>
<div style={{ marginBottom: "10px" }}>
<label for='captcha' className='font-semibold pl-1'>Captcha <span className=' text-red-700'>*</span></label><br />
<input
type="text"
name="captcha"
id="captcha"
placeholder='Enter captcha'
className='border-1 border-black rounded-md mt-2'
value={formData.captcha}
onChange={handleChange}
style={{ width: "100%", padding: "8px" }}
/>
{errors.captcha && <p style={{ color: "red" }}>{errors.captcha}</p>}
</div>

<button type="submit" className='btn btn-primary hover:bg-blue-500 w-full font-bold cursor-pointer mt-3'>Request OTP</button>

</form>
         
          </div>
        )}
                
            </div>
        </div>
    </div>
  )
}

export default Login
