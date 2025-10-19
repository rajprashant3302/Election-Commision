// File: ContactUsPage.jsx
import React from "react";
import bgImage from "../assets/bg.jpg";
import { MapPin, Phone, Mail, Printer, Users } from "lucide-react";
import { useNavigate ,Link } from "react-router-dom";
import { contactSections } from "./ContactDataDetails";

const ContactUsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
            {/* Header */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                    Contact Us
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        For any Election related enquiry, please contact us on
                    </h2>

                    <p className="text-gray-700 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        Office: 7, Sardar Patel Marg (Mangles Road), Patna - 800015, Bihar
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-purple-600" />
                        Call Us: 0612-2217956
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                        <Printer className="w-5 h-5 text-purple-600" />
                        Fax Number: 0612-2215611
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-purple-600" />
                        Email: ceo_bihar@eci.gov.in
                    </p>
                </div>


                {/* Contact Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                    {contactSections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => navigate(`/contact/${section.id}`)}
                        >
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <Users className="w-5 h-5 text-white" />
                                {section.title}
                            </h3>
                            <p className="text-sm">
                                Click to view detailed contact information
                            </p>
                        </div>
                    ))}

                    <Link
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                        to={`https://docs.google.com/spreadsheets/d/1EoYf_D7jW2FPvVjR7EBavOHkaMbpqElOjjbVSdBcgVQ/edit`}
                    >
                        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Users className="w-5 h-5 text-white" />
                            BLO Contact Details
                        </h3>
                        <p className="text-sm">
                            Click to view detailed contact information
                        </p>
                    </Link>

                    <div
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => navigate(`/ro-ero-contact`)}
                    >
                        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Users className="w-5 h-5 text-white" />
                                RO/ERO Contact Details
                        </h3>
                        <p className="text-sm">
                            Click to view detailed contact information
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUsPage;
