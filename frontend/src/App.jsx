import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import Login from "./pages/login";
import Homepage from "./pages/Homepage";
import Electoral_search from "./pages/Electoral_search";
import Sir_finalroll from "./pages/Sir_finalroll";
import Sir_finalroll_forfullAC from "./pages/Sir_finalroll_forfullAC";
import Search_name_draft_roll from "./pages/Search_name_draft_roll";
function AppContent() {
  const location = useLocation();
  return (
    <>
      {/* You can use location if needed for animations */}
      <Home />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sections/:sectionPath" element={<SectionPage />} />
        <Route path="/electoral-search" element={<Electoral_search />} />
        <Route path="/sir-finalroll" element={<Sir_finalroll />} />
        <Route path="/sir-finalroll-for-full-AC" element={<Sir_finalroll_forfullAC />} />
        <Route path="/search-name-draft-roll" element={<Search_name_draft_roll />} />
      </Routes>
    </Router>
  );
}
