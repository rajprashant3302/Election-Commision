import React from "react";

const OfficerCard = () => {
  return (
    <div className="bg-white w-full sm:max-w-full lg:max-w-[380px] mx-auto mt-10 rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-3 text-lg font-semibold">
        Chief Electoral Officer
      </div>

      {/* Profile and Info */}
      <div className="p-6 flex flex-col  lg:flex-col items-center gap-6">
        {/* Image & Name */}
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <img
            src="https://ceoelection.bihar.gov.in/img_new/ceo_image4.jpeg"
            alt="Chief Electoral Officer"
            className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-white"
          />
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mt-4">
            Sh. Vinod Singh Gunjiyal, I.A.S.
          </h2>
          <h3 className="text-sm font-semibold text-gray-600">
            Chief Electoral Officer, Bihar
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
          The site has primarily been made to improve communication between the
          electors of Bihar and the Department of Election in Bihar. It provides
          adequate and relevant information about the office of the Chief
          Electoral Officer and the various activities conducted by the
          department. Various important Forms are also available on the site for
          download purposes. The office of the Chief Electoral Officer functions
          under the overall supervision and control of the Election Commission
          of India. Electors and public in general are requested to use it and
          give their opinion/suggestions for further improvement in the site and
          making it transparent and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default OfficerCard;
