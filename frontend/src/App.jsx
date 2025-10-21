import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, routes } from "./Route";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {routes.map((r, idx) => (
            <Route key={idx} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
