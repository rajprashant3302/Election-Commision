import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";

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
        <Route path="/sections/:sectionPath" element={<SectionPage />} />
      </Routes>
    </Router>
  );
}
