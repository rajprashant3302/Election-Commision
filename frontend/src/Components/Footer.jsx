import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto py-10">
        {/* Main Container */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-10">
          {/* QR Code Section */}
          <div className="flex justify-center mb-10 lg:mb-0 w-full sm:w-96 lg:w-1/5">
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
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center lg:items-start lg:justify-between text-center lg:text-left w-full lg:w-auto gap-6 lg:gap-0">
            <div className="w-full sm:w-1/4 md:w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white mx-28 sm:mx-0">
                Quick links
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <a
                    href="https://www.eci.gov.in/"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Election Commission of India
                  </a>
                </li>
                <li>
                  <a
                    href="https://nvsp.in/"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Voter Portal
                  </a>
                </li>
                <li>
                  <Link
                    to="/fact-check"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Facts Check
                  </Link>
                </li>
                <li>
                  <a
                    href="https://state.bihar.gov.in/main/CitizenHome.html"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Bihar State Portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/4 md:w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white mx-28 sm:mx-0">
                Important Links
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <a
                    href="https://nvsp.in/"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Apply for VOTER CARD
                  </a>
                </li>
                <li>
                  <Link
                    to="/formpage"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Download Forms
                  </Link>
                </li>
                <li>
                  <a
                    href="https://eci.gov.in/statistical-report/statistical-reports/"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    ECI Results
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Search in E-Roll
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/4 md:w-1/4">
              <h4 className="font-semibold border-b border-white pb-2 mb-3 text-white mx-28 sm:mx-0">
                May I Help You?
              </h4>
              <ul className="space-y-1 text-sm font-semibold">
                <li>
                  <Link
                    to="/voter-helpline"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Voter Helpline No: 1950
                  </Link>
                </li>
                <li>
                  <a
                    href="https://eci-citizenservices.eci.nic.in/"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    National Grievance Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=in.nic.eci.cvigil"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    cVIGIL Mobile App
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex justify-center mt-10 lg:mt-0 w-full lg:w-1/3">
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

        {/* Social Media */}
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

        {/* Footer bottom */}
        <div className="mt-8 text-center text-sm font-semibold">
          <p className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">
              Home
            </Link>
            <span>|</span>
            <Link to="/gallery" className="hover:text-yellow-300 transition-colors duration-200">
              Gallery
            </Link>
            <span>|</span>
            <Link to="/assets-declaration" className="hover:text-yellow-300 transition-colors duration-200">
              Assets Declaration
            </Link>
            <span>|</span>
            <Link to="/eci-apps" className="hover:text-yellow-300 transition-colors duration-200">
              ECI Mobile Apps
            </Link>
            <span>|</span>
            <Link to="/contact-us" className="hover:text-yellow-300 transition-colors duration-200">
              Contact Us
            </Link>
            <span>|</span>
            <Link to="/site-map" className="hover:text-yellow-300 transition-colors duration-200">
              Site Map
            </Link>
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
