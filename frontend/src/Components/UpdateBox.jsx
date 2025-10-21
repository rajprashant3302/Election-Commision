import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable component for displaying update/info boxes.
 * @param {object} props - Component props.
 * @param {string} props.title - Title of the section.
 * @param {Array<object>} props.items - Array of items: [{ iconSrc, heading, description, buttons: [{text, link}] }].
 */
const UpdateBox = ({ title, items = [] }) => {
  return (
    <div className="box1 relative border-2 rounded-xl m-2.5 bg-[#DBF7C4] border-[#64C118] flex flex-col w-full">
      <h3 className='text-xl font-bold pt-2.5 pl-4 flex mx-3'>{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {items.map((item, index) => (
          <div key={index} className='p-2 bg-white rounded-lg shadow-md'>
            <div className='flex w-full gap-3'>
              <div className='p-2 shrink-0'>
                <img src={item.iconSrc} className='w-20 sm:w-28 max-w-none' alt={`${item.heading} icon`} />
              </div>
              <div>
                <h4 className='text-lg font-bold pt-2.5 mx-2'>{item.heading}</h4>
                <p className='p-2 text-sm'>{item.description}</p>
              </div>
            </div>
            <div className='flex flex-wrap flex-row mt-3 ml-2 text-sm'>
              {item.buttons.map((button, btnIndex) => (
                <Link to={button.link} key={`btn-${btnIndex}`}>
                  <button className='btn text-sm items-center gap-1 bg-[#ebeaea] text-black hover:bg-[#ffffff] text-nowrap h-fit my-1 mx-1 flex p-2 rounded-lg shadow-sm'>
                    {button.text}
                    <img src="../../src/assets/arrow_outward.svg" className='w-3 ml-1' alt="link arrow" />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateBox;