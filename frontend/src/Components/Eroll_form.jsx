import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Updated Data for the forms: All forms now have two download options for consistency.
const formData = [
  {
    id: 1,
    title: "Form 19 - Claim for inclusion of name in the electoral roll for a Teachers’ Constituency",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form19_pdf1.pdf" },
      { label: "PDF 2", link: "/path/to/form19_pdf2.pdf" },
    ],
  },
  {
    id: 2,
    title: "Form 18 - Claim for inclusion of name in the electoral roll for a Graduates’ Constituency",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form18_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form18_pdf.pdf" },
    ],
  },
  {
    id: 3,
    title: "Form-17-Application for inclusion of name in the electoral roll for a local authorities’ constituency of state legislative council.",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form17_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form17_pdf.pdf" },
    ],
  },
  {
    id: 4,
    title: "Form 8 - Application Form for shifting of Residence/Correction of Entries in Existing Electoral Roll/Replacement of EPIC/Marking of PwD",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form8_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form8_pdf.pdf" },
    ],
  },
  {
    id: 5,
    title: "Form 7 - Application Form for Objection for Proposed Inclusion/ Deletion of Name in Existing Electoral Roll",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form7_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form7_pdf.pdf" },
    ],
  },
  {
    id: 6,
    title: "Form 6B - Letter of Information of Aadhaar number for the purpose of electoral roll authentication",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form6B_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form6B_pdf.pdf" },
    ],
  },
  {
    id: 7,
    title: "Form 6A - Application for inclusion of name in Electoral Roll by an overseas Indian elector.",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form6A_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form6A_pdf.pdf" },
    ],
  },
  {
    id: 8,
    title: "Form 6 - Application Form for New Voters",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form6_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form6_pdf.pdf" },
    ],
  },
  {
    id: 9,
    title: "Form 3 - Statement as to place of Ordinary Residence by a Person employed under the Government of India in a post outside India",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form3_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form3_pdf.pdf" },
    ],
  },
  {
    id: 10,
    title: "Form 2A - Statement as to place of Ordinary Residence by a member of the Armed police force of a State, who is serving outside that State",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form2A_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form2A_pdf.pdf" },
    ],
  },
  {
    id: 11,
    title: "Form 2 - Statement as to place of Ordinary Residence by member of the Armed Forces",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form2_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form2_pdf.pdf" },
    ],
  },
  {
    id: 12,
    title: "Form 1 - Statement as to place of Ordinary Residence by a Person holding a Declared Office",
    pdfs: [
      { label: "PDF 1", link: "/path/to/form1_pdf.pdf" },
      { label: "PDF 2", link: "/path/to/form1_pdf.pdf" },
    ],
  },
];

const Eroll_form = () => {
  // State to keep track of which form is currently open/expanded
  const [openFormId, setOpenFormId] = useState(null);

  // Function to toggle the open/close state of a form
  const toggleForm = (id) => {
    setOpenFormId(openFormId === id ? null : id);
  };

  return (
    <>
    <h3 className='text-center text-3xl font-bold py-5'> Forms For Registration In Electoral Roll</h3>
    <div className="link  mx-5 text-lg">
      <Link  to="/" className='underline cursor-pointer text-blue-600 mx-2'>Home</Link><span>/</span>  <Link to="/electors"  className='underline cursor-pointer text-blue-600 mx-2' >Electors</Link><span>/</span> <span className='text-pink-500'>Forms For Registration In Electoral Roll </span>
      </div>
    <div className="min-h-screen  my-3 p-4 md:p-8 font-sans">
      <div className="bg-white p-6 md:p-8 shadow-lg rounded-xl w-full max-w-4xl mx-auto">
  

        <div className="space-y-4">
          {formData.map((form) => (
            <div key={form.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Form Header (Clickable to toggle content) */}
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                onClick={() => toggleForm(form.id)}
                aria-expanded={openFormId === form.id}
                aria-controls={`form-content-${form.id}`}
              >
                <span className="text-base md:text-lg font-semibold text-gray-800">
                  {form.id}. {form.title}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${
                    openFormId === form.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Form Content (PDF buttons), conditionally rendered */}
              {openFormId === form.id && (
                <div id={`form-content-${form.id}`} className="p-4 bg-white border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {form.pdfs.map((pdf, index) => (
                      <a
                        key={index}
                        href={pdf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                        </svg>
                        {pdf.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Eroll_form;