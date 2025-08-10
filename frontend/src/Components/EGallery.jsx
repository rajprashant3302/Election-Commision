import React from "react";
import { Marquee } from "./magicui/marquee"; // Make sure this component exists and works as intended

const apps = [
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_img4.png",
    alt: "cVIGIL",
    title: "cVIGIL",
    link: "https://www.eci.gov.in/error",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/Saksham.png",
    alt: "Saksham-ECI",
    title: "Saksham-ECI",
    link: "https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_img6.png",
    alt: "Voter Helpline",
    title: "Voter Helpline",
    link: "https://play.google.com/store/apps/details?id=com.eci.citizen",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_img7.jpg",
    alt: "Encore",
    title: "Encore",
    link: "https://encore.eci.gov.in/ac/public/officer-login",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/EMS2.png",
    alt: "EVM Management System",
    title: "EVM Management System",
    link: "https://ems2.eci.gov.in/login",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/suvidha_new.png",
    alt: "Suvidha",
    title: "Suvidha",
    link: "https://suvidha.eci.gov.in/ac/public/login",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/nvsp.jpg",
    alt: "National Voters' Services Portal",
    title: "National Voters' Services Portal",
    link: "https://voters.eci.gov.in/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/Affidavit.png",
    alt: "Affidavit Portal",
    title: "Affidavit Portal",
    link: "https://affidavit.eci.gov.in/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/VTR.png",
    alt: "Voter Turnout",
    title: "Voter Turnout",
    link: "https://play.google.com/store/apps/details?id=in.gov.eci.pollturnout&hl=en_IN",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/Sugam_2024.png",
    alt: "Asugam",
    title: "General Election 2024 - Asugam",
    link: "https://ele.bihar.gov.in/SUGAM-VMS-GELS-2024/?AspxAutoDetectCookieSupport=1",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/KYC.png",
    alt: "Know Your Candidate",
    title: "Know Your Candidate",
    link: "https://www.eci.gov.in/error",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_img15.jpg",
    alt: "National Grievances Redressal System",
    title: "National Grievances Redressal System",
    link: "https://eci-citizenservices.eci.nic.in/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/sugam_bye_ele_2021.jpg",
    alt: "Vehicle Management System",
    title: "Vehicle Management System",
    link: "https://ele.bihar.gov.in/sugam-vms-bye-ele-2021/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_electoraloffences.png",
    alt: "Electoral Offences",
    title: "Electoral Offences",
    link: "https://ele.bihar.gov.in/electoral-offences/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/client_handbook.png",
    alt: "Handbook References",
    title: "Handbook References",
    link: "https://ele.bihar.gov.in/handbook-reference/",
  },
  {
    src: "https://ceoelection.bihar.gov.in/img_new/app/exgratia.png",
    alt: "Ex Gratia",
    title: "Ex Gratia Online Monitoring System",
    link: "https://ele.bihar.gov.in/aaa-online/",
  },
];

const AppCard = ({ app }) => (
  <a
    href={app.link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg mx-4 w-44 md:w-56 lg:w-64"
  >
    <img
      src={app.src}
      alt={app.alt}
      className="w-full  object-fit bg-gray-100"
      loading="lazy"
    />
    <div
      className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {app.title}
    </div>
  </a>
);

export default function ICTApplications() {
  return (
    <section
      className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-5 px-2  overflow-hidden"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <h2 className="text-5xl  font-semibold text-center mb-12 bg-gradient-to-b from-red-900 via-red-600 to-orange-400 bg-clip-text text-transparent">
        ICT Applications
      </h2>

      <div className="max-w-8xl mx-2">
        <Marquee pauseOnHover repeat={4}>
          {apps.map((app, idx) => (
            <AppCard key={idx} app={app} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
