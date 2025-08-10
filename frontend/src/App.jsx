import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Infotabs from "./Components/Infotabs"
import Home from "./pages/Home";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Home/>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
