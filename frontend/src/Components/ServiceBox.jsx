import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable component for displaying a service box.
 * @param {object} props - Component props.
 * @param {string} props.title - Title of the service.
 * @param {string} props.description - Description of the service.
 * @param {string} props.iconSrc - Source URL for the service icon.
 * @param {string} props.bgColor - Tailwind background color class.
 * @param {string} props.borderColor - Tailwind border color class.
 * @param {string} props.linkTo - Destination link.
 * @param {boolean} props.isWide - If the box should span 2 columns on mobile/tablet.
 * @param {Array<object>} props.extraLinks - Array of link objects: [{ text, link, iconSrc }].
 * @param {string} props.extraImageSrc - Optional extra image source (e.g., human.png).
 */
const ServiceBox = ({
  title,
  description,
  iconSrc,
  bgColor,
  borderColor,
  linkTo,
  isWide = false,
  extraLinks = [],
  extraImageSrc,
}) => {
  const baseClasses = `border-2 rounded-xl m-2.5 p-3 flex flex-col cursor-pointer transition transform ease-in duration-200 hover:scale-[1.02] hover:shadow-xl ${bgColor} ${borderColor} h-full`;

  return (
    <div className={isWide ? 'col-span-1 md:col-span-2' : ''}>
      <Link to={linkTo} className='block h-full'>
        <div className={baseClasses}>
          <div className={`flex w-full ${extraImageSrc ? 'justify-between' : 'items-center'} gap-4`}>
            <div className='p-1 shrink-0'>
              <img
                src={iconSrc}
                className={`rounded-[50%] max-w-none ${extraImageSrc ? 'w-24 sm:w-28' : 'w-16 sm:w-20'}`}
                alt={`${title} image`}
              />
            </div>
            <div className='flex-grow'>
              <h3 className='block text-lg font-bold pb-1 pt-2.5 pl-1.5'>{title}</h3>
              {description && <p className='px-1.5 text-sm sm:text-base'>{description}</p>}
              {extraLinks.map((linkItem, index) => (
                <Link
                  to={linkItem.link}
                  key={`extra-link-${index}`}
                  className='w-fit my-1 mx-2 hover:underline hover:text-blue-700 flex items-center text-sm text-gray-700'
                >
                  {linkItem.text}
                  {linkItem.iconSrc && <img src={linkItem.iconSrc} className='w-3 ml-1' alt="link icon" />}
                </Link>
              ))}
            </div>
          </div>
          {extraImageSrc && (
            <div className='flex justify-end pr-2 pt-2'>
              <img src={extraImageSrc} className='w-14' alt="help image" />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ServiceBox;