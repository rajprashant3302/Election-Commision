// File: routes.jsx
import Layout from "./Layout";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage"
import FormsPage from "./Navbar Pages/FormsPage";
import PoliticalPartiesPage from "./Navbar Pages/PoliticalPartyReg";
import ElectionSymbols from "./Navbar Pages/ElectionSymbols";
import Sparrow from "./Navbar Pages/Sparrow";
import OrganisationChart from "./Navbar Pages/OrganisationChart";
import TransfersPage from "./Navbar Pages/TransferPage";
import ContactUsPage from "./Navbar Pages/ContactPage";
import ContactDetailPage from "./Navbar Pages/ContactDetails";
import RoEroContact from "./Navbar Pages/RoEroContact";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sections/:sectionPath",
    element: <SectionPage />,
  },
  {
    path: "/formpage",
    element: <FormsPage />,
  },
  {
    path: "/political-party-registration",
    element: <PoliticalPartiesPage />,
  },
  {
    path: "/party-symbols",
    element: <ElectionSymbols />,
  },
  {
    path: "/sparrow",
    element: <Sparrow />,
  },
  {
    path: "/organizational-structure",
    element: <OrganisationChart />,
  },
  {
    path: "/transfers-promotions",
    element:<TransfersPage/> ,
  },
  {
    path : "/contact-us",
    element: <ContactUsPage/>
  },
  {
     path :"/contact/:sectionId" ,
     element : <ContactDetailPage />
  },
  {
    path : "/ro-ero-contact",
    element : <RoEroContact/>
  }
];

export { Layout, routes };
