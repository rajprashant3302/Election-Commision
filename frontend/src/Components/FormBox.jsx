import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable component for displaying an electoral form box.
 * @param {object} props - Component props.
 * @param {string} props.title - Title of the form.
 * @param {string} props.description - Description of the form.
 * @param {string} props.iconSrc - Source URL for the form icon.
 * @param {string} props.bgColor - Tailwind background color class (e.g., 'bg-[#FDE2F5]').
 * @param {string} props.borderColor - Tailwind border color class (e.g., 'border-[#FF64D1]').
 * @param {Array<object>} props.buttons - Array of button objects: [{ text, link, className, isExternal=false }].
 * @param {Array<object>} props.links - Array of link objects: [{ text, link, iconSrc, isDownload=false }].
 */
const FormBox = ({
  title,
  description,
  iconSrc,
  bgColor,
  borderColor,
  buttons = [],
  links = [],
  isWide = false,
}) => {
  const baseClasses = `border-2 rounded-xl m-2.5 p-3 flex flex-col gap-3 ${bgColor} ${borderColor} h-full transition duration-300 ease-in-out hover:shadow-lg`;

  return (
    <div className={`${baseClasses} ${isWide ? 'md:col-span-2' : ''}`}>
      <div className='flex w-full justify-between gap-4'>
        <div className='p-2 shrink-0'>
          {/* Note: Icon width is dynamic based on content but w-24 is a good average */}
          <img src={iconSrc} className='w-24 max-w-none' alt={`${title} form image`} />
        </div>
        <div className='flex-grow'>
          <h3 className='block text-lg font-bold pb-2 pt-2.5 pl-1.5'>{title}</h3>
          {description && <p className='text-sm sm:text-base px-1.5'>{description}</p>}
        </div>
      </div>

      <div className='flex flex-wrap text-sm m-1'>
        {buttons.map((button, index) => (
          <Link to={button.link} key={`btn-${index}`} className='m-1'>
            <button
              className={`btn text-white text-nowrap h-fit my-1 p-2.5 flex items-center rounded-lg shadow-md ${button.className || 'bg-gray-500 hover:bg-gray-600'}`}
            >
              {button.text}
              {(button.link !== '#' || button.isExternal) && (
                <img src="../../src/assets/arrow_outward_white.svg" className='w-4 ml-1' alt="link arrow" />
              )}
            </button>
          </Link>
        ))}
        {links.map((linkItem, index) => (
          <Link
            to={linkItem.link}
            key={`link-${index}`}
            className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center text-gray-700'
          >
            {linkItem.isDownload && <img src="../../src/assets/download.svg" className='w-4 mr-1' alt="download icon" />}
            {linkItem.text}
            {!linkItem.isDownload && !linkItem.iconSrc && <img src="../../src/assets/arrow_outward.svg" className='w-3 ml-1' alt="link arrow" />}
            {linkItem.iconSrc && <img src={linkItem.iconSrc} className='w-3 ml-1' alt="link icon" />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormBox;