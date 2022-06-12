import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlgorithmsPage } from "./components/pages/algorithms";
import { HomePage } from "./components/pages/home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<AlgorithmsPage />} />
      </Routes>
    </Router>
  );
}
