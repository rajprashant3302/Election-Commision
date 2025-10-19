import Layout from "./Layout";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import FormsPage from "./Navbar-Pages/FormsPage";
import PoliticalPartiesPage from "./Navbar-Pages/PoliticalPartyReg";
import ElectionSymbols from "./Navbar-Pages/ElectionSymbols";
import Sparrow from "./Navbar-Pages/Sparrow";
import OrganisationChart from "./Navbar-Pages/OrganisationChart";
import TransfersPage from "./Navbar-Pages/TransferPage";
import ContactUsPage from "./Navbar-Pages/ContactPage";
import ContactDetails from "./Navbar-Pages/ContactDetails";
import RoEroContact from "./Navbar-Pages/RoEroContact";
import Randomisation from "./Navbar-Pages/Randomisation";
import FlcEvm from "./Navbar-Pages/FlcEvm";
import Workshop from "./Navbar-Pages/Workshop";
import CandidateExpenditure from "./Navbar-Pages/CandidateExpenditure";
import CandidateAffidavits from "./Navbar-Pages/CandidateAffidavits";
import PWDVoters from "./Navbar-Pages/PWDVoters";
import Sweep from "./Navbar-Pages/Sweep";
import Helpline from "./Navbar-Pages/Helpline";
import NationalVotersDay from "./Navbar-Pages/NationalVotersDay";
import FactCheck from "./Navbar-Pages/FactCheck";

// Infotab Pages
import CurrentIssues from "./pages/CurrentIssues";
import PressReleases from "./pages/PressReleases";
import Instructions from "./pages/Instructions";
import TenderVacancies from "./pages/TenderVacancies";
import ElectionStories from "./pages/ElectionStories";
import FAQs from "./pages/FAQs";
import LatestNews from "./pages/LatestNews";
import TrainingMaterials from "./Navbar-Pages/TrainingMaterials";
import ImportantMaps from "./Navbar-Pages/ImportantMaps";
import RTI from "./Navbar-Pages/RTI";
import ModelModeOfConduct from "./Navbar-Pages/ModelMode";
import PastElections from "./Navbar-Pages/PastElections";
import ElectionPlan from "./Navbar-Pages/ElectionPlan";
import ImportantInstructions from "./Navbar-Pages/ImportantInstructions";
import ExGratiaStatusPage from "./Navbar-Pages/ExGratiaStatusPage";

// Political Party and ECI Pages
import NewPartyRegistration from "./pages/PoliticalParty/NewPartyRegistration";
import ElectionSymbolAllotment from "./pages/PoliticalParty/ElectionSymbolAllotment";
import Permission from "./pages/PoliticalParty/Permission";
import Nomination from "./pages/PoliticalParty/Nomination";
import Affidavit from "./pages/PoliticalParty/Affidavit";
import ServiceVoterPortal from "./pages/EciOfficial/ServiceVoterPortal";
import PostalBallots from "./pages/EciOfficial/PostalBallots";
import Handbook from "./pages/PoliticalParty/Handbook.jsx";
import Compendium from "./pages/EciOfficial/Compendium.jsx";
import ObserverPortal from "./pages/EciOfficial/ObserverPortal.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/sections/:sectionPath", element: <SectionPage /> },
  { path: "/formpage", element: <FormsPage /> },
  { path: "/political-party-registration", element: <PoliticalPartiesPage /> },
  { path: "/party-symbols", element: <ElectionSymbols /> },
  { path: "/sparrow", element: <Sparrow /> },
  { path: "/organizational-structure", element: <OrganisationChart /> },
  { path: "/transfers-promotions", element: <TransfersPage /> },
  { path: "/contact-us", element: <ContactUsPage /> },
  { path: "/contact/:sectionId", element: <ContactDetails /> },
  { path: "/ro-ero-contact", element: <RoEroContact /> },
  { path: "/evm-randomisation-list", element: <Randomisation /> },
  { path: "/flc-ok-evms", element: <FlcEvm /> },
  { path: "/workshops-events", element: <Workshop /> },
  { path: "/expenditure-balance-sheets", element: <CandidateExpenditure /> },
  { path: "/candidate-affidavits", element: <CandidateAffidavits /> },
  { path: "/pwd-voters", element: <PWDVoters /> },
  { path: "/sveep", element: <Sweep /> },
  { path: "/voter-helpline", element: <Helpline /> },
  { path: "/national-voters-day", element: <NationalVotersDay /> },
  { path: "/fact-check", element: <FactCheck /> },
  { path: "/training-materials", element: <TrainingMaterials /> },
  { path: "/important-maps", element: <ImportantMaps/> },
  { path: "/rti", element: <RTI/> },
  { path: "/model-code-of-conduct", element: <ModelModeOfConduct/> },
  { path: "/past-elections", element: <PastElections/> },
  { path: "/semp-demp", element: <ElectionPlan/> },
  { path: "/important-instructions", element: <ImportantInstructions/> },
  { path: "/ex-gratia-status", element: <ExGratiaStatusPage/> },

  // Infotab Pages
  { path: "/latest-news", element: <LatestNews /> },
  { path: "/current-issues", element: <CurrentIssues /> },
  { path: "/press-releases", element: <PressReleases /> },
  { path: "/instructions", element: <Instructions /> },
  { path: "/tender-vacancies", element: <TenderVacancies /> },
  { path: "/election-stories", element: <ElectionStories /> },
  { path: "/faqs", element: <FAQs /> },

  // Political Party Routes
  { path: "/sections/newpartyregistration", element: <NewPartyRegistration /> },
  { path: "/sections/electionsymbolallotment", element: <ElectionSymbolAllotment /> },
  { path: "/sections/nomination", element: <Nomination /> },
  { path: "/sections/permission", element: <Permission /> },
  { path: "/sections/affidavit", element: <Affidavit /> },

  // ECI ROUTES
  { path: "/sections/eci/observerportal", element: <ObserverPortal /> },
  { path: "/sections/eci/compendium", element: <Compendium /> },
  { path: "/sections/eci/handbook", element: <Handbook /> },
  { path: "/sections/eci/postalballots", element: <PostalBallots /> },
  { path: "/sections/eci/servicevoterportal", element: <ServiceVoterPortal /> },

];

export { Layout, routes };
