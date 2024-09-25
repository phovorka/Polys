import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main.jsx";
import Footer from "./pages/footer.jsx";
import Header from "./pages/header.jsx";
import How from "./pages/how.jsx";

// Import and apply CSS stylesheet from Tailwind
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Definice jednotlivých stránek */}
          <Route path="/" element={<Main />} />
          <Route path="/main.jsx" element={<Main />} />
          <Route path="/how.jsx" element={<How />} />
        </Routes>
        <Footer />
      </Router>

      
    </>
  );
}
