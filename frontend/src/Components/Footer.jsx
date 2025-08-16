import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 ... text-white">
      <div className="max-w-7xl mx-auto  py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* QR Code on left */}
          <div className="flex-shrink-0 w-96 justify-center mb-10 lg:mb-0 lg:w-1/5">
            <div className="bg-slate-100 shadow-lg rounded-2xl p-6 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ceoelection.bihar.gov.in/img_new/qr.png"
                alt="CMRF QR Code"
                className="w-40 h-40 mb-4 rounded-lg border-4 border-blue-400 p-2 bg-gray-50"
              />
              <p className="text-center text-md font-semibold text-gray-700">
                Quick Donate on CMRF website,
                <br />
                Scan the QR code using your mobile.
              </p>
            </div>
          </div>

          {/* Center links */}
          <div className="flex flex-grow justify-between text-center lg:text-left space-x-4">
            <div className="w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white">
                Quick links
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Election Commission of India
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Voter Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Facts Check
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Bihar State Portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white">
                Important Links
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Apply for VOTER CARD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Download Forms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    ECI Results
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Search in E-Roll
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white">
                May I Help You?
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Voter Helpline No: 1950
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    National Grievance Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    cVIGIL Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 active:text-yellow-400 transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map on right */}
          <div className="flex-shrink-0 mt-10 lg:mt-0 lg:w-1/3">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.2829754698514!2d85.14109021459496!3d25.619897183644933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e8aa13dba66f%3A0xbad411b0f61e11f7!2sOffice%20of%20the%20Chief%20Electoral%20Officer%2C%20Bihar!5e0!3m2!1sen!2sin!4v1691681234567!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-lg border-4 border-white"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mt-8 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Email" className="hover:text-gray-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Footer bottom text */}
        <div className="mt-8 text-center text-sm font-semibold">
          <p>
            Home &nbsp; |&nbsp; Gallery &nbsp;|&nbsp; Assets Declaration
            &nbsp;|&nbsp; ECI Mobile Apps &nbsp; |&nbsp; Contact Us
            &nbsp;|&nbsp; Site Map
          </p>
          <p className="mt-1">
            Copyright © Office of the Chief Electoral Officer, Bihar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
