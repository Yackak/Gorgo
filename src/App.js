import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analyze from "../src/App/screens/mvp/AnalysisPage/AnalysisPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analyze />} />
      </Routes>
    </Router>
  );
}

export default App;
